
import './HorizontalList.css'
import { Link } from 'react-router-dom';
import Skeleton from '@mui/material/Skeleton';
import { useSelector } from 'react-redux'

function AlbumListLoding() {
  return (
    Array.from(new Array(5)).map((item, index) => {
      return (
        <div key={index} className="card-Skeleton">
          <Skeleton variant="rounded" sx={{ backgroundColor: "#FFFFFF21" }} height={200} width={165} />
        </div>
      )
    })
  )
}

function AlbumErrorMsg({ msg }) {
  return (
    <div style={{ paddingTop: "1rem" }}>
      <h1 style={{ textAlign: "center", color: "#FFFFFF" }} >{msg}</h1>
    </div>
  )
}

export default function AlbumsList() {

  const { randomAlbums, randomAlbumsStatus, randomAlbumsError } = useSelector((state) => state.home);


  return (

    <div className="listsongs-container">

      <h3>Your top mixes</h3>

      {randomAlbumsStatus === "failed" && <AlbumErrorMsg msg={randomAlbumsError} />}

      <div className="row">
        {randomAlbumsStatus === "loading" ? (<AlbumListLoding />) : (
          randomAlbums.map((item) => {
            return (
              <div key={item._id} className="card">
                <Link to={`/album/${item._id}`} style={{ textDecoration: "none" }}>
                  <img src={item.imageUrl} alt='img' className='cardImg' />
                </Link>
                <h3 className="title">{item.title}</h3>
                {/* <p className="desc">This is a desc with extra word make to big</p> */}
              </div>
            )
          })
        )}


      </div>

    </div>
  );
}