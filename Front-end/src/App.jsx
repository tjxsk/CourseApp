
import './App.css'
import Navbar from './components/navbar/Navbar'
import Course from  './components/course/Course'
import Add from './components/addCourse/Add'
import Edit from './components/editCourse/Edit';
import { Route, Routes, useLocation } from 'react-router-dom'
import Login from './components/login/Login';


function App() {

  const location = useLocation();

  return (
    <>
      {/* <Navbar/> */}
      {location.pathname !== '/' && <Navbar />}
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/home" element={<Course />} />
        <Route path="/add" element={<Add />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </>
  )
}

export default App
