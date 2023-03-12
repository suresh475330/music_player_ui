import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = process.env.REACT_APP_BACKEND_URL;

const likedSongLocal = JSON.parse(window.localStorage.getItem("likedSongs"));

const initialState = {
    songsPlayList: [],
    currentSongIndex: 0,

    likedSong: likedSongLocal ? likedSongLocal : [],
    isLiked: false,

    addFavouriteSongMsg: null,
    addFavouriteSongStatus: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed',

    removeFavouriteSongMsg: null,
    removeFavouriteSongStatus: 'idle',

    likedSongsData: [],
    likedSongsDataStatus: 'idle',
    likedSongsDataError: null
}

export const addFavourite = createAsyncThunk("player/addFavourite", async (obj) => {
    const res = await axios.patch(`${baseUrl}api/v1/favourite/addFavourite`, obj);
    return res.data.msg;

})
export const removeFavourite = createAsyncThunk("player/removeFavourite", async (obj) => {
    const res = await axios.delete(`${baseUrl}api/v1/favourite/removeFavourite`, { data: obj });
    return res.data.msg;
})

export const getAllLikedSongs = createAsyncThunk("player/getAllLikedSongs", async (userId) => {
    const res = await axios.get(`${baseUrl}api/v1/favourite/${userId}`,);
    return res.data;
})

export const getAllLikedSongsId = createAsyncThunk("player/getAllLikedSongsId", async (userId) => {
    const res = await axios.get(`${baseUrl}api/v1/favourite?userId=${userId}`,);
    return res.data;
})


export const playerSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {
        pushSong: (state, action) => {

            // Check if song is already id there
            function checkSongItem() {

                let item = false;
                for (const iterator of state.songsPlayList) {
                    if (iterator._id === action.payload._id) {
                        item = true;
                    }
                }
                return item
            }

            // If song is there than remove the old song 
            if (checkSongItem()) {
                state.songsPlayList = state.songsPlayList.filter((item) => { return item._id !== action.payload._id })
                state.currentSongIndex = state.currentSongIndex - 1;
            }

            state.songsPlayList = [...state.songsPlayList, action.payload];
            if (state.songsPlayList.length !== 1) {
                state.currentSongIndex = state.songsPlayList.length - 1;
            }

            function checkItem() {

                let check = false;

                for (const iterator of state.likedSong) {
                    if (iterator === state.songsPlayList[state.currentSongIndex]._id) {
                        check = true;
                    }
                }

                return check

            }

            if (checkItem()) {
                state.isLiked = true;
            } else {
                state.isLiked = false;
            }
        },
        autoNextSong: (state, action) => {
            // Play next song when current song ends
            if (state.currentSongIndex !== state.songsPlayList.length - 1) {
                state.currentSongIndex = state.currentSongIndex + 1;
            } else {
                // If no next song is there play 0 index song
                state.currentSongIndex = 0;
            }
        },
        handleNextSong: (state, action) => {
            if (state.currentSongIndex < state.songsPlayList.length - 1) {
                state.currentSongIndex = state.currentSongIndex + 1
            }

        },
        handlePreviousSong: (state, action) => {
            if (state.currentSongIndex > 0) {
                state.currentSongIndex = state.currentSongIndex - 1
            }

        },
        resetAddFavourite: (state, action) => {
            state.addFavouriteSongStatus = "idle";
            state.addFavouriteSongMsg = null;
        },
        resetRemoveFavourite: (state, action) => {
            state.removeFavouriteSongStatus = "idle";
            state.removeFavouriteSongMsg = null;
        },
        addLikedSong: (state, action) => {
            state.likedSong.push(action.payload);
            localStorage.setItem('likedSongs', JSON.stringify(state.likedSong));
        },
        removeLikedSong: (state, action) => {
            state.likedSong = state.likedSong.filter((item) => { return item !== action.payload })
            localStorage.setItem('likedSongs', JSON.stringify(state.likedSong));
        },
        handleLikedChenge: (state, action) => {

            function checkItem() {

                let check = false;

                for (const iterator of state.likedSong) {
                    if (iterator === state.songsPlayList[state.currentSongIndex]._id) {
                        check = true;
                    }
                }

                return check

            }

            if (checkItem()) {
                state.isLiked = true;
            } else {
                state.isLiked = false;
            }

        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(addFavourite.pending, (state, action) => {
                state.addFavouriteSongStatus = "loading..."
            })
            .addCase(addFavourite.fulfilled, (state, action) => {
                state.addFavouriteSongStatus = "succeeded";
                state.addFavouriteSongMsg = action.payload;
            })
            .addCase(addFavourite.rejected, (state, action) => {
                state.addFavouriteSongStatus = "failed";
                state.addFavouriteSongMsg = action.error.message
            })
            .addCase(removeFavourite.pending, (state, action) => {
                state.removeFavouriteSongStatus = "loading..."
            })
            .addCase(removeFavourite.fulfilled, (state, action) => {
                state.removeFavouriteSongStatus = "succeeded";
                state.removeFavouriteSongMsg = action.payload;
            })
            .addCase(removeFavourite.rejected, (state, action) => {
                state.removeFavouriteSongStatus = "failed";
                state.removeFavouriteSongMsg = action.error.message
            })
            .addCase(getAllLikedSongs.pending, (state, action) => {
                state.likedSongsDataStatus = "loading"
            })
            .addCase(getAllLikedSongs.fulfilled, (state, action) => {
                state.likedSongsDataStatus = "succeeded"
                state.likedSongsData = action.payload[0].favourites;
            })
            .addCase(getAllLikedSongs.rejected, (state, action) => {
                state.likedSongsDataStatus = "failed"
                state.likedSongsDataError = action.error.message
            })
            .addCase(getAllLikedSongsId.fulfilled, (state, action) => {
                localStorage.setItem('likedSongs', JSON.stringify(action.payload[0].favourites));
                state.likedSong = action.payload[0].favourites;
            })
    },

})

// this is for dispatch
export const { handlePreviousSong, pushSong,
    autoNextSong, handleNextSong, resetAddFavourite,
    resetRemoveFavourite, addLikedSong, removeLikedSong,
    handleLikedChenge } = playerSlice.actions;

// this is for configureStore
export default playerSlice.reducer;