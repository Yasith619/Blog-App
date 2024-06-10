import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Home() {

    const[posts,setPostsData]=useState([])

    function getPosts(){
        axios.get('http://localhost:3000/Api/Blog/posts')
        .then((res)=>{
            setPostsData(res.data.Data)
            console.log(res.data.Data)
        }).catch((err)=>{
            console.log(err)
        })
    }

    useEffect(()=>{
        getPosts()
    },[])


    return (
        <div className="grid grid-cols-4 gap-4 home">
                {
                    posts.length > 0 ? posts.map((post) => (
                        
                        <div className="max-w-lg mx-auto" key={post.post_id}>

                        <div className="bg-white shadow-md border border-gray-200  max-w-sm mb-5">
                            < Link to={`/singlePost/${post.post_id}`}>
                                <img  src={post.img} alt="" />
                            </Link>
                            <div className="p-5">
                                <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">{post.title}</h5>
                                <p className="font-normal text-gray-700 mb-3">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>

                                < Link to={`/singlePost/${post.post_id}`}>Read more</Link>
                            </div>
                        </div>
                        </div>
                    )) : ((
                        <div>Opps :-(  No posts Available</div>
                    ))
                }  
        </div>
    )
}
export default Home;