import './QuickHistory.css';

import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import sampleImg from "../assets/sample.png"

const Item = styled(Paper)(() => ({
    backgroundColor: "#303030",
    boxShadow: "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset",

}));

export default function QuickHistory() {
    return (
        <Box sx={{ flexGrow: 1}}>
            <Grid container spacing={{ xs: 1, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {Array.from(Array(6)).map((_, index) => (
                    <Grid item xs={2} sm={4} md={4} key={index}>
                        <Item className='container' >
                            <img src={sampleImg} alt="some"/>
                            <p >Some text of the song name ot title</p>
                        </Item>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}