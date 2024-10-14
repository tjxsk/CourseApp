import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import './Navbar.css';



export default function Navbar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar className='navbar1' position="fixed" sx={{ bgcolor: 'white', color: 'black', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2' }}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}> Cour<span>Sphere</span> </Typography>
                    <Button className='btn' color="inherit" href='/home'>Home</Button>
                    <Button className='btn' color="inherit" href='/add'>Add</Button>
                    <Button className='btn' color="inherit" href='/'>Log out</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}