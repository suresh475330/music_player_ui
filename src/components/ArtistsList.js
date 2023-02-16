
import './HorizontalList.css'
import photo from '../assets/historySong.jpeg';
import { Link } from 'react-router-dom';


export default function ArtistsList() {

    const array = [1, 2, 3, 4, 5];

    return (

        <div className="listsongs-container">

            <h3>Made for you</h3>

            <div className="row">
                {array.map((item) => {
                    return (
                        <div key={item} className="card">
                            <Link to={`/artist/${item}`} style={{ textDecoration: "none" }}>
                                <img src={photo} alt='img' className='cardImg' />
                            </Link>
                            <h3 className="title">This is a title hello my name is suresh </h3>
                            <p className="desc">This is a desc with extra word make to big</p>
                        </div>
                    )
                })}


            </div>

        </div>
    );
}