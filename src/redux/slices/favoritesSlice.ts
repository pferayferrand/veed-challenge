import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import type Repository from '../../types/repository'

const initialState: Repository[] = []

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<Repository>) => {
      const repo = action.payload
      const fav = state.find(favorite => favorite.id === repo.id)
      fav ? state.splice(state.indexOf(fav), 1) : state.push(repo)
    },
  },
})

export const { toggleFavorite } = favoritesSlice.actions

export default favoritesSlice.reducer
