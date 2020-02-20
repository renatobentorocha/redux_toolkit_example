import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface Integer {
  value: number;
}

const initialState: Integer = {
  value: 0
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state, action: PayloadAction<Integer>) {
      state.value = state.value + action.payload.value
    }
  }

})

export const {
  increment
} = counterSlice.actions

export default counterSlice.reducer