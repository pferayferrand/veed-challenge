import dayjs from 'dayjs'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type Repository from '../../types/repository'
import { GITHUB_API_URL } from '../../config/constants'
import { toggleFavorite } from './favoritesSlice'
import { RootState } from '../store'

export const fetchRepositories = createAsyncThunk<
  any,
  void,
  { state: RootState }
>('repositories/fetchRepositories', async (_, { getState }) => {
  const from = dayjs().subtract(7, 'day').format('YYYY-MM-DD')
  const response = await fetch(
    `${GITHUB_API_URL}?q=created:>${from}&sort=stars&order=desc`
  )
  const res = await response.json()
  const favorites = getState().favorites
  return res.items.map((item: any) => ({
    id: item.id,
    full_name: item.full_name,
    description: item.description,
    html_url: item.html_url,
    stars: item.stargazers_count,
    language: item.language,
    created_at: item.created_at,
    is_favorite: !!favorites.find((fav: Repository) => fav.id === item.id),
  }))
})

const initialState: Repository[] = []

export const repositoriesSlice = createSlice({
  name: 'repositories',
  initialState,
  reducers: {
    increment: state => {
      state
    },
  },
  extraReducers(builder) {
    builder.addCase(
      fetchRepositories.fulfilled,
      (_, action: PayloadAction<Repository[]>) => {
        return action.payload
      }
    ),
      builder.addCase(toggleFavorite, (state, action) => {
        const repo = action.payload
        const index = state.findIndex(item => item.id === repo.id)
        state[index].is_favorite = !state[index].is_favorite
      })
  },
})

export const { increment } = repositoriesSlice.actions

export default repositoriesSlice.reducer
