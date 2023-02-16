import { useState } from "react";
import axios from 'axios';
import FileInput from "./FileInput";
import "./SongForm.css";

export default function SongForm(){

	const [data, setData] = useState({
		title: "",
		artist: "",
		song: "",
		img: "",
		language : ""
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
			// const { data : res } = await axios.post(url, data);
			console.log(data)
		} catch (error) {
			console.log(error)
		}
	};

	return (
		<div className="songForm-container">
			<form className="songForm-form" onSubmit={handleSubmit} >
				<h1 className="songForm-heading">Song Form</h1>
				<input
					type="text"
					className="songForm-input"
					placeholder="Song Title"
					name="title"
					onChange={handleChange}
					value={data.name}
				/>
				<input
					type="text"
					className="songForm-input"
					placeholder="Artist Name"
					name="artist"
					onChange={handleChange}
					value={data.artist}
				/>
				<input
					type="text"
					className="songForm-input"
					placeholder="Language"
					name="language"
					onChange={handleChange}
					value={data.language}
				/>
				
				{/* <FileInput
					name="img"
					label="Choose Image"
					handleInputState={handleInputState}
					type="image"
					value={data.img}
				/>
				<FileInput
					name="song"
					label="Choose Song"
					handleInputState={handleInputState}
					type="audio"
					value={data.song}
				/> */}
				<button type="submit" className="songForm-submit_btn" >
					Submit
				</button>
			</form>
		</div>
	);
};