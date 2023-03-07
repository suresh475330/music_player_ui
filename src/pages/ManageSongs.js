import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllSongs, deleteSong, removeSong } from '../features/adminSlice';
import Pagination from '@mui/material/Pagination';
import Loading from '../components/Loading';

function SonsgMsg({ msg }) {
    return (
        <div style={{ paddingTop: "1rem" }}>
            <h1 style={{ textAlign: "center", color: "#FFFFFF" }} >{msg}</h1>
        </div>
    )
}

export default function ManageSongs() {

    const [page, setPage] = React.useState(1);
    const handleChange = (event, value) => {
        setPage(value);
    };

    const dispatch = useDispatch();
    const { songs, songsStatus, songsError, deleteSongtMsg } = useSelector((state) => state.admin)

    function handleDelete(data) {
        const response = window.confirm(`Are you sure you want remove a ${data.title}?`);
        if (response === true) {
            console.log(`deleting ${data._id}`);
            dispatch(removeSong(data._id));
            dispatch(deleteSong(data._id))
        }
    }

    async function getSongs(pageData) {
        dispatch(getAllSongs(pageData));
    }


    useEffect(() => {
        getSongs(page);
    }, [page])

    return (
        <div style={{ margin: "5rem 1rem 1rem" }}>

            {songsStatus === 'failed' && (<SonsgMsg msg={songsError} />)}
            {deleteSongtMsg && (<SonsgMsg msg={deleteSongtMsg} />)}


            {songsStatus === "loading" ? (<Loading />) : (
                <>
                    <h1>{songs?.songs?.length} Songs is there</h1>

                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 450, backgroundColor: "#181818" }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell sx={{ color: "#FFFFFF" }} >Image</TableCell>
                                    <TableCell sx={{ color: "#FFFFFF" }} align="right">Title</TableCell>
                                    <TableCell sx={{ color: "#FFFFFF" }} align="right">_id</TableCell>
                                    <TableCell sx={{ color: "#FFFFFF" }} align="right">ArtistName</TableCell>
                                    <TableCell sx={{ color: "#FFFFFF" }} align="right">AlbumName</TableCell>
                                    <TableCell sx={{ color: "#FFFFFF" }} align="right">Language</TableCell>
                                    <TableCell sx={{ color: "#FFFFFF" }} align="right">Delete</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {songs?.songs?.map((row) => (
                                    <TableRow
                                        key={row._id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            <img width={50} src={row.imageUrl} alt="SongImg" />
                                        </TableCell>
                                        <TableCell sx={{ color: "#FFFFFF" }} align="right">{row.title}</TableCell>
                                        <TableCell sx={{ color: "#FFFFFF" }} align="right">{row._id}</TableCell>
                                        <TableCell sx={{ color: "#FFFFFF" }} align="right">{row.artist.name}</TableCell>
                                        <TableCell sx={{ color: "#FFFFFF" }} align="right">{row.album?.title}</TableCell>
                                        <TableCell sx={{ color: "#FFFFFF" }} align="right">{row.language}</TableCell>
                                        <TableCell sx={{ color: "#FFFFFF" }} align="right">
                                            <DeleteIcon sx={{ color: "#FFFFFF", ":hover": { color: "red" } }} onClick={() => handleDelete(row)} />
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <div style={{ margin: "auto", width: "fit-content", alignItems: "center" }}>
                        <Pagination
                            page={page}
                            onChange={handleChange}
                            sx={{ backgroundColor: "#29b6f6", marginTop: "1rem" }}
                            count={songs?.pageCount}
                        />
                    </div>
                </>

            )}


        </div>
    )
}