import { configureStore } from '@reduxjs/toolkit'
import amazoneReducer from '../redux/AmazonSlice'

export const Store = configureStore({
  reducer: {amazoneReducer},
})