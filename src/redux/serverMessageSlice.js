import { createSlice } from '@reduxjs/toolkit';
import { DISPLAY_TYPE_INFO, DISPLAY_TYPE_SUCCESS } from '../constants/constants.js';

export const serverMessageSlice = createSlice(
  {
    name: 'serverMessageSlice',
    initialState:
    {
      value: {
        'date': new Date().toLocaleTimeString(),
        'displayType': DISPLAY_TYPE_INFO,
        'isLoading': true,
        'message': 'The server has no message at this time!'
      }
    },
    reducers:
    {
      setServerMessage: (state, action) => {
        state.value.date = new Date().toLocaleTimeString();
        state.value.displayType = action.payload.displayType;
        state.value.isLoading = action.payload.isLoading;
        if (state.value.isLoading)
          state.value.message = `The User Number of ${action.payload.message} has been restored from the database!`;
        else
          state.value.message = `Your User Number of ${action.payload.message} has been saved to the database!`;
      }
    },
  })

export const { setServerMessage } = serverMessageSlice.actions;

export default serverMessageSlice.reducer;