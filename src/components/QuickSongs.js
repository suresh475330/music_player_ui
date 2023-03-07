import './QuickSongs.css';

import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';
import { useSelector } from 'react-redux';

const Item = styled(Paper)(() => ({
    backgroundColor: "#303030",
    boxShadow: "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset",

}));

function QuickSongListLoding() {
    return (
        Array.from(new Array(6)).map((item, index) => {
            return (
                <Grid item xs={2} sm={4} md={4} key={index}>
                    <Skeleton variant="rounded" sx={{ backgroundColor: "#FFFFFF21" }} height={70} />
                </Grid>
            )
        })
    )
}

function QuickErrorMsg({ msg }) {
    return (
        <div style={{ paddingTop: "1rem" }}>
            <h1 style={{ textAlign: "center", color: "#FFFFFF" }} >{msg}</h1>
        </div>
    )
}

export default function QuickSongs() {

    const {randomSongs,randomSongsStatus,randomSongsError } = useSelector((state) => state.home );


    if(randomSongsStatus === "failed") return <QuickErrorMsg msg={randomSongsError} />

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 1, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {randomSongsStatus === "loading" ? (<QuickSongListLoding />) : (
                    randomSongs?.map((item) => (
                        <Grid item xs={2} sm={4} md={4} key={item._id}>
                            <Item className='container' >
                                <img src={item.imageUrl} alt="songImg" />
                                <p >{item.title}</p>
                            </Item>
                        </Grid>
                    ))
                )
                }
            </Grid>
        </Box>
    );
}