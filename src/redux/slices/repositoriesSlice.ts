import dayjs from 'dayjs'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type Repository from '../../types/repository'
import { GITHUB_API_URL } from '../../config/constants'

const fetchRepositories = createAsyncThunk(
  'repositories/fetchRepositories',
  async () => {
    const from = dayjs().subtract(7, 'day').format('YYYY-MM-DD')
    const response = await fetch(
      `${GITHUB_API_URL}?q=created:>${from}&sort=stars&order=desc`
    )
    return (await response.json()) as Repository[]
  }
)

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
      (state, action: PayloadAction<Repository[]>) => {
        return action.payload
      }
    )
  },
})

export const { increment } = repositoriesSlice.actions

export default repositoriesSlice.reducer
