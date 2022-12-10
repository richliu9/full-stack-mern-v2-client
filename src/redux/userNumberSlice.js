import { createSlice } from '@reduxjs/toolkit';

export const userNumberSlice = createSlice(
  {
    name: 'userNumber',
    initialState:
    {
      value: 0,
    },
    reducers:
    {
      setUserNumber: (state, action) => {
        state.value = action.payload.userNumber;
      },
    },
  })

export const { setUserNumber } = userNumberSlice.actions;

export default userNumberSlice.reducer;