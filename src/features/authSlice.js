import { createSlice } from '@reduxjs/toolkit';

const user = JSON.parse(localStorage.getItem("user"))

const initialState = {
    user: user ? user : null,
    isError: false,
    isSucces: false,
    isLoadind: false,
    message: ""
}

export const todoSlice = createSlice({
  name: 'auth',
  initialState,
  reducers : {
    reset: (state, action) => {
        state.isError = false;
        state.isSucces = false;
        state.isLoadind = false;
        state.message = "";
    },
    logIn : (state,action) => {
        localStorage.setItem("user",JSON.stringify(action.payload));
        state.user = action.payload;
    },
    logOut : (state,action) => {
        localStorage.removeItem("user")
        state.user = null;
    }
  }

})

// this is for dispatch
export const { reset,logIn,logOut } = todoSlice.actions;

// this is for configureStore
export default todoSlice.reducer;