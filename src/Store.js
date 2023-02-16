import { configureStore } from '@reduxjs/toolkit';
import authSlice from './features/authSlice';
import designSlice from './features/designSlice';

export default configureStore({
  reducer: {
    auth : authSlice,
    design : designSlice
  },
});