import dayjs from 'dayjs'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type Repository from '../../types/repository'
import { GITHUB_API_URL } from '../../config/constants'
import { toggleFavorite } from './favoritesSlice'
import { RootState } from '../store'

export const fetchRepositories = createAsyncThunk<
  Repository[],
  void,
  { state: RootState }
>('repositories/fetchRepositories', async (_, { getState }) => {
  const page = getState().repositories.page
  const from = dayjs().subtract(7, 'day').format('YYYY-MM-DD')
  const response = await fetch(
    `${GITHUB_API_URL}?q=created:>${from}&sort=stars&order=desc&page=${page}`
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

export const repositoriesSlice = createSlice({
  name: 'repositories',
  initialState: {
    isLoading: false,
    page: 1,
    data: [] as Repository[],
  },
  reducers: {
    increment: state => {
      state
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchRepositories.fulfilled, (state, action) => {
      state.data = [...state.data, ...action.payload]
      state.page++
    }),
      builder.addCase(toggleFavorite, (state, action) => {
        const repo = action.payload
        const index = state.data.findIndex(item => item.id === repo.id)
        state.data[index].is_favorite = !state.data[index].is_favorite
      })
  },
})

export const { increment } = repositoriesSlice.actions

export default repositoriesSlice.reducer
