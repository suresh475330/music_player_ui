import * as React from 'react';
import LikedPoster from '../assets/LikedPoster.png';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Typography from '@mui/material/Typography';



export default function SongsList() {

    const songs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (

        <>

            <div style={{ marginTop: "2rem", display: "inline-block" }}>

                {songs.map((item) => {
                    return (

                        <div key={item} style={{ display: "flex", alignItems: "center", gap: "5px" }} >
                            <ListItemAvatar sx={{ marginRight: "1rem" }}>
                                <img src={LikedPoster} width={60} alt="song" />
                            </ListItemAvatar>
                            <ListItemText primary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline', color: "#65D36E", fontFamily: "Circular Std", fontWeight: 450, fontSize: { xs: "1em", sm: "1.5rem" }, letterSpacing: "0.01em" }}
                                        component="span"
                                        variant="h6" >
                                        This is a song name form unknow album
                                    </Typography>
                                </React.Fragment>
                            } secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline', color: "#B3B3B3", fontFamily: "Circular Std", fontWeight: 400, fontSize: { xs: "0.8em", sm: "1.3rem" } }}
                                        component="span"
                                        variant="body2">
                                        {'artist name'}
                                    </Typography>                                   
                                    <Typography
                                        sx={{ marginLeft : "2rem",display: 'inline', color: "#B3B3B3", fontFamily: "Circular Std", fontWeight: 400, fontSize: { xs: "0.8em", sm: "1.3rem" } }}
                                        component="span"
                                        variant="body2">
                                        {'album name'}
                                    </Typography>                                   
                                </React.Fragment>
                            } />
                        </div>

                    )
                })}


            </div>

        </>
    )
}