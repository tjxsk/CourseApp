import React, { useEffect } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Edit.css';
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const edit = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [editData, setEditData] = useState({
        id: '',
        name: '',
        category: '',
        description: '',
        duration: '' ,
        price: '',
        image: '' 
    });

    useEffect(() => {
        axios.get(`http://localhost:3000/${id}`)
            .then((res) => {
                setEditData(res.data);
            })
    }, [id]);


    const handleUpdate = () => {
        axios.put('http://localhost:3000/edit/'+id, editData)
            .then(() => {
                navigate('/home');
            })
            .catch(err => {
                console.error('Error updating item:', err);
            });
    };

    let fetchValue = (e) => {
        setEditData({ ...editData, [e.target.name]: e.target.value })
    }


    return (
        <>
            <div style={{ marginTop: '50px' }}></div>
            <br />
            <br />
            <h4>Edit Course</h4>
            <div className='edit'>
                <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '90ch' } }} noValidate autoComplete="off">
                    <TextField onChange={fetchValue} name="id" id="outlined-basic" label="id" variant="outlined" value={editData.id} />
                    <br />
                    <TextField onChange={fetchValue} name="name" id="outlined-basic" label="course Name" variant="outlined" value={editData.name} />
                    <br />
                    <TextField onChange={fetchValue} name="category" id="outlined-basic" label="course category" variant="outlined" value={editData.category} />
                    <br />
                    <TextField onChange={fetchValue} name="description" id="outlined-basic" label="Course description" variant="outlined" value={editData.description} />
                    <br />
                    <TextField onChange={fetchValue} name="duration" id="outlined-basic" label="Course duration" variant="outlined" value={editData.duration} />
                    <br />
                    <TextField onChange={fetchValue} name="price" id="outlined-basic" label="Course Fee" variant="outlined" value={editData.price} />
                    <br />
                    <TextField onChange={fetchValue} name="image" id='outlined-basic' label="Image URL" variant="outlined" value={editData.image} />
                    <br />
                    <Button onClick={handleUpdate} variant="outlined">Save Changes</Button>
                </Box>
            </div>
        </>
    )
}

export default edit