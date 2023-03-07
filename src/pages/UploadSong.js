import "../components/SongForm.css";
import { useEffect, useState } from "react";
import FileInput from "../components/FileInput";
import { useSelector, useDispatch } from "react-redux";
import { createSong, getAllAlbum, getAllArtist } from "../features/adminSlice";
import Loading from "../components/Loading"

function UploadMsg({ msg }) {
    return (
        <div style={{ paddingTop: "1rem" }}>
            <h1 style={{ textAlign: "center", color: "#FFFFFF" }} >{msg}</h1>
        </div>
    )
}

export default function UploadSong() {
    const dispatch = useDispatch();
    const { artists, albums, songMsg } = useSelector((state) => state.admin);
    const [isLoading, setIsLoading] = useState(false);

    const [data, setData] = useState({
        title: "",
        language: "Tamil",
        artist: artists[0]?._id,
        album: "",
        imageUrl: "",
        songUrl: ""
    });

    async function promiseFun() {
        try {

            setIsLoading(true);
            if(artists.length < 1 && albums.length < 1){
                await Promise.all([dispatch(getAllAlbum()), dispatch(getAllArtist())]);
            }else if(artists.length < 1){
                dispatch(getAllArtist());
            }else if(albums.length < 1){
                dispatch(getAllAlbum());
            }
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        promiseFun();
    }, [])


    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    };

    const handleInputState = (name, value) => {
        setData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {

            if (data.imageUrl === '' || data.songUrl === '') {
                return alert("Plz choose file");
            }

            if (data.artist === '' || data.language === '') {
                return alert("Plz choose selete fild");
            }

            if (data.album === '') {
                let obj = {
                    title: data.title,
                    language: data.language,
                    artist: data.artist,
                    imageUrl: data.imageUrl,
                    songUrl: data.songUrl,
                }
                dispatch(createSong(obj))
            }else{
                dispatch(createSong(data))
            }


            console.log("createSong succes");
        } catch (error) {
            console.log(error)
        }

    };

    return (
        <div style={{ margin: "5rem 1rem 1rem" }}>


            {songMsg && <UploadMsg msg={songMsg} />}

            {isLoading ? (<Loading />) : (

                <div className="songForm-container">
                    <form className="songForm-form" onSubmit={handleSubmit} >

                        <h1 className="songForm-heading">Song Form</h1>
                        <input
                            type="text"
                            className="songForm-input"
                            placeholder="Song Name"
                            name="title"
                            onChange={handleChange}
                            value={data.title}
                            required
                        />


                        <FileInput
                            name="imageUrl"
                            label="Choose Image"
                            handleInputState={handleInputState}
                            type="image"
                            value={data.imageUrl}

                        />

                        <FileInput
                            name="songUrl"
                            label="Choose Song"
                            handleInputState={handleInputState}
                            type="audio"
                            value={data.songUrl}

                        />

                        <label htmlFor="artist">Choose a artist:</label>
                        <select className="songForm-input" required value={data.artist} onChange={handleChange} name="artist" id="artist">
                            {artists?.map((item) => {
                                return (
                                    <option key={item._id} value={item._id}>{item.name}</option>
                                )
                            })}
                        </select>

                        <label htmlFor="album">Choose a album:</label>
                        <select className="songForm-input" value={data.album} onChange={handleChange} name="album" id="album">
                            {albums?.map((item) => {
                                return (
                                    <option key={item._id} value={item._id}>{item.title}</option>
                                )
                            })}
                        </select>

                        <label htmlFor="language">Choose a language:</label>
                        <select className="songForm-input" required value={data.language} onChange={handleChange} name="language" id="language">
                            <option value="Tamil">Tamil</option>
                            <option value="English">English</option>
                        </select>

                        <button type="submit" className="songForm-submit_btn" >
                            Submit
                        </button>
                    </form>
                </div>
            )}

        </div>
    )
}