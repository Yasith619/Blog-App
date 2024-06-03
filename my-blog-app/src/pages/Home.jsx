import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (

        <div className="grid grid-cols-4 gap-4 home">

            <div class="max-w-lg mx-auto">
                <div class="bg-white shadow-md border border-gray-200  max-w-sm mb-5">
                    <Link Link to={"/singlePost"}>
                        <img class="" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="" />
                    </Link>
                    <div class="p-5">
                        <h5 class="text-gray-900 font-bold text-2xl tracking-tight mb-2">Noteworthy technology acquisitions 2021</h5>
                        <p class="font-normal text-gray-700 mb-3">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                       
                        <Link Link to={"/singlePost"}>Read more</Link>
                    </div>
                </div>
            </div>
           
        </div>
    )
}
export default Home;