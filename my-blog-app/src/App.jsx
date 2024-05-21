import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import Post from './pages/Post'
import CreatePost from './pages/CreatePost'
import EditPost from './pages/EditPost'
import './App.css'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


function App() {


  return (
    <div>
      
      <div>
        <Navbar></Navbar>
      </div>

      <div>
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/create' element={<CreatePost />}></Route>
          <Route path='/edit' element={<EditPost />}></Route>
          <Route path='/singlePost' element={<Post />}></Route>
        </Routes>
      </div>

      <div>
        <Footer></Footer>
      </div>


    </div>
  )


}


export default App
