import './SongsList.css';
import SongsList from "../components/SongsList"
import historySong from '../assets/historySong.jpeg';


export default function HistorySongs(){
    return(
        <div className="multipage-component">

        {/* Display banner */}

        <div className='historyBanner'>
            <img src={historySong} alt="historyPoster" className='banner-img' />
            <div className='history-banner-fileds'>
                <h5>PUBLIC PLAYLIST</h5>
                <h2>History Songs</h2>
            </div>
        </div>


        {/* Display songs lists */}

                <SongsList />

    </div>
    )
}