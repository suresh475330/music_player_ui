import './SongsList.css';
import SongsList from "../components/SongsList"
import historySong from '../assets/historySong.jpeg';
import { useSelector } from 'react-redux';


export default function HistorySongs() {

    const { songsPlayList } = useSelector((state) => state.player)

    return (
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
            {songsPlayList.length === 0 ? <div style={{ paddingTop: "1rem" }}>
                <h1 style={{ textAlign: "center", color: "#FFFFFF" }} >No songs history is there</h1>
            </div> : <SongsList songsList={songsPlayList} />}



        </div>
    )
}