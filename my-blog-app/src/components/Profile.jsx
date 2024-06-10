import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { AuthContex } from "../Contex/authContex";
import { IoCreateOutline } from "react-icons/io5";

function UserProfile() {

    const { currentUser } = useContext(AuthContex)

    let { id } = useParams()

    const [userPosts, setUserPosts] = useState([])

    function getUserPosts() {
        axios.get(`http://localhost:3000/Api/Blog/user/posts/${id}`)
            .then((res) => {
                setUserPosts(res.data.Data)
                console.log(res.data.Data)
            }).catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        getUserPosts()
    }, [])


    return (
        <div className="home">
            {
                currentUser ? (<div className=" bg-white rounded-lg shadow-md p-8 ">

                    <Link to={`/${id}`}><h1 className="text-right text-green-500 ">Edit Profile</h1></Link>

                    <div className="flex flex-col ">
                        <div class="photo-wrapper p-2">
                            {currentUser.user_img ? (
                                <img class="w-32 h-32 rounded-full mx-auto" src={currentUser.user_img} />) : (
                                // <div className="text-center">
                                //     <h1 className=" i-circle">{user.username .charAt(0)}</h1>
                                // </div>
                                <img class="w-32 h-32 rounded-full mx-auto" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" alt="USER" />

                            )
                            }
                        </div>

                        <div className="divide-solid" >
                            <div className="">
                                <h1 className="font-mono text-2xl font-bold subpixel-antialiased text-center ">{currentUser.username}</h1>
                            </div>
                            <div className="text-center">

                            </div>
                        </div>
                    </div>
                </div>) : (
                    <div>not found </div>
                )

            }



            <div className="grid grid-cols-4 gap-2 home ">

                {
                    userPosts.length > 0 ? userPosts.map((post) => (

                        <div className="max-w-lg mx-auto">

                            <div className="bg-white shadow-md border border-gray-200  max-w-sm mb-5">
                                < Link to={`/singlePost/${post.post_id}`}>
                                    <img src={post.img} alt="" />
                                </Link>
                                <div className="p-5">
                                    <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">{post.title}</h5>
                                    <p className="font-normal text-gray-700 mb-3">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>

                                    < Link to={`/singlePost/${post.post_id}`}>Read more</Link>
                                </div>

                            </div>
                        </div>
                    )) : ((
                        <div className="h-40 ">
                            <h1 className="text-center">Write Your First Articale </h1>
                            <Link to={'/create'}> <h6><IoCreateOutline /> Write</h6></Link>
                        </div>
                    ))
                }
            </div>
        </div>





    )
}
export default UserProfile;