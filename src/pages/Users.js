import * as React from 'react';

import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { getAllusers } from '../features/adminSlice';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Loading from '../components/Loading';


const ErrorDisplay = ({ errorMsg }) => {

    return (
        <div style={{ paddingTop: "1rem" }}>
            <h1 style={{ textAlign: "center", color: "#FFFFFF", fontSize: "1rem" }} >{errorMsg}</h1>
        </div>
    )
}


export default function Users() {

    const { users, userStatus, userError } = useSelector((state) => state.admin);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllusers());
    }, [dispatch])


    return (

        <div style={{ margin: "5rem 1rem 1rem" }}>

            {userStatus === "failed" && < ErrorDisplay errorMsg={userError} />}

            {userStatus === 'loading' ? (
                <Loading />
            ) : (
                <>
                    <Typography
                        sx={{ marginBottom: "1rem", color: "#FFFFFF", letterSpacing: "-0.03em", fontFamily: "DM Sans", fontWeight: 700, fontSize: { xs: "20px", sm: "38px" }, textAlign: "center" }}>
                        {users.length > 0 && `${users.length} Users use this application`}
                    </Typography>

                    {/* data display */}
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

                            {users.map((user) => {
                                return (

                                    <Grid key={user._id} item xs={2} sm={2} md={4} >
                                        <Card sx={{ maxWidth: 200 }}>
                                            <div>
                                                <CardMedia
                                                    component="img"
                                                    height="140"
                                                    image={user.imageURL}
                                                    alt={user.name}
                                                    sx={{ backgroundColor: "gray" }}
                                                />
                                                <CardContent sx={{ backgroundColor: "#2A2A2A" }}>
                                                    <Typography sx={{ fontSize: { xs: "12px", sm: "1rem" } }} gutterBottom variant="h5" color={"#FFFFFF"} component="div">
                                                        {user.name}
                                                    </Typography>
                                                    <Typography sx={{ fontSize: { xs: "10px", sm: "0.7rem" } }} variant="body1" color={"#FFFFFFB3"}>
                                                        {user.email}
                                                    </Typography>
                                                    <Typography sx={{ fontSize: "10px" }} variant="body2" color={"#1DB954"}>
                                                        {user.role}
                                                    </Typography>
                                                </CardContent>
                                            </div>
                                        </Card>
                                    </Grid>
                                )
                            })
                            }


                        </Grid>
                    </Box>
                </>
            )}


        </div>
    );


}