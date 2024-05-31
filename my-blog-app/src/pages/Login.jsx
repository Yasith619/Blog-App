import React from "react";





function Login(){
    return(

        <div className="mt-20 max-w-sm mx-auto ">
          
            <div className="flex flex-col gap-6 place-items-center bg-white shadow-md border border-gray-200 rounded-lg p-2  ">

                <h4 className="mt-5 text-xl font-sans font-bold ">Sign in to your Account</h4>
                <div className="flex flex-col mt-6">    
                <label className="text-lg font-sans  " >Email</label>
                <input required type="email" className="border-2 border-sky-500 rounded-md  px-8 py-2 " placeholder="email" />
                </div>
               
                <div className="flex flex-col">
                <label className="text-lg font-sans  " htmlFor="">Password</label>
                <input required minLength={8} type="text" className="border-2 border-sky-500 rounded-md px-8 py-2" placeholder="password" />
                </div>
                
                <button className=" px-6 py-2 bg-blue-300  hover:bg-sky-500 rounded-lg font-sans">Sign in</button>
                <span className="mb-6 font-sans   text-base">Don't have account ? <a className="text-blue-700 cursor-pointer" href="/register">register</a> here</span>

            </div>
        </div>
    )
}
export default Login;