import './SongsList.css';
import LikedPoster from '../assets/LikedPoster.png';
import SongsList from '../components/SongsList';
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { getAllLikedSongs } from '../features/playerSlice';
import Loading from '../components/Loading';

function LikedSongsMsg({ msg }) {
    return (
        <div style={{ paddingTop: "1rem" }}>
            <h1 style={{ textAlign: "center", color: "#FFFFFF" }} >{msg}</h1>
        </div>
    )
}


export default function LikedSongsList() {

    const { user } = useSelector((state) => state.auth)
    const { likedSongsData, likedSongsDataStatus, likedSongsDataError } = useSelector((state) => state.player)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllLikedSongs(user._id))
    }, [])

    return (
        <div className="multipage-component">

            {likedSongsDataStatus === "failed" && <LikedSongsMsg msg={likedSongsDataError} />}

            {likedSongsDataStatus === "loading" && <Loading />}

            {likedSongsDataStatus === "succeeded" && (
                <>
                    {/* Display banner */}

                    <div className='likedBanner '>
                        <img src={LikedPoster} alt="LikedPoster" className='banner-img' />
                        <div className='liked-banner-fileds'>
                            <h5>PUBLIC PLAYLIST</h5>
                            <h2>Liked Songs</h2>
                        </div>
                    </div>


                    {/* Display songs lists */}

                    {likedSongsData.length === 0 ? <div style={{ paddingTop: "1rem" }}>
                        <h1 style={{ textAlign: "center", color: "#FFFFFF" }} >No liked songs is there</h1>
                    </div> : <SongsList songsList={likedSongsData} />}


                </>
            )}



        </div>
    )
}