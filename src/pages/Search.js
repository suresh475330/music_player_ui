import './Search.css';
import { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import SearchResult from '../components/SearchResult';
import {useDispatch} from 'react-redux'
import { getSearchSongs,getSearchArtist,getSearchAlbums } from '../features/searchSlice';
import {useDebounce} from 'use-debounce'

export default function Search() {


    const [searchInput, setSearchInput] = useState('');
    const [displayItem, setDisplayItem] = useState('songs');
    const [debouncedValue] = useDebounce(searchInput,500);
    const dispatch = useDispatch();

    function getSearchDisplaybased(){
        if(debouncedValue && debouncedValue.trim().length > 2){

            if(displayItem === 'artists'){
                dispatch(getSearchArtist(debouncedValue))
            }else if(displayItem === "albums"){
                dispatch(getSearchAlbums(debouncedValue))
            }else{
                dispatch(getSearchSongs(debouncedValue))
            }
        }
    }


    useEffect(() => {
        getSearchDisplaybased();
        
    },[debouncedValue,displayItem])

    const handleChange = (e) => {
        setSearchInput(e.target.value);
    }

    const handleDisplayChange = (e) => {
        setDisplayItem(e.target.value);
    }

    return (
        <Box sx={{ margin: "5rem 1rem 1rem" }}>


            {/* This is the seaarch bar */}

            <Paper
                component="div"
                sx={{
                    background: "#FFFFFF", borderRadius: "26px",
                    p: '2px 4px', display: 'flex', alignItems: 'center',
                    width: { xs: 300, sm: 400 }
                }} >

                <SearchIcon sx={{ p: '10px', color: "#000000" }} />
                <input
                    className='search-input'
                    placeholder="Artists, songs, or albums"
                    autoFocus={true}
                    onChange={handleChange}
                    value={searchInput}
                />
            </Paper>

            {/* This is the catgory */}

            <Box sx={{ '& > :not(style)': { m: 1 }, marginTop: "15px" }}>

                <button
                    onClick={handleDisplayChange}
                    className='search-button'
                    value={"songs"}>
                    Songs
                </button>
                <button
                    onClick={handleDisplayChange}
                    className='search-button'
                    value={"albums"}
                >
                    Albums
                </button>
                <button
                    onClick={handleDisplayChange}
                    className='search-button'
                    value={"artists"}
                >
                    Artists
                </button>


            </Box>

            {/* This is the data display */}

            <SearchResult displayItem={displayItem} />

        </Box>
    )
}




