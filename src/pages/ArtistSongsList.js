import './SongsList.css';
import SongsList from "../components/SongsList"
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import Loading from '../components/Loading';
import { useSelector, useDispatch } from 'react-redux'
import { getArtistSongs } from '../features/homeSlice';

function ArtistSongsMsg({ msg }) {
    return (
        <div style={{ paddingTop: "1rem" }}>
            <h1 style={{ textAlign: "center", color: "#FFFFFF" }} >{msg}</h1>
        </div>
    )
}

export default function ArtistSongsList() {

    const { artistSongs, artistSongsStatus, artistSongsError } = useSelector((state) => state.home);
    const path = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getArtistSongs(path.id))
    }, [])


    return (
        <div className="multipage-component">

            {artistSongsStatus === "failed" && <ArtistSongsMsg msg={artistSongsError} />}

            {artistSongsStatus === "loading" && <Loading />}

            {artistSongsStatus === "succeeded" && (
                <>
                {/* Display album banner and name */}
    
                <div className='artistBanner'>
                    <img src={artistSongs[0]?.artist.imageUrl} alt="artistPoster" className='banner-img' />
                    <div className='artist-banner-fileds'>
                        <h5>PUBLIC PLAYLIST</h5>
                        <h2>{artistSongs[0]?.artist.name}</h2>
                    </div>
                </div>
    
    
                {/* Display songs lists */}
    
                <SongsList  songsList={artistSongs}  />
                </>
            )}

        </div>
    )
}