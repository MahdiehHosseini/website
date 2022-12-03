import { configureStore } from '@reduxjs/toolkit'
import toggleReducer from './slice/toggleSlice'
export const store = configureStore({
  reducer: {
     toggle : toggleReducer
  }
})