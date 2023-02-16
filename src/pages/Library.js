import './Library.css'
import { Link } from 'react-router-dom';

export default function Library() {

    return (
        <div className="library-component">

            <div className='row-tabs'>
                <div className='liked'>
                    <Link to="./likedSongs" style={{ textDecoration: "none" }}>
                        <h4 className='liked-head'>Liked Songs</h4>
                        <p className='liked-tail'>607 liked songs</p>
                    </Link> 
                </div>
                <div className='history'>
                    <Link to="./historySongs" style={{ textDecoration: "none" }}>
                        <h4 className='history-head'>History Songs</h4>
                        <p className='history-tail'>607 history songs</p>
                    </Link>
                </div>
            </div>

        </div>
    )
}

