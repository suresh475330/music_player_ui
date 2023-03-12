import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useSelector ,useDispatch} from 'react-redux'
import Loading from '../components/Loading';
import {Link} from 'react-router-dom'
import { pushSong } from '../features/playerSlice';

function SearchMsg({ msg }) {
    return (
        <div style={{ paddingTop: "1rem" }}>
            <h1 style={{ textAlign: "center", color: "#FFFFFF" }} >{msg}</h1>
        </div>
    )
}

export default function SearchResult({ displayItem }) {


    const { searchStatus, searchError, searchResult } = useSelector((state) => state.search);
    const dispatch = useDispatch();

    if (searchStatus === 'loading') return <Loading />
    if (searchStatus === 'failed') return <SearchMsg msg={searchError} />


    switch (displayItem) {
        case 'songs': return (
            <Box sx={{ flexGrow: 1, marginTop: "15px" }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {searchResult?.songs?.length > 0 ? (
                        searchResult.songs.map((item) => {
                            return (

                                <Grid item xs={2} sm={4} md={4} key={item._id} onClick={() => dispatch(pushSong(item))}>
                                    <img src={item.imageUrl} width={150} alt={item.title} style={{ borderRadius: "5px" }} />
                                    <Typography sx={{ color: "#FFFFFF", fontWeight: 700, fontSize: "16px", fontFamily: "DM Sans", lineHeight: "19px", marginTop: "10px" }}>{item.title}</Typography>
                                    <Typography sx={{ color: "#A7A7A7", fontWeight: 400, fontSize: "16px", fontFamily: "DM Sans", lineHeight: "19px" }}>{item.artist.name}</Typography>
                                </Grid>
                            )
                        })
                    ) : (
                        <div style={{display : "flex",alignItems : "center",justifyContent : "center", margin : "5rem 2.5rem 0rem"}}>
                            <Typography sx={{ textAlign: "center", color: "#A7A7A7", fontWeight: 700, fontSize: "16px", fontFamily: "DM Sans"}}>No songs found search something else.</Typography>
                        </div>
                    )}

                </Grid>
            </Box>
        )
        case 'artists': return (
            <Box sx={{ flexGrow: 1, marginTop: "15px" }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {searchResult?.artist?.length > 0 ? (
                        searchResult.artist.map((item) => {
                            return (

                                <Grid item xs={2} sm={4} md={4} key={item._id}>
                                    <Link to={`/artist/${item._id}`} style={{ textDecoration: "none", cursor : "pointer"}}>
                                    <img src={item.imageUrl} width={150} alt={item.name} style={{ borderRadius: "5px" }} />
                                    </Link>
                                    <Typography sx={{ color: "#FFFFFF", fontWeight: 700, fontSize: "16px", fontFamily: "DM Sans", lineHeight: "19px", marginTop: "10px" }}>{item.name}</Typography>
                                </Grid>
                            )
                        })
                    ) : (
                        <div style={{display : "flex",alignItems : "center",justifyContent : "center", margin : "5rem 2.5rem 0rem"}}>
                            <Typography sx={{ textAlign: "center", color: "#A7A7A7", fontWeight: 700, fontSize: "16px", fontFamily: "DM Sans"}}>No artists found search something else.</Typography>
                        </div>
                    )}

                </Grid>
            </Box>
        )
        case 'albums': return (
            <Box sx={{ flexGrow: 1, marginTop: "15px" }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {searchResult?.album?.length > 0 ? (
                        searchResult.album.map((item) => {
                            return (

                                <Grid item xs={2} sm={4} md={4} key={item._id}>
                                    <Link to={`/album/${item._id}`} style={{ textDecoration: "none", cursor : "pointer"}}>
                                    <img src={item.imageUrl} width={150} alt={item.title} style={{ borderRadius: "5px" }} />
                                    </Link>
                                    <Typography sx={{ color: "#FFFFFF", fontWeight: 700, fontSize: "16px", fontFamily: "DM Sans", lineHeight: "19px", marginTop: "10px" }}>{item.title}</Typography>
                                </Grid>
                            )
                        })
                    ) : (
                        <div style={{display : "flex",alignItems : "center",justifyContent : "center", margin : "5rem 2.5rem 0rem"}}>
                            <Typography sx={{ textAlign: "center", color: "#A7A7A7", fontWeight: 700, fontSize: "16px", fontFamily: "DM Sans"}}>No albums found search something else.</Typography>
                        </div>
                    )}

                </Grid>
            </Box>
        )
        default: return (
            <h1>ERROR</h1>
        )
    }
}