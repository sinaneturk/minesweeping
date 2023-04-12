import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    mineNumber: 10,
  },
  reducers: {

    setMineNumber: (state, action) => {
      state.mineNumber = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, setMineNumber } = counterSlice.actions

export default counterSlice.reducer