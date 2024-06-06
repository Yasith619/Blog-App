import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";



function Register() {

    const [username, setUsername] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const navigate = useNavigate()
    const [errorMessage, setErrorMessage] = useState();

    //Register user data 
    function submitUserData(e) {

        e.preventDefault();
        const ueserInputs = {
            username,
            email,
            password
        }

        axios.post('http://localhost:3000/Api/user/register', ueserInputs)
            .then((res) => {
                console.log(res.data)
                navigate('/login')

            }).catch((err) => {
                console.log(err.response.data)
                setErrorMessage(err.response.data);
            })
    }

    return (
        <div >
            <div className="mt-10 max-w-sm mx-auto ">
                <form onSubmit={submitUserData}>
                    <div className="flex flex-col gap-4 place-items-center bg-white shadow-md border border-gray-200 rounded-lg p-2  ">

                        <h4 className="mt-5 text-xl font-sans font-bold ">Register as New User</h4>
                        <div className="flex flex-col mt-3">
                            <label className="text-lg font-sans  " >Username</label>
                            <input required type="text" id="username" className="border-2 border-sky-500 rounded-md  px-8 py-2 " placeholder="Username"
                                onChange={(e) => {
                                    setUsername(e.target.value)
                                }}
                            />
                        </div>
                        <div className="flex flex-col mt-3">
                            <label className="text-lg font-sans  " >Email</label>
                            <input required type="email" id="Email" className="border-2 border-sky-500 rounded-md  px-8 py-2 " placeholder="email"
                                onChange={(e) => {
                                    setEmail(e.target.value)
                                }}
                            />
                        </div>

                        <div className="flex flex-col mt-3">
                            <label className="text-lg font-sans  " htmlFor="">Password</label>
                            <input required minLength={8} type="text" id="password" className="border-2 border-sky-500 rounded-md px-8 py-2" placeholder="password"
                                onChange={(e) => {
                                    setPassword(e.target.value)
                                }}
                            />
                        </div>

                        <button type="submit" className=" px-6 py-2 bg-blue-300  hover:bg-sky-500 rounded-lg font-sans">Register</button>
                        {<p className="text-red-600 text-sm"> {errorMessage} </p>}
                        <span className="mb-6 font-sans   text-base">Already have account ? <a className="text-blue-700 cursor-pointer" href="/SignIn">sign in</a> here</span>

                    </div>
                </form>
            </div>
        </div>
    )
}
export default Register;