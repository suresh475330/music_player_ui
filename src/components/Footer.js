import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import './Footer.css';
import photo from '../assets/historySong.jpeg';
import heart from '../assets/Heart.png'


export default function Footer() {
    return (

        <footer className='footer-container'>

            <div className='itmes'>

                <div className='info'>

                    <img src={photo}  alt='poster' className='poster' />
                    <div className='info-text'>
                        <p className='info-songName'>Song name and this is the name</p>
                        <p className='info-artistName'>Artist name</p>
                    </div>
                    <img src={heart} alt='heart' className='heart'/>
                </div>

                <AudioPlayer
                    className='audio-player'
                    autoPlay
                    // src="https://firebasestorage.googleapis.com/v0/b/cat-music-player.appspot.com/o/audio%2F1672423112340Bangu-Aaku-Thechi-MassTamilan.dev.mp3?alt=media&token=e4a829c3-3aea-4416-99eb-c47c5f638527"
                    onPlay={e => console.log("onPlay")}
                // other props here
                />
            </div>
        </footer>

    )
}
