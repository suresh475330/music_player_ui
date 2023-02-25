import { configureStore } from '@reduxjs/toolkit';
import authSlice from './features/authSlice';
import designSlice from './features/designSlice';
import adminSlice from './features/adminSlice';

export default configureStore({
  reducer: {
    auth : authSlice,
    design : designSlice,
    admin : adminSlice
  },
});