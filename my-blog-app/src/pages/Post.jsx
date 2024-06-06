import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Menu from "../components/SideMenu";
import axios from "axios";



function Post() {

    const [posts, setPosts] = useState([])
    let { post_id } = useParams()

    function getsinglePost() {
        axios.get(`http://localhost:3000/Api/Blog/singlePost/${post_id}`)
            .then((res) => {
                setPosts(res.data.Data)
                console.log(res.data.Data)
            }).catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        getsinglePost()
    }, [])


    return (
        <div >
            {
                posts.length > 0 ? posts.map((post) => (
                    <div className=" home flex flex-col">
                        <div className="py-5">
                            <div className="container mx-auto px-6">
                                <h1 className="text-4xl font-bold text-gray-800 mb-1">{post.title}</h1>
                                <p className="text-gray-600">Published on {post.date}</p>
                            </div>
                        </div>
                        <div className="bg-white py-8 px-5">
                            <div className="container mx-auto px-4 flex flex-col gap-6 md:flex-row">
                                <div className="w-full md:w-3/4 px-4">
                                    <img src={post.img} alt="Blog Featured Image" class="mb-8" />
                                    <div className="prose max-w-none">
                                        <p>{post.description}</p>
                                    </div>
                                    <div>
                                        actions
                                    </div>
                                </div>
                                <div className="w-full md:w-1/4 px-1">
                                    <Menu></Menu>
                                </div>
                            </div>

                        </div>
                    </div>
                )) : ((
                    <div>No post</div>
                ))
            }

        </div>

    )
}
export default Post;