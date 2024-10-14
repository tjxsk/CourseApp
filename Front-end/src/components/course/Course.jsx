import React, { useEffect, useState } from 'react'
import './Course.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import axios from 'axios';
import { Grid2 } from '@mui/material';
import { useNavigate } from 'react-router-dom';

// const course = [
// {
//     id: 1,
//     name: "Full Stack Web Development",
//     category: "Web Development",
//     description: "Learn to build full stack web applications using JavaScript, React, and Node.js.",
//     duration: "12 weeks",
//     price: 1000,
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5DKYPK-y5rkBE-l_MkRXmgdM-c3u6OvUqAQ&s"
// },
// {
//     id: 2,
//     name: "Data Science Bootcamp",
//     category: "Data Science",
//     description: "A comprehensive course covering data analysis, machine learning, and Python.",
//     duration: "10 weeks",
//     price: 1200,
//     image: "https://www.mygreatlearning.com/blog/wp-content/uploads/2019/09/What-is-data-science-2.jpg"
// },
//     {
//         id: 3,
//         name: "Mobile App Development with Flutter",
//         category: "Mobile Development",
//         description: "Build cross-platform mobile apps using Flutter and Dart.",
//         duration: "8 weeks",
//         price: 800,
//         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTO_V4HjbEnDrneINTURZMCrs9O9vIF_aZ6g&s"
//     },
//     {
//         id: 4,
//         name: "AI & Machine Learning",
//         category: "Artificial Intelligence",
//         description: "Explore AI techniques and machine learning algorithms with hands-on projects.",
//         duration: "15 weeks",
//         price: 1500,
//         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCsfV9ki_jqXkmKnDILmLW4EXsKpLt0E6f4Q&s"
//     }
// ]

const Home = () => {

    const [rows, setRows] = useState([]);
    const navigate = useNavigate();
    // connecting external API
    useEffect(() => {
        axios.get('http://localhost:3000').then((res) => {
            setRows(res.data);
        })
    }, [])

    const handeleDelete = (id) => {
        axios.delete('http://localhost:3000/delete/' + id)
            .then(() => {
                navigate('/home')
                window.location.reload();
            })
    }
    // handling edit (navigating to edit form)
    const handleEdit = (id) => {
        navigate('/edit/'+ id);
    }

    // const handleEdit = (row) => {
    //     navigate('/add',{state: {row}});
    // }

    return (
        <>
            <br />
            {/* <h4>Course List</h4> */}
            <div className='home'>
                <Grid2 container spacing={{ xs: 2, sm: 3, md: 3 }} columns={{ xs: 4, sm: 6, md: 12 }} justifyContent={'center'}>
                    {rows.map((row) => (
                        <Grid2 size={3}>
                            <Card className='cardmain' sx={{ width: 320, height: 650 }}>
                                {/* <CardActionArea className='CardActionArea' sx={{ height: 650 }}> */}
                                <CardMedia
                                    component="img"
                                    height="300"
                                    image={row.image}
                                    sx={{ objectFit: 'fill' }}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="" component="div" sx={{ fontSize: '1' }}>{row.id}</Typography>
                                    <Typography gutterBottom variant="" component="div" sx={{ fontSize: '10' }}>{row.name}</Typography>
                                    <Typography gutterBottom variant="" component="div" sx={{ fontSize: '4' }}>{row.category}</Typography>
                                    <Typography gutterBottom variant="" component="div" sx={{ fontSize: '4' }}>{row.description}</Typography>
                                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>Course duration : {row.duration}</Typography>
                                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>Price : ${row.price}</Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" onClick={() => handleEdit(row._id)}>Edit</Button>
                                    {/* <Button size="small" onClick={() => handleEdit(row)}>Edit</Button> */}
                                    <Button size="small" onClick={() => handeleDelete(row._id)}>Delete</Button>

                                </CardActions>
                            </Card>
                        </Grid2>
                    ))}
                </Grid2>
            </div>
        </>
    )
}

export default Home