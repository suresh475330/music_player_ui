import "../components/SongForm.css";
import { useState } from "react";
import FileInput from "../components/FileInput";

import { useDispatch, useSelector } from "react-redux";
import { createAlbum } from "../features/adminSlice";

function UploadMsg({ msg }) {
    return (
        <div style={{ paddingTop: "1rem" }}>
            <h1 style={{ textAlign: "center", color: "#FFFFFF" }} >{msg}</h1>
        </div>
    )
}


export default function UploadAlbum() {

    const dispatch = useDispatch();
    const { albumMsg } = useSelector((state) => state.admin);


    const [data, setData] = useState({
        title: "",
        imageUrl: ""
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

            if (data.img === '') {
                return alert("Plz choose image");
            }

            dispatch(createAlbum(data));
            console.log("createAlbum succes");
        } catch (error) {
            console.log(error)
        }
    };
    return (
        <div style={{ margin: "5rem 1rem 1rem" }}>

            {albumMsg && <UploadMsg msg={albumMsg} />}

            <div className="songForm-container">
                <form className="songForm-form" onSubmit={handleSubmit} >

                    <h1 className="songForm-heading">Album Form</h1>
                    <input
                        type="text"
                        className="songForm-input"
                        placeholder="Album Title"
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


                    <button type="submit" className="songForm-submit_btn" >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}