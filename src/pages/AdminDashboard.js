import './AdminDashboard.css';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function AdminDashboard() {

    const {user} = useSelector((state) => state.auth );

    return (

        <div className='admin-component'>


            <h1 className='welcome-msg'>Welcome MR {user?.name}</h1>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid item xs={2} sm={4} md={4} >
                        <Link to="./users" style={{ textDecoration: "none" }}>
                            <div className='admin-card user'>
                                <h1 className='admin-card-title' >See Users</h1>
                            </div>
                        </Link>
                    </Grid>

                    <Grid item xs={2} sm={4} md={4} >
                        <Link to="./uploadArtist" style={{ textDecoration: "none" }}>
                            <div className='admin-card artist'>
                                <h1 className='admin-card-title'>Upload Artist</h1>
                            </div>
                        </Link>
                    </Grid>
                    <Grid item xs={2} sm={4} md={4} >
                        <Link to="./uploadAlbum" style={{ textDecoration: "none" }}>
                            <div className='admin-card album'>
                                <h1 className='admin-card-title'>Upload Album</h1>

                            </div>
                        </Link>
                    </Grid>
                    <Grid item xs={2} sm={4} md={4} >
                        <Link to="./uploadSong" style={{ textDecoration: "none" }}>
                            <div className='admin-card song'>
                                <h1 className='admin-card-title'>Upload Song</h1>
                            </div>
                        </Link>
                    </Grid>
                    <Grid item xs={2} sm={4} md={4} >
                        <Link to="./manageArtists" style={{ textDecoration: "none" }}>
                            <div className='admin-card artists'>
                                <h1 className='admin-card-title'>Manage Artists</h1>
                            </div>
                        </Link>
                    </Grid>
                    <Grid item xs={2} sm={4} md={4} >
                        <Link to="./manageAlbums" style={{ textDecoration: "none" }}>
                            <div className='admin-card albums'>
                                <h1 className='admin-card-title'>Manage Albums</h1>
                            </div>
                        </Link>
                    </Grid>
                    <Grid item xs={2} sm={4} md={4} >
                        <Link to="./manageSongs" style={{ textDecoration: "none" }}>
                            <div className='admin-card songs'>
                                <h1 className='admin-card-title'>Manage Songs</h1>
                            </div>
                        </Link>
                    </Grid>
                </Grid>
            </Box>

        </div>
    )
}





