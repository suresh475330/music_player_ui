import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';



export default function Search() {

    const [searchInput, setSearchInput] = useState('');
    const [display, setDisplay] = useState('song');

    const songs = [
        {
            "id": "1",
            "title": "Saved!",
            "imgUrl": "https://robohash.org/utidtemporibus.jpg?size=100x100&set=set1",
            "category": "song"
        },
        {
            "id": "2",
            "title": "The Vengeance of Fu Manchu",
            "imgUrl": "https://robohash.org/molestiaeomnisminima.jpg?size=100x100&set=set1",
            "category": "song"
        },
        {
            "id": "3",
            "title": "Kiki",
            "imgUrl": "https://robohash.org/idquiea.jpg?size=100x100&set=set1",
            "category": "song"
        }
    ]

    const albums = [
        {
            "id": "4",
            "title": "Doctor at Sea",
            "imgUrl": "https://robohash.org/oditdoloremqueet.jpg?size=100x100&set=set1",
            "category": "album"

        },
        {
            "id": "5",
            "title": "Tournament, The",
            "imgUrl": "https://robohash.org/sequiautvelit.jpg?size=100x100&set=set1",
            "category": "album"

        },
        {
            "id": "6",
            "title": "Sandra of a Thousand Delights (Vaghe stelle dell'Orsa...)",
            "imgUrl": "https://robohash.org/impeditadipisciet.jpg?size=100x100&set=set1",
            "category": "album"

        }
    ]

    const artists = [
        {
            "id": "7",
            "title": "Champagne for Caesar",
            "imgUrl": "https://robohash.org/quipraesentiumdolores.jpg?size=100x100&set=set1",
            "category": "artist"

        },
        {
            "id": "8",
            "title": "Verdict, The",
            "imgUrl": "https://robohash.org/rerumomnismagnam.jpg?size=100x100&set=set1",
            "category": "artist"

        },
        {
            "id": "9",
            "title": "Set It Off",
            "imgUrl": "https://robohash.org/estexercitationemex.jpg?size=100x100&set=set1",
            "category": "artist"
        }
    ]

    const handleChange = (e) => {
        setSearchInput(e.target.value);
    }

    const handleDisplayChange = (e) => {
        setDisplay(e.target.value);
    }

    const data = [...songs, ...albums, ...artists];

    let filterData = data;
    if (searchInput) {
        filterData = data.filter((item) => {
            return (
                item.title.toLowerCase().includes(searchInput.toLowerCase())
            )
        })
    }
    if (display) {

        filterData = filterData.filter((item) => item.category === display);
    }

    return (
            <Box sx={{margin : "5rem 1rem 1rem" }}>


            {/* This is the seaarch bar */}

            <Paper
                component="div"
                sx={{
                    background: "#FFFFFF", borderRadius: "26px",
                    p: '2px 4px', display: 'flex', alignItems: 'center',
                    width: { xs: 300, sm: 400 }
                }} >

                <IconButton type="button" sx={{ p: '10px', color: "#000000" }} aria-label="search">
                    <SearchIcon />
                </IconButton>
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Artists, songs, or albums"
                    inputProps={{ 'aria-label': 'Artists, songs, or albums' }}
                    onChange={handleChange}
                    value={searchInput}
                />
            </Paper>

            {/* This is the catgory */}

            <Box sx={{ '& > :not(style)': { m: 1 }, marginTop: "15px" }}>
                <Button
                    onClick={handleDisplayChange}
                    value="song"
                    size="small"
                    sx={{ background: "#2A2A2A", color: "#FFFFFF", border: "1px solid gray", ":hover": { background: "green", border: "1px solid green" }, borderRadius: "30px", padding: "5px 15px 5px" }}>
                    Songs
                </Button>
                <Button
                    onClick={handleDisplayChange}
                    value="album"
                    size="small"
                    sx={{ background: "#2A2A2A", color: "#FFFFFF", border: "1px solid gray", ":hover": { background: "green", border: "1px solid green" }, borderRadius: "30px", padding: "5px 15px 5px" }}>
                    Albums
                </Button>
                <Button
                    onClick={handleDisplayChange}
                    value="artist"
                    size="small"

                    sx={{ background: "#2A2A2A", color: "#FFFFFF", border: "1px solid gray", ":hover": { background: "green", border: "1px solid green" }, borderRadius: "30px", padding: "5px 15px 5px" }}>
                    Artists
                </Button>

            </Box>

            {/* This is the data display */}

            <Box sx={{ flexGrow: 1,marginTop : "15px" }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {filterData.length > 0 ? (
                        filterData.map((item) => {
                            return (

                                <Grid item xs={2} sm={4} md={4} key={item.id}>
                                    <Box sx={{ background: `url(${item.imgUrl})`, width: 150, height: 150, borderRadius: "5px" }} />
                                    <Typography sx={{ color: "#FFFFFF", fontWeight: 700, fontSize: "16px", fontFamily: "DM Sans", lineHeight: "19px", marginTop: "10px" }}>{item.title}</Typography>
                                    <Typography sx={{ color: "#A7A7A7", fontWeight: 400, fontSize: "16px", fontFamily: "DM Sans", lineHeight: "19px" }}>{item.category}</Typography>
                                </Grid>
                            )
                        })
                    ) : (
                        <Typography sx={{ margin : "10px 20px 0px",textAlign : "center",color: "#A7A7A7", fontWeight: 700, fontSize: "16px", fontFamily: "DM Sans", lineHeight: "19px" }}>No result found</Typography>
                    )}

                </Grid>
            </Box>

            </Box>
    )
}




