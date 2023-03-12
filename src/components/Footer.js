import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import './Footer.css';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import { useSelector } from 'react-redux';
import {
    autoNextSong, handleNextSong, handlePreviousSong,
    addFavourite, removeFavourite, addLikedSong, removeLikedSong,
    handleLikedChenge
} from '../features/playerSlice';
import { useDispatch } from 'react-redux';

export default function Footer() {

    const { songsPlayList, currentSongIndex, isLiked } = useSelector((state) => state.player)
    const { user } = useSelector((state) => state.auth)

    const dispatch = useDispatch();


    function handleAddLikeing() {
        dispatch(addLikedSong(songsPlayList[currentSongIndex]?._id))
        dispatch(handleLikedChenge());
        dispatch(addFavourite({ userId: user._id, songId: songsPlayList[currentSongIndex]?._id }))

    }
    function handleRemoveLikeing() {
        dispatch(removeLikedSong(songsPlayList[currentSongIndex]?._id))
        dispatch(handleLikedChenge());
        dispatch(removeFavourite({ userId: user._id, songId: songsPlayList[currentSongIndex]?._id }))
    }


    function handleNext() {
        dispatch(handleNextSong())
        dispatch(handleLikedChenge());
    }
    function handlePrivious() {
        dispatch(handlePreviousSong())
        dispatch(handleLikedChenge());
    }
    function handleAutoNext() {
        dispatch(autoNextSong())
        dispatch(handleLikedChenge());
    }

    return (

        <footer className='footer-container'>


            <div className='itmes'>

                <div className='info'>

                    <img src={songsPlayList[currentSongIndex]?.imageUrl} alt='poster' className='poster' />
                    <div className='info-text'>
                        <p className='info-songName'>{songsPlayList[currentSongIndex]?.title}</p>
                        <p className='info-artistName'>{songsPlayList[currentSongIndex]?.artist?.name}</p>
                    </div>
                    {isLiked ?
                        <IconButton onClick={handleRemoveLikeing}  >
                            <FavoriteIcon color='success' />
                        </IconButton> :
                        <IconButton onClick={handleAddLikeing}  >
                            < FavoriteBorderOutlinedIcon sx={{ color: "#FFFFFF" }} />
                        </IconButton>}
                </div>

                <AudioPlayer

                    className='audio-player'
                    autoPlay={true}
                    src={songsPlayList[currentSongIndex]?.songUrl}
                    showSkipControls={true}
                    onClickNext={handleNext}
                    onClickPrevious={handlePrivious}
                    onEnded={handleAutoNext}
                />
            </div>
        </footer>

    )
}
