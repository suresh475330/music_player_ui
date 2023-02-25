import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = process.env.REACT_APP_BACKEND_URL;

const initialState = {
  users : [],
  userStatus: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed',
  userError: null,
  artistMsg : null,
  albumMsg : null,
  songMsg : null,
  artists : [],
  albums : []
}

export const getAllusers = createAsyncThunk("admin/getAllusers", async (thunkAPI) => {
    const res = await axios.get(`${baseUrl}api/v1/auth/getAllUsers`);
    return res.data;
})

export const createArtist = createAsyncThunk("admin/createArtist", async (data) => {
    const res = await axios.post(`${baseUrl}api/v1/artist`,data);
    return res.data.msg;
})

export const createAlbum = createAsyncThunk("admin/createAlbum", async (data) => {
    const res = await axios.post(`${baseUrl}api/v1/album`,data);
    return res.data.msg;
})

export const getAllArtist = createAsyncThunk("admin/getAllArtist", async (thunkAPI) => {
  const res = await axios.get(`${baseUrl}api/v1/artist`);
  return res.data;
})

export const getAllAlbum = createAsyncThunk("admin/getAllAlbum", async (thunkAPI) => {
  const res = await axios.get(`${baseUrl}api/v1/album`);
  return res.data;
})

export const createSong = createAsyncThunk("admin/createSong", async (data) => {
  const res = await axios.post(`${baseUrl}api/v1/song`,data);
  return res.data.msg;
})


export const adminSlice = createSlice({
  name: 'admin',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAllusers.pending, (state, action) => {
        state.status = "loading"
      })
      .addCase(getAllusers.fulfilled, (state, action) => {
        state.status = "succeeded"
        state.users = action.payload;
      })
      .addCase(getAllusers.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.error.message
      })
      .addCase(createArtist.pending, (state, action) => {
        state.artistMsg  = "Processing..."
      })
      .addCase(createArtist.fulfilled, (state,action ) => {
        state.artistMsg = action.payload
      })
      .addCase(createArtist.rejected, (state, action) => {
        state.artistMsg = action.payload
      })
      .addCase(createAlbum.pending, (state, action) => {
        state.albumMsg  = "Processing..."
      })
      .addCase(createAlbum.fulfilled, (state,action ) => {
        state.albumMsg = action.payload
      })
      .addCase(createAlbum.rejected, (state, action) => {
        state.albumMsg = action.payload
      })
      .addCase(getAllArtist.fulfilled, (state, action) => {
        state.artists = action.payload;
      })
      .addCase(getAllAlbum.fulfilled, (state, action) => {
        state.albums = action.payload;
      })
      .addCase(createSong.pending, (state, action) => {
        state.songMsg  = "Processing..."
      })
      .addCase(createSong.fulfilled, (state,action ) => {
        state.songMsg = action.payload
      })
      .addCase(createSong.rejected, (state, action) => {
        state.songMsg = action.payload
      })
  },
})

// this is for dispatch
// export const {  } = todoSlice.actions;

// this is for configureStore
export default adminSlice.reducer;