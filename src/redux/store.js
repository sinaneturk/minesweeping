import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/mines';
import cellReducer from './slices/cell';

const store =  configureStore({
  reducer: {
    counter:counterReducer,
    cell: cellReducer
  },
})

export default store;