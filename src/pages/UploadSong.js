import "../components/SongForm.css";
import { useEffect, useState } from "react";
import FileInput from "../components/FileInput";
import { useSelector, useDispatch } from "react-redux";
import { createSong, getAllAlbum, getAllArtist } from "../features/adminSlice";

function UploadMsg({ msg }) {
    return (
        <div style={{ paddingTop: "1rem" }}>
            <h1 style={{ textAlign: "center", color: "#FFFFFF" }} >{msg}</h1>
        </div>
    )
}

export default function UploadSong() {
    const dispatch = useDispatch();
    const { artists, albums,songMsg } = useSelector((state) => state.admin);

    const [data, setData] = useState({
        title: "",
        language: "Tamil",
        artist: artists[0]?._id,
        album: albums[0]?._id,
        imageUrl: "",
        songUrl: ""
    });

    async function promiseFun() {
        try {
            await Promise.all([dispatch(getAllAlbum()), dispatch(getAllArtist())]);
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

            if (data.artist === '' || data.album === '' || data.language === '') {
                return alert("Plz choose selete fild");
            }


            dispatch(createSong(data))
            console.log("createSong succes");
        } catch (error) {
            console.log(error)
        }

    };

    return (
        <div style={{ margin: "5rem 1rem 1rem" }}>


            {songMsg && <UploadMsg msg={songMsg} />}

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
        </div>
    )
}