import "../components/SongForm.css";
import { useState } from "react";
import FileInput from "../components/FileInput";

const artistData = [
    {id : 1,name : "suresh"},
    {id : 2,name : "kumar"},
    {id : 3,name : "vignesh"},
    {id : 4,name : "naveen"},
    {id : 5,name : "aslam"},
];
const albumData = [
    {id : 1,name : "AAA"},
    {id : 2,name : "BBB"},
    {id : 3,name : "CCC"},
    {id : 4,name : "DDD"},
    {id : 5,name : "EEE"},
];

export default function UploadSong() {

    const [data, setData] = useState({
        title: "",
        artist: "",
        album: "",
        language: "",
        imageUrl: "",
        songUrl: ""
    });



    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    };

    const handleInputState = (name, value) => {
        setData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            // const url = process.env.REACT_APP_API_URL + "/songs"
            // const { data: res } = await axios.post(url, data);

            if (data.imageUrl === '' || data.songUrl === '') {
                return alert("Plz choose file");
            }

            if (data.artist === '' || data.album === '' || data.language === '') {
                return alert("Plz choose selete fild");
            }


            console.log(data)
        } catch (error) {
            console.log(error)
        }
    };
    return (
        <div style={{ margin: "5rem 1rem 1rem" }}>
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
                    <select  className="songForm-input" required value={data.artist} onChange={handleChange} name="artist" id="artist">
                      {artistData.map((item) => {
                        return(
                            <option key={item.id} value={item.name}>{item.name}</option>
                        )
                      })}
                    </select>

                    <label htmlFor="album">Choose a album:</label>
                    <select  className="songForm-input" value={data.album} onChange={handleChange} name="album" id="album">
                    {albumData.map((item) => {
                        return(
                            <option key={item.id} value={item.name}>{item.name}</option>
                        )
                      })}
                    </select>

                    <label  htmlFor="language">Choose a language:</label>
                    <select  className="songForm-input" required value={data.language} onChange={handleChange} name="language" id="language">
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