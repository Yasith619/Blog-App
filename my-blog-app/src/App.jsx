import React from "react";
import {createBrowserRouter,Outlet,RouterProvider,} from "react-router-dom";

import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import Post from './pages/Post'
import CreatePost from './pages/CreatePost'
import EditPost from './pages/EditPost'
import UserProfile from "./components/Profile";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import './App.css'



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/create',
        element: <CreatePost />
      },
      {
        path: '/edit',
        element: <EditPost />
      }, {
        path: '/singlePost/:post_id',
        element: <Post />
      },{
        path:'/profile/:id',
        element:<UserProfile/>
      },
      
    ]
  },

  {
    path: "/SignIn",
    element: <Login />,
  },
  {
    path: "/SignUp",
    element: <Register />,
  },

]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />

    </div>
  )
}

function Layout() {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}


export default App
