import React from "react";




function Register() {

    return (
        <div >

            <div className="mt-10 max-w-sm mx-auto ">

                <div className="flex flex-col gap-4 place-items-center bg-white shadow-md border border-gray-200 rounded-lg p-2  ">

                    <h4 className="mt-5 text-xl font-sans font-bold ">Register as New User</h4>

                    <div className="flex flex-col mt-3">
                        <label className="text-lg font-sans  " >Username</label>
                        <input required type="text" className="border-2 border-sky-500 rounded-md  px-8 py-2 " placeholder="Username" />
                    </div>
                    <div className="flex flex-col mt-3">
                        <label className="text-lg font-sans  " >Email</label>
                        <input required type="email" className="border-2 border-sky-500 rounded-md  px-8 py-2 " placeholder="email" />
                    </div>

                    <div className="flex flex-col mt-3">
                        <label className="text-lg font-sans  " htmlFor="">Password</label>
                        <input required minLength={8} type="text" className="border-2 border-sky-500 rounded-md px-8 py-2" placeholder="password" />
                    </div>

                    <button className=" px-6 py-2 bg-blue-300  hover:bg-sky-500 rounded-lg font-sans">Register</button>
                    <span className="mb-6 font-sans   text-base">Already have account ? <a className="text-blue-700 cursor-pointer" href="/login">sign in</a> here</span>

                </div>
            </div>
        </div>
    )
}
export default Register;