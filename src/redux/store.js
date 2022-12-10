import { configureStore } from '@reduxjs/toolkit';
import userNumberReducer from './userNumberSlice.js';
import serverMessageSlice from './serverMessageSlice.js';

export default configureStore({
  reducer: {
    userNumber: userNumberReducer,
    serverMessageSlice: serverMessageSlice
  },
})