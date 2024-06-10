import axios from "axios";
import { useState } from "react";
import { useContext } from "react";
import { AuthContex } from "../Contex/authContex";



function CreatePost() {

    const {currentUser}=useContext(AuthContex)

    const[title,setTitle]=useState("")
    const[description,setDescription]=useState("")
    const[img,setImg]=useState("")
    const[date,setDate]=useState("")
    const user_id=currentUser.id


    const data = {title,description,img,date,user_id}
    console.log(data)
    
    function Post(e) {
        e.preventDefault();
        const data = {title,description,img,date,user_id}

        axios.post('http://localhost:3000/Api/Blog/create', data)
            .then((res) => {
                console.log(res)
            }).catch((err) => {
                console.log(err)
            })
    }


    return (
        <div className="home">
            <div className="container mx-auto px-6">
                <form onSubmit={Post}>
                    <div>
                        <label className="text-sm text-gray-700 block  font-medium">POST TITLE</label>
                        <input type="text" id="title" className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block
                             focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                             onChange={(e)=>{setTitle(e.target.value)}}/>
                    </div>
                    <div>
                        <label className="text-sm text-gray-700 block  font-medium">DESCRIPTION</label>
                        <textarea rows="30" type="text" id="description" className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block
                             focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full  " 
                             onChange={(e)=>{setDescription(e.target.value)}}/>
                    </div>
                    <div>
                        <label className="text-sm text-gray-700 block  font-medium">IMAGE URL</label>
                        <input type="text" id="img" className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block
                             focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full " 
                             onChange={(e)=>{setImg(e.target.value)}}/>
                    </div>
                    <div>
                        <label className="text-sm  text-gray-700 block  font-medium">DATE</label>
                        <input type="date" id="date" 
                         onChange={(e)=>{setDate(e.target.value)}} />
                    </div>
                    
                    <div>
                        <button type="submit" className="py-2 px-8
                         bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50">Save</button>

                    </div>
                </form>
            </div>
        </div>
    )
}
export default CreatePost;