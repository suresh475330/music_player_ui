import './SongsList.css';
import SongsList from "../components/SongsList"
import historySong from '../assets/historySong.jpeg';

export default function AlbumSongsList(){
    return(
        <div className="multipage-component">

        {/* Display album banner and name */}

        <div className='albumBanner'>
            <img src={historySong} alt="albumPoster" className='banner-img' />
            <div className='album-banner-fileds'>
                <h5>PUBLIC PLAYLIST</h5>
                <h2>Album Name</h2>
            </div>
        </div>


        {/* Display songs lists */}

                <SongsList />

    </div>

    )
}