import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import Loading from '../components/Loading';
import { useSelector, useDispatch } from 'react-redux';
import { deleteAlbum, getAllAlbum, removeAlbum } from '../features/adminSlice';
import { useEffect } from 'react';


function AlbumMsg({ msg }) {
    return (
        <div style={{ paddingTop: "1rem" }}>
            <h1 style={{ textAlign: "center", color: "#FFFFFF" }} >{msg}</h1>
        </div>
    )
}

export default function ManageAlbums(){

    const { albums, albumStatus, albumError ,deleteAlbumMsg} = useSelector((state) => state.admin);
    const dispatch = useDispatch();

    async function getAlbum() {       
            dispatch(getAllAlbum());
    }

    function handleDelete(data) {
        const response = window.confirm(`Are you sure you want remove a ${data.title}?`);
        if(response === true){
            console.log(`deleting ${data._id}`);
            dispatch(removeAlbum(data._id));
            dispatch(deleteAlbum(data._id))
        }
    }

    useEffect(() => {
        getAlbum();
    }, [])



    return(
        <div style={{ margin: "5rem 1rem 1rem" }}>

        {albumStatus === 'failed' && (<AlbumMsg msg={albumError} />)}
        {deleteAlbumMsg  && (<AlbumMsg msg={deleteAlbumMsg} />)}

        {albumStatus === 'loading' ? (<Loading />) : (

            <>
                <h1>{albums?.length} Albums is there</h1>

                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 450, backgroundColor: "#181818" }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ color: "#FFFFFF" }} >Album Image</TableCell>
                                <TableCell sx={{ color: "#FFFFFF" }} align="right">Album title</TableCell>
                                <TableCell sx={{ color: "#FFFFFF" }} align="right">Album _id</TableCell>
                                <TableCell sx={{ color: "#FFFFFF" }} align="right">Delete</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {albums?.map((row) => (
                                <TableRow
                                    key={row._id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        <img width={50} src={row.imageUrl} alt="ArtistImg" />
                                    </TableCell>
                                    <TableCell sx={{ color: "#FFFFFF" }} align="right">{row.title}</TableCell>
                                    <TableCell sx={{ color: "#FFFFFF" }} align="right">{row._id}</TableCell>
                                    <TableCell sx={{ color: "#FFFFFF" }} align="right">
                                            <DeleteIcon sx={{ color: "#FFFFFF" , ":hover" : {color : "red"}}} onClick={() => handleDelete(row)}/>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </>

        )}

    </div>
    )
}