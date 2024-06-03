import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";





function Login() {

    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")
    
    const navigate=useNavigate()
   

    function signInUser(e){
        e.preventDefault();
        const data={
            username,
            password}
      
        axios.post('http://localhost:3000/Api/user/login', data)
            .then((res) => {
                console.log(res.data)
                navigate('/')
            }).catch((err) => {
                console.log(err.response.data)
                
            })
    }


    return (

        <div className="mt-20 max-w-sm mx-auto ">
            <form onSubmit={signInUser}>
                <div className="flex flex-col gap-6 place-items-center bg-white shadow-md border border-gray-200 rounded-lg p-2  ">

                    <h4 className="mt-5 text-xl font-sans font-bold ">Sign in to your Account</h4>
                    <div className="flex flex-col mt-6">
                        <label className="text-lg font-sans  " >User Name</label>
                        <input required  id="username"  type="text" className="border-2 border-sky-500 rounded-md  px-8 py-2 " placeholder="email" 
                        onChange={(e)=>{
                            setUserName(e.target.value)
                        }}
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-lg font-sans" htmlFor="">Password</label>
                        <input required minLength={8 } id="password"  type="text" className="border-2 border-sky-500 rounded-md px-8 py-2" placeholder="password" 
                        onChange={(e)=>{
                            setPassword(e.target.value)
                        }}
                        />
                    </div>

                    <button type="submit" className=" px-6 py-2 bg-blue-300  hover:bg-sky-500 rounded-lg font-sans">Sign in</button>
                    <span className="mb-6 font-sans   text-base">Don't have account ? <a className="text-blue-700 cursor-pointer" href="/register">register</a> here</span>

                </div>
            </form>

        </div>
    )
}
export default Login;