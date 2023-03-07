import { createAsyncThunk,createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = process.env.REACT_APP_BACKEND_URL;

const initialState = {
    searchResult: [],
    searchStatus: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed',
    searchError: null
}

export const getSearchSongs = createAsyncThunk("search/getSearchSongs", async (searchText) => {
    const res = await axios.get(`${baseUrl}api/v1/song/search?title=${searchText}`);
    return res.data;
})
export const getSearchAlbums = createAsyncThunk("search/getSearchAlbums", async (searchText) => {
    const res = await axios.get(`${baseUrl}api/v1/album/search?title=${searchText}`);
    return res.data;
})
export const getSearchArtist = createAsyncThunk("search/getSearchArtist", async (searchText) => {
    const res = await axios.get(`${baseUrl}api/v1/artist/search?name=${searchText}`);
    return res.data;
})


export const searchSlice = createSlice({
    name: 'search',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getSearchSongs.pending, (state, action) => {
                state.searchStatus = "loading";
            })
            .addCase(getSearchSongs.fulfilled, (state, action) => {
                state.searchStatus = "succeeded";
                state.searchResult = action.payload;
            })
            .addCase(getSearchSongs.rejected, (state, action) => {
                state.searchStatus = "failed";
                state.searchError = action.error.message;
            })
            .addCase(getSearchAlbums.pending, (state, action) => {
                state.searchStatus = "loading";
            })
            .addCase(getSearchAlbums.fulfilled, (state, action) => {
                state.searchStatus = "succeeded";
                state.searchResult = action.payload;
            })
            .addCase(getSearchAlbums.rejected, (state, action) => {
                state.searchStatus = "failed";
                state.searchError = action.error.message;
            })
            .addCase(getSearchArtist.pending, (state, action) => {
                state.searchStatus = "loading";
            })
            .addCase(getSearchArtist.fulfilled, (state, action) => {
                state.searchStatus = "succeeded";
                state.searchResult = action.payload;
            })
            .addCase(getSearchArtist.rejected, (state, action) => {
                state.searchStatus = "failed";
                state.searchError = action.error.message;
            })
    }

})

// this is for dispatch
// export const { logout } = searchSlice.actions;

// this is for configureStore
export default searchSlice.reducer;