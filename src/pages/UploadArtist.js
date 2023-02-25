import "../components/SongForm.css";
import { useState } from "react";
import FileInput from "../components/FileInput";
import { useDispatch,useSelector } from "react-redux";
import { createArtist } from "../features/adminSlice";

function UploadMsg({msg}){
    return (
      <div style={{paddingTop : "1rem"}}>
        <h1 style={{ textAlign: "center", color: "#FFFFFF" }} >{msg}</h1>
      </div>
    )
  }

export default function UploadArtist() {

    const dispatch = useDispatch();
    const { artistMsg } = useSelector((state) => state.admin);

    const [data, setData] = useState({
        name : "",
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

            if(data.img === ''){
                return alert("Plz choose image");
            }

            dispatch(createArtist(data));
            console.log("createArtist succes");
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <div style={{ margin: "5rem 1rem 1rem" }}>

            {artistMsg && <UploadMsg msg={artistMsg} />}

            <div className="songForm-container">
                <form className="songForm-form"  onSubmit={handleSubmit} >

                    <h1 className="songForm-heading">Artsit Form</h1>
                    <input
                        type="text"
                        className="songForm-input"
                        placeholder="Artsit Name"
                        name="name"
                        onChange={handleChange}
                        value={data.name}
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