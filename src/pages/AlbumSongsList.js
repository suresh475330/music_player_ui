import './SongsList.css';
import SongsList from "../components/SongsList"
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import Loading from '../components/Loading';
import { useSelector, useDispatch } from 'react-redux'
import { getAlbumSongs } from '../features/homeSlice';

function AlbumSongsMsg({ msg }) {
    return (
        <div style={{ paddingTop: "1rem" }}>
            <h1 style={{ textAlign: "center", color: "#FFFFFF" }} >{msg}</h1>
        </div>
    )
}

export default function AlbumSongsList() {

    const { albumSongs, albumSongsStatus, albumSongsError } = useSelector((state) => state.home);
    const path = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAlbumSongs(path.id))
    }, [])

    return (
        <div className="multipage-component">

            {albumSongsStatus === "failed" && <AlbumSongsMsg msg={albumSongsError} />}

            {albumSongsStatus === "loading" && <Loading />}

            {albumSongsStatus === "succeeded" && (
                <>
                    {/* Display album banner and name */}

                    <div className='albumBanner'>
                        <img src={albumSongs[0]?.album.imageUrl} alt="albumPoster" className='banner-img' />
                        <div className='album-banner-fileds'>
                            <h5>PUBLIC PLAYLIST</h5>
                            <h2>{albumSongs[0]?.album.title}</h2>
                        </div>
                    </div>

                    {/* Display songs lists */}

                    <SongsList songsList={albumSongs}  />
                </>
            )}

        </div>

    )
}