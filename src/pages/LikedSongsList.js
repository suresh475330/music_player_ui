import './SongsList.css';
import LikedPoster from '../assets/LikedPoster.png';


import SongsList from '../components/SongsList';


export default function LikedSongsList() {


    return (
        <div className="multipage-component">

            {/* Display banner */}

            <div className='likedBanner '>
                <img src={LikedPoster} alt="LikedPoster" className='banner-img' />
                <div className='liked-banner-fileds'>
                    <h5>PUBLIC PLAYLIST</h5>
                    <h2>Liked Songs</h2>
                </div>
            </div>


            {/* Display songs lists */}

                    <SongsList />

        </div>
    )
}