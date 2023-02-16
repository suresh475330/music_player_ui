import './SongsList.css';
import SongsList from "../components/SongsList"
import historySong from '../assets/historySong.jpeg';


export default function ArtistSongsList(){
    return(
        <div className="multipage-component">

        {/* Display album banner and name */}

        <div className='artistBanner'>
            <img src={historySong} alt="artistPoster" className='banner-img' />
            <div className='artist-banner-fileds'>
                <h5>PUBLIC PLAYLIST</h5>
                <h2>Artist Name</h2>
            </div>
        </div>


        {/* Display songs lists */}

                <SongsList />

    </div>
    )
}