import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { AuthContex } from "../Contex/authContex";


function UserProfile() {
    const navigate = useNavigate()
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
    }, [id])


    return (
        <div className="home">
            {
                currentUser ? (
                    <div>
                        <div className=" bg-white rounded-lg shadow-md p-8 ">
                            {userPosts.slice(0 - 1).map((post) => ( 
                                <div className="flex flex-col ">
                                    {currentUser.username===post.username?(
                                         <div >
                                        <Link to={`edit/${id}`}><h1 className="text-right text-green-500 cursor-pointer ">Edit Profile</h1></Link>
                                         </div>
                                    ):(
                                        <div></div>
                                    )     
                                    }
                                    <div class="photo-wrapper p-2">
                                        {post.user_img ? (
                                            <img class="w-32 h-32 rounded-full mx-auto" src={post.user_img} />) : (
                                            // <div className="text-center">
                                            //     <h1 className=" i-circle">{user.username .charAt(0)}</h1>
                                            // </div>
                                            <img class="w-32 h-32 rounded-full mx-auto" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" alt="USER" />

                                        )}
                                    </div>

                                    <div className="divide-solid">
                                        <div className="">
                                            <h1 className="font-mono text-2xl font-bold subpixel-antialiased text-center ">{post.username}</h1>
                                        </div>
                                        <div className="text-center">

                                        </div>
                                    </div>
                                </div>
                                ))
                            }
                        </div>

                        <div className="grid grid-cols-4 gap-2 home ">

                            {userPosts.length > 0 ? userPosts.map((post) => (

                                <div className="max-w-lg mx-auto">

                                    <div className="bg-white shadow-md border border-gray-200  max-w-sm mb-5">
                                        <Link className="cursor-pointer" to={`/singlePost/${post.post_id}`}>
                                            <img src={post.img} alt="" />
                                        </Link>
                                        <div className="p-5">
                                            <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">{post.title}</h5>
                                            <p className="font-normal text-gray-700 mb-3">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>

                                            <Link className="cursor-pointer" to={`/singlePost/${post.post_id}`}>Read more</Link>
                                        </div>

                                    </div>
                                </div>
                            )) : ((
                                <div className="h-40 ">
                                        <Link to={'/create'}>
                                            <h6 className="text-center text-2xl cursor-pointer text-blue-400">
                                                Write Write Your First Articale
                                            </h6>
                                        </Link>
                                </div>
                            ))
                            }
                        </div>
                    </div>
                ) : navigate('/')
            }

        </div>





    )
}
export default UserProfile;