import React from "react";
import { Link } from "react-router-dom";
import { IoCreateOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
function Navbar() {
    return (
        <div className="navbar">
            <div className="container">
                <div className="logo">
                    <img src="vite.svg" alt="" />
                </div>
                <div className="Links">
                    <Link to={'/'}>
                        <h6>HOME</h6>
                    </Link>
                </div>
                <div>
                    <Link to={'/Science'}>
                        <h6>SCIENCE</h6>
                    </Link>

                </div>
                <div>
                    <Link to={'/tech'}>
                        <h6>TECHNOLOGY</h6>
                    </Link>

                </div>
                <div>
                    <Link to={'/Art'}>
                        <h6>ART</h6>
                    </Link>
                </div>

                <div>
                    <Link to={'/Music'}>
                        <h6>MUSIC</h6>
                    </Link>
                </div>
                <div>
                    <Link to={'/create'}>
                        <h6><IoCreateOutline /> Write</h6>
                    </Link>
                </div>

                <div className="profile">
                    <h6>profile</h6>
                </div>

                <div className="profile">
                    <h6> <IoIosLogOut /> logout</h6>
                </div>
            </div>
        </div>
    )
}
export default Navbar;