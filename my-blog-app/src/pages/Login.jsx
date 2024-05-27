import React from "react";
function Login(){
    return(
        <div className="home">
            <div className="flex flex-col gap-4">
                <div className="flex flex-col">
                <label >Email</label>
                <input  type="email" className="border-2 border-gray-500" placeholder="email" />
                </div>
               
                <div className="flex flex-col">
                <label htmlFor="">password</label>
                <input type="text" className="border-2 border-gray-500" placeholder="password" />
                </div>
                
                <button className=" ">Sign in</button>
            </div>
            <div>
                <h1> dont have account sign in here </h1>
                <a href="/register">register</a>
            </div>
        </div>
    )
}
export default Login;