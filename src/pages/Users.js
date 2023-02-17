import * as React from 'react';
import userImg from '../assets/historySong.jpeg';

import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

export default function Users() {

    const users = [1,2,3,4,5];


    return (

        <div style={{ margin: "5rem 1rem 1rem" }}>

            <Typography
                sx={{ marginBottom: "1rem", color: "#FFFFFF", letterSpacing: "-0.03em", fontFamily: "DM Sans", fontWeight: 700, fontSize: { xs: "20px", sm: "38px" }, textAlign: "center" }}>
                10 Users use this application
            </Typography>

            {/* --------- Data dispaly--------- */}


            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {users.length > 0 ? (
                        users.map((user) => {
                            return (

                                <Grid key={user} item xs={2} sm={2} md={4} >
                                    <Card sx={{ maxWidth: 200 }}>
                                        <div>
                                            <CardMedia
                                                component="img"
                                                height="140"
                                                image={userImg}
                                                alt="green iguana"
                                            />
                                            <CardContent sx={{ backgroundColor: "#2A2A2A" }}>
                                                <Typography gutterBottom variant="h5" color={"#FFFFFF"} component="div">
                                                    User Name
                                                </Typography>
                                                <Typography variant="body2" color={"#FFFFFFB3"}>
                                                    User@gmail.com
                                                </Typography>
                                            </CardContent>
                                        </div>
                                    </Card>
                                </Grid>
                            )
                        })
                    ) : (
                        <Typography sx={{ margin: "10px 20px 0px", textAlign: "center", color: "#A7A7A7", fontWeight: 700, fontSize: "25px", fontFamily: "DM Sans" }}>No result found</Typography>
                    )}


                </Grid>
            </Box>

        </div>
    );
}