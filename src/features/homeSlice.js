import { createAsyncThunk,createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = process.env.REACT_APP_BACKEND_URL;

const initialState = {
    randomSongs : [],
    randomSongsStatus: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed',
    randomSongsError: null,

    randomAlbums : [],
    randomAlbumsStatus: 'idle',
    randomAlbumsError: null,

    randomArtists : [],
    randomArtistsStatus: 'idle',
    randomArtistsError: null,   
    
    albumSongs : [],
    albumSongsStatus: 'idle',
    albumSongsError: null, 

    artistSongs : [],
    artistSongsStatus: 'idle',
    artistSongsError: null,   
}


export const getRandomSongs = createAsyncThunk("home/getRandomSongs", async (searchText) => {
    const res = await axios.get(`${baseUrl}api/v1/song/random?length=6`);
    return res.data;
})
export const getRandomAlbums = createAsyncThunk("home/getRandomAlbums", async (searchText) => {
    const res = await axios.get(`${baseUrl}api/v1/album/random?length=5`);
    return res.data;
})
export const getRandomArtists = createAsyncThunk("home/getRandomArtists", async (searchText) => {
    const res = await axios.get(`${baseUrl}api/v1/artist/random?length=5`);
    return res.data;
})
export const getAlbumSongs = createAsyncThunk("home/getAlbumSongs", async (albumId) => {
    const res = await axios.get(`${baseUrl}api/v1/song?albumId=${albumId}`);
    return res.data;
})

export const getArtistSongs = createAsyncThunk("home/getArtistSongs", async (artistId) => {
    const res = await axios.get(`${baseUrl}api/v1/song?artistId=${artistId}`);
    return res.data;
})


export const homeSlice = createSlice({
    name: 'home',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getRandomSongs.pending, (state, action) => {
                state.randomSongsStatus = "loading";
            })
            .addCase(getRandomSongs.fulfilled, (state, action) => {
                state.randomSongsStatus = "succeeded";
                state.randomSongs = action.payload.randomSongs;
            })
            .addCase(getRandomSongs.rejected, (state, action) => {
                state.randomSongsStatus = "failed";
                state.randomSongsError = action.error.message;
            })
            .addCase(getRandomAlbums.pending, (state, action) => {
                state.randomAlbumsStatus = "loading";
            })
            .addCase(getRandomAlbums.fulfilled, (state, action) => {
                state.randomAlbumsStatus = "succeeded";
                state.randomAlbums = action.payload.randomAlbums;
            })
            .addCase(getRandomAlbums.rejected, (state, action) => {
                state.randomAlbumsStatus = "failed";
                state.randomAlbumsError = action.error.message;
            })
            .addCase(getRandomArtists.pending, (state, action) => {
                state.randomArtistsStatus = "loading";
            })
            .addCase(getRandomArtists.fulfilled, (state, action) => {
                state.randomArtistsStatus = "succeeded";
                state.randomArtists = action.payload.randomArtist;
            })
            .addCase(getRandomArtists.rejected, (state, action) => {
                state.randomArtistsStatus = "failed";
                state.randomArtistsError = action.error.message;
            })
            .addCase(getAlbumSongs.pending, (state, action) => {
                state.albumSongsStatus = "loading";
            })
            .addCase(getAlbumSongs.fulfilled, (state, action) => {
                state.albumSongsStatus = "succeeded";
                state.albumSongs = action.payload;
            })
            .addCase(getAlbumSongs.rejected, (state, action) => {
                state.albumSongsStatus = "failed";
                state.albumSongsError = action.error.message;
            })
            .addCase(getArtistSongs.pending, (state, action) => {
                state.artistSongsStatus = "loading";
            })
            .addCase(getArtistSongs.fulfilled, (state, action) => {
                state.artistSongsStatus = "succeeded";
                state.artistSongs = action.payload;
            })
            .addCase(getArtistSongs.rejected, (state, action) => {
                state.artistSongsStatus = "failed";
                state.artistSongsError = action.error.message;
            })
    }

})

// this is for dispatch
// export const { logout } = homeSlice.actions;

// this is for configureStore
export default homeSlice.reducer;