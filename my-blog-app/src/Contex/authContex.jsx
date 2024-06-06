import React, { createContext, useEffect, useState } from "react";
import axios from "axios";


//create contex
export const AuthContex = createContext();

export const AuthContexProvider = ({ children }) => {
    //JSON.parse will convert json string to json object

    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")|| null))


    function Signin(data) {

        axios.post('http://localhost:3000/Api/user/login', data)
            .then((res) => {
                setCurrentUser(res.data[0])

            }).catch((err) => {
                console.log(err.response.data)

            })
    }

    function SignOut() {
        axios.post('http://localhost:3000/Api/user/logout')
            .then((res) => {
                setCurrentUser(null)

            }).catch((err) => {
                console.log(err.response.data)

            })
    }

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser))
    }, [currentUser])

    return (
        <AuthContex.Provider value={{ currentUser, Signin, SignOut }}>{children}</AuthContex.Provider>
    )
}