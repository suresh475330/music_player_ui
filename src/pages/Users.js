import * as React from 'react';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Typography from '@mui/material/Typography';

import userImg from '../assets/historySong.jpeg';

export default function Users() {

    const users = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


    return (

        <div style={{ margin: "5rem 1rem 1rem" }}>

            <Typography
                sx={{ color: "#FFFFFF",letterSpacing : "-0.03em", fontFamily: "DM Sans", fontWeight: 700, fontSize: { xs: "20px", sm: "38px" } ,textAlign : "center"}}>
                10 Users use this application
            </Typography>


            <div style={{ marginTop: "2rem", display: "inline-block" }}>
                {users.map((item) => {
                    return (

                        <div key={item} style={{ display: "flex", alignItems: "center", gap: "10px",marginBottom :"1rem" }} >
                            <ListItemAvatar sx={{ marginRight: "1rem" }}>
                                <img src={userImg} width={100} alt="userImg" />
                            </ListItemAvatar>
                            <ListItemText primary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline', color: "#FFFFFF", fontFamily: "DM Sans", fontWeight: 700, fontSize: { xs: "1em", sm: "1.5rem" }, letterSpacing: "0.01em" }}
                                        component="span"
                                        variant="h6" >
                                        User name
                                    </Typography>
                                </React.Fragment>
                            } secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline', color: "#B3B3B3", fontFamily: "DM Sans", fontWeight: 400, fontSize: { xs: "0.8em", sm: "1.3rem" } }}
                                        component="span"
                                        variant="body2">
                                        User email
                                    </Typography>
                                </React.Fragment>
                            } />
                        </div>
                    )
                })}

            </div>
        </div>
    );
}