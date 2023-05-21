import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type Repository from '../../types/repository'
import { toggleFavorite } from './favoritesSlice'
import { RootState } from '../store'
import { getRepositories } from '../../api/repositories'
import { toast } from 'react-hot-toast'

export const fetchRepositories = createAsyncThunk<
  Repository[],
  { page: number; language?: string },
  { state: RootState }
>(
  'repositories/fetchRepositories',
  async ({ page, language }, { getState }) => {
    try {
      const res = await getRepositories(page, language)
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
    } catch (error) {
      toast.error(
        error.response.status === 403
          ? 'API rate exceeded. Please wait a bit and retry'
          : 'Something went wrong, please try again.'
      )
      return Promise.reject(error)
    }
  }
)

export const repositoriesSlice = createSlice({
  name: 'repositories',
  initialState: {
    isLoading: true,
    page: 1,
    data: [] as Repository[],
    language: '',
  },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchRepositories.fulfilled, (state, action) => {
      const { page, language } = action.meta.arg
      state.data =
        page > 1 ? [...state.data, ...action.payload] : action.payload
      state.page = page + 1
      state.language = language || ''
      state.isLoading = false
    }),
      builder.addCase(fetchRepositories.pending, state => {
        state.isLoading = true
      }),
      builder.addCase(fetchRepositories.rejected, state => {
        state.isLoading = false
      }),
      builder.addCase(toggleFavorite, (state, action) => {
        const repo = action.payload
        const index = state.data.findIndex(item => item.id === repo.id)
        if (index >= 0) {
          state.data[index].is_favorite = !state.data[index].is_favorite
        }
      })
  },
})

export default repositoriesSlice.reducer
