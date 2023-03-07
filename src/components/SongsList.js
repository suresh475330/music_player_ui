import * as React from 'react';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


export default function SongsList({ songsList}) {

    return (

        <>

            <div style={{ marginTop: "2rem", display: "inline-block" }}>

                {songsList?.map((item) => {
                    return (

                        <Box key={item._id} sx={{ display: "flex", alignItems: "center", gap: "0.7rem",":hover" : {opacity : 0.5} }} >
                            <ListItemAvatar sx={{ marginRight: "1rem" ,cursor : "pointer" , ":hover" : {opacity : 0.5} } }>
                                <img src={item.imageUrl} style={{objectFit : "cover"}} width={60} height={60}  alt="songImg" />
                            </ListItemAvatar>
                            <ListItemText primary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline', color: "#65D36E", fontFamily: 'DM Sans sans-serif', fontWeight: 450, fontSize: { xs: "1em", sm: "1.5rem" }, letterSpacing: "0.01em" }}
                                        component="span"
                                        variant="h6" >
                                        {item.title}
                                    </Typography>
                                </React.Fragment>
                            } secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline', color: "#B3B3B3", fontFamily: "DM Sans sans-serif", fontWeight: 400, fontSize: { xs: "0.8em", sm: "1.3rem" } }}
                                        component="span"
                                        variant="body2">
                                        {item.artist.name}
                                    </Typography>
                                    <Typography
                                        sx={{ marginLeft: "2rem", display: 'inline', color: "#B3B3B3", fontFamily: "DM Sans sans-serif", fontWeight: 400, fontSize: { xs: "0.8em", sm: "1.3rem" } }}
                                        component="span"
                                        variant="body2">
                                        {item.album?.title}
                                    </Typography>
                                </React.Fragment>
                            } />
                        </Box>

                    )
                })}


            </div>

        </>
    )
}