import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Add.css';
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const add = () => {
    const [course, setCourse] = useState({
        id: '',
        name: '',
        category: '',
        description: '',
        duration: '',
        price: '',
        image: ''
    });
    const navigate = useNavigate();

    let fetchValue = (e) => {
            setCourse({ ...course, [e.target.name]: e.target.value });
    };

    // const location = useLocation();

    // let handleAdd = () => {
    //     if(location.state != null) {
    //         axios.put('http://localhost:3000/edit/'+location.state.course._id, course)
    //         .then((res) => {
    //             alert('data  updated');
    //             navigate('/home');
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    //     }
    //     else {
    //         try {
    //             axios.post('http://localhost:3000/add', course);
    //             navigate('/');
    //         } catch (error) {
    //             console.error('Error adding course:', error);
    //             alert('Failed to add course.');
    //         }
    //     }
    // }

    let handleAdd = () => {
        try{
            axios.post('http://localhost:3000/add',course);
            navigate('/home');
        } catch (error) {
            console.error('Error adding course:', error);
            alert('Failed to add course.');
        }
    };



    return (
        <>
            <div style ={{ marginTop: '50px' }}></div>
            <br />
            <br />
            <h4>add New Course</h4>
            <div className='add'>
                <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '90ch' } }} noValidate autoComplete="off">
                    <TextField onChange={fetchValue} name="id" id="outlined-basic" label="id" variant="outlined"  value={course.id} />
                    <br />
                    <TextField onChange={fetchValue} name="name" id="outlined-basic" label="course name" variant="outlined" value={course.name} />
                    <br />
                    <TextField onChange={fetchValue} name="category" id="outlined-basic" label="course category" variant="outlined" value={course.category} />
                    <br />
                    <TextField onChange={fetchValue} name="description" id="outlined-basic" label="course description" variant="outlined"  value={course.description} />
                    <br />
                    <TextField onChange={fetchValue} name="duration" id="outlined-basic" label="Course duration" variant="outlined" value={course.duration} />
                    <br />
                    <TextField onChange={fetchValue} name="price" id="outlined-basic" label="Course fee" variant="outlined"  value={course.price} />
                    <br />
                    <TextField onChange={fetchValue} name="image" id='outlined-basic' label="Image URL" variant="outlined" value={course.image} />
                    <br/>
                    <Button onClick={handleAdd} variant="outlined">Add</Button>
                </Box>
            </div>
        </>
    )
}

export default add