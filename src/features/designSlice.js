import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    sideBarOpen :  false,
}

export const designSlice = createSlice({
  name: 'design',
  initialState,
  reducers : {
    setSideBarOpen : (state, action) => {
        state.sideBarOpen = !state.sideBarOpen;
    },
  }

})

// this is for dispatch
export const { setSideBarOpen } = designSlice.actions;

// this is for configureStore
export default designSlice.reducer;