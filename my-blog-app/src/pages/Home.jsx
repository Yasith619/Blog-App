import React from "react";

function Home() {
    return (

        <div className="grid grid-cols-4 gap-4 home">

            <div class="max-w-lg mx-auto">
                <div class="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
                    <a href="/singlePost">
                        <img class="rounded-t-lg" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="" />
                    </a>
                    <div class="p-5">
                        <h5 class="text-gray-900 font-bold text-2xl tracking-tight mb-2">Noteworthy technology acquisitions 2021</h5>
                        <p class="font-normal text-gray-700 mb-3">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                        <a href="/singlePost"> Read more</a>
                    </div>
                </div>
            </div>
           
        </div>
    )
}
export default Home;