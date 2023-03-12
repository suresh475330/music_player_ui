import { configureStore } from '@reduxjs/toolkit';
import authSlice from './features/authSlice';
import designSlice from './features/designSlice';
import adminSlice from './features/adminSlice';
import searchSlice from './features/searchSlice';
import homeSlice from './features/homeSlice';
import playerSlice from './features/playerSlice';

export default configureStore({
  reducer: {
    auth : authSlice,
    design : designSlice,
    admin : adminSlice,
    search : searchSlice,
    home : homeSlice,
    player : playerSlice
  },
});