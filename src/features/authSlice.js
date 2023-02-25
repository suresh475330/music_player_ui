import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = process.env.REACT_APP_BACKEND_URL;
const user = JSON.parse(window.localStorage.getItem("user"));
const isAuth = JSON.parse(window.localStorage.getItem("isAuth"));

const initialState = {
  user: user ? user : null,
  isAuth: isAuth ? true : false,
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed',
  error: null
}

export const vaildateUser = createAsyncThunk("auth/vaildateUser", async (token, thunkAPI) => {
  const res = await axios.get(`${baseUrl}api/v1/auth/login`, {
    headers: {
      Authorization: "Bearer " + token,
    }
  });

  return res.data;

})



export const todoSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state, action) => {
      window.localStorage.removeItem("user");
      window.localStorage.removeItem("isAuth");
      state.user = null;
      state.isAuth = false;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(vaildateUser.pending, (state, action) => {
        state.status = "loading"
      })
      .addCase(vaildateUser.fulfilled, (state, action) => {
        state.status = "succeeded"
        state.user = action.payload.user;
        state.isAuth = true;
        window.localStorage.setItem("isAuth", true);
        window.localStorage.setItem("user", JSON.stringify(action.payload.user));
      })
      .addCase(vaildateUser.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.error.message
      })
  },
})

// this is for dispatch
export const { logout } = todoSlice.actions;

// this is for configureStore
export default todoSlice.reducer;