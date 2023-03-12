import './Library.css'
import { Link } from 'react-router-dom';
import {useSelector} from "react-redux";

export default function Library() {

    const { likedSong,songsPlayList } = useSelector((state) => state.player )

    return (
        <div className="library-component">

            <div className='row-tabs'>
                <div className='liked'>
                    <Link to="./likedSongs" style={{ textDecoration: "none" }}>
                        <h4 className='liked-head'>Liked Songs</h4>
                        <p className='liked-tail'>{likedSong?.length} liked songs</p>
                    </Link> 
                </div>
                <div className='history'>
                    <Link to="./historySongs" style={{ textDecoration: "none" }}>
                        <h4 className='history-head'>History Songs</h4>
                        <p className='history-tail'>{songsPlayList?.length} history songs</p>
                    </Link>
                </div>
            </div>

        </div>
    )
}

