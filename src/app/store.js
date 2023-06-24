import { configureStore } from '@reduxjs/toolkit'
import  toDoSlice  from './slices/toDoSlice'
import counterReducer from './slices/counterSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    toDo: toDoSlice,
  },
})