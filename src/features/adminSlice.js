import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = process.env.REACT_APP_BACKEND_URL;

const initialState = {
  users : [],
  userStatus: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed',
  userError: null,
  artists : [],
  artistStatus : 'idle',
  artistError : null,
  albums : [],
  albumStatus : 'idle',
  albumError : null,
  songs : [],
  songsStatus : 'idle',
  songsError : null,

  // create api messages
  artistMsg : null,
  albumMsg : null,
  songMsg : null,

  deleteArtistMsg : null,
  deleteAlbumMsg : null,
  deleteSongtMsg : null,
}

export const getAllusers = createAsyncThunk("admin/getAllusers", async (thunkAPI) => {
    const res = await axios.get(`${baseUrl}api/v1/auth/getAllUsers`);
    return res.data;
})

export const getAllArtist = createAsyncThunk("admin/getAllArtist", async (thunkAPI) => {
  const res = await axios.get(`${baseUrl}api/v1/artist`);
  return res.data;
})

export const getAllAlbum = createAsyncThunk("admin/getAllAlbum", async (thunkAPI) => {
  const res = await axios.get(`${baseUrl}api/v1/album`);
  return res.data;
})

export const getAllSongs = createAsyncThunk("admin/getAllSongs", async (page) => {
  const res = await axios.get(`${baseUrl}api/v1/song?page=${page}`);
  return res.data;
})

export const createSong = createAsyncThunk("admin/createSong", async (data) => {
  const res = await axios.post(`${baseUrl}api/v1/song`,data);
  return res.data.msg;
})

export const createArtist = createAsyncThunk("admin/createArtist", async (data) => {
  const res = await axios.post(`${baseUrl}api/v1/artist`,data);
  return res.data.msg;
})

export const createAlbum = createAsyncThunk("admin/createAlbum", async (data) => {
  const res = await axios.post(`${baseUrl}api/v1/album`,data);
  return res.data.msg;
})

export const deleteArtist = createAsyncThunk("admin/deleteArtist", async (id) => {
  const res = await axios.delete(`${baseUrl}api/v1/artist/${id}`);
  return res.data.msg;
})

export const deleteAlbum = createAsyncThunk("admin/deleteAlbum", async (id) => {
  const res = await axios.delete(`${baseUrl}api/v1/album/${id}`);
  return res.data.msg;
})

export const deleteSong = createAsyncThunk("admin/deleteSong", async (id) => {
  const res = await axios.delete(`${baseUrl}api/v1/song/${id}`);
  return res.data.msg;
})

export const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers : {
    removeArtist : (state,action) => {
      state.artists = state.artists.filter((artist)=> artist._id !== action.payload)
    },
    removeAlbum : (state,action) => {
      state.albums = state.albums.filter((album)=> album._id !== action.payload)
    },
    removeSong : (state,action) => {
      state.songs.songs = state.songs.songs.filter((song)=> song._id !== action.payload)
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllusers.pending, (state, action) => {
        state.userStatus = "loading"
      })
      .addCase(getAllusers.fulfilled, (state, action) => {
        state.userStatus = "succeeded"
        state.users = action.payload;
      })
      .addCase(getAllusers.rejected, (state, action) => {
        state.userStatus = "failed"
        state.userError = action.error.message
      })
      .addCase(getAllSongs.pending, (state, action) => {
        state.songsStatus = "loading"
      })
      .addCase(getAllSongs.fulfilled, (state, action) => {
        state.songsStatus = "succeeded"
        state.songs = action.payload;
      })
      .addCase(getAllSongs.rejected, (state, action) => {
        state.songsStatus = "failed"
        state.songsError = action.error.message
      })
      .addCase(getAllArtist.pending, (state, action) => {
        state.artistStatus = "loading"
      })
      .addCase(getAllArtist.fulfilled, (state, action) => {
        state.artistStatus = "succeeded"
        state.artists = action.payload;
      })
      .addCase(getAllArtist.rejected, (state, action) => {
        state.artistStatus = "failed"
        state.artistError = action.error.message
      })
      .addCase(getAllAlbum.pending, (state, action) => {
        state.albumStatus = "loading"
      })
      .addCase(getAllAlbum.fulfilled, (state, action) => {
        state.albumStatus = "succeeded"
        state.albums = action.payload;
      })
      .addCase(getAllAlbum.rejected, (state, action) => {
        state.albumStatus = "failed"
        state.albumError = action.error.message
      })
      .addCase(createArtist.pending, (state, action) => {
        state.artistMsg  = "Processing..."
      })
      .addCase(createArtist.fulfilled, (state,action ) => {
        state.artistMsg = action.payload
      })
      .addCase(createArtist.rejected, (state, action) => {
        state.artistMsg = action.error.message
      })
      .addCase(createAlbum.pending, (state, action) => {
        state.albumMsg  = "Processing..."
      })
      .addCase(createAlbum.fulfilled, (state,action ) => {
        state.albumMsg = action.payload
      })
      .addCase(createAlbum.rejected, (state, action) => {
        state.albumMsg = action.error.message
      })
      .addCase(createSong.pending, (state, action) => {
        state.songMsg  = "Processing..."
      })
      .addCase(createSong.fulfilled, (state,action ) => {
        state.songMsg = action.payload
      })
      .addCase(createSong.rejected, (state, action) => {
        state.songMsg = action.error.message
      })
      .addCase(deleteArtist.pending, (state, action) => {
        state.deleteArtistMsg  = "Processing..."
      })
      .addCase(deleteArtist.fulfilled, (state,action ) => {
        state.deleteArtistMsg = action.payload
      })
      .addCase(deleteArtist.rejected, (state, action) => {
        state.deleteArtistMsg = action.error.message
      })
      .addCase(deleteAlbum.pending, (state, action) => {
        state.deleteAlbumMsg  = "Processing..."
      })
      .addCase(deleteAlbum.fulfilled, (state,action ) => {
        state.deleteAlbumMsg = action.payload
      })
      .addCase(deleteAlbum.rejected, (state, action) => {
        state.deleteAlbumMsg = action.error.message
      })
      .addCase(deleteSong.pending, (state, action) => {
        state.deleteSongtMsg  = "Processing..."
      })
      .addCase(deleteSong.fulfilled, (state,action ) => {
        state.deleteSongtMsg = action.payload
      })
      .addCase(deleteSong.rejected, (state, action) => {
        state.deleteSongtMsg = action.error.message
      })
  },
})

// this is for dispatch
export const {removeArtist,removeAlbum, removeSong} = adminSlice.actions;

// this is for configureStore
export default adminSlice.reducer;