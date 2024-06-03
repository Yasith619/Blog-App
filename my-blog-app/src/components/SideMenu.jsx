import React from "react";
import { Link } from "react-router-dom";


function Menu() {
    return (
        <div className="bg-gray-100 p-4">
            <div className="text-xl font-bold text-gray-800 mb-5 mx-14">
                Recent posts
            </div>
            <div class="bg-white shadow-md border border-gray-200  max-w-sm mb-5">
                <Link Link to={"/singlePost"}>
                    <img class="" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="" />
                </Link>
                <div class="p-5">
                    <h5 class="text-gray-900 font-bold text-2l tracking-tight mb-2">Noteworthy technology acquisitions 2021</h5>
                    <Link Link to={"/singlePost"}>Read more</Link>
                </div>
            </div>
            <div class="bg-white shadow-md border border-gray-200  max-w-sm mb-5">
                <Link Link to={"/singlePost"}>
                    <img class="" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="" />
                </Link>
                <div class="p-5">
                    <h5 class="text-gray-900 font-bold text-2l tracking-tight mb-2">Noteworthy technology acquisitions 2021</h5>
                    <Link Link to={"/singlePost"}>Read more</Link>
                </div>
            </div>
            <div class="bg-white shadow-md border border-gray-200  max-w-sm mb-5">
                <Link Link to={"/singlePost"}>
                    <img class="" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="" />
                </Link>
                <div class="p-5">
                    <h5 class="text-gray-900 font-bold text-2l tracking-tight mb-2">Noteworthy technology acquisitions 2021</h5>
                    <Link Link to={"/singlePost"}>Read more</Link>
                </div>
            </div>
        </div>
     
    )
}

export default Menu;