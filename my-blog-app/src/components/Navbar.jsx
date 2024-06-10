import React, { useContext } from "react";
import { Link} from "react-router-dom";
import { IoCreateOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import { AuthContex } from "../Contex/authContex";


function Navbar() {
    
const {currentUser,SignOut}=useContext(AuthContex)


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
                    <Link to={'/'}>
                        <h6>SCIENCE</h6>
                    </Link>

                </div>
                <div>
                    <Link to={'/#'}>
                        <h6>TECHNOLOGY</h6>
                    </Link>

                </div>
                <div>
                    <Link to={'/#'}>
                        <h6>ART</h6>
                    </Link>
                </div>

                <div>
                    <Link to={'/#'}>
                        <h6>MUSIC</h6>
                    </Link>
                </div>
                <div>

                    { currentUser ?( <Link to={'/create'}> <h6><IoCreateOutline /> Write</h6></Link>):(
                        <Link to={'/SignIn'}><h6><IoCreateOutline /> Write</h6></Link>
                    )
                   
                    }
                </div>

                <div className="profile">
                    {currentUser ? (<Link to={`/profile/${currentUser.id}`}><h6>{currentUser?.username}</h6></Link>):(
                        <h6>Profile</h6>
                    )}
                </div>

                <div className="profile">
                    {currentUser ? (<button onClick={SignOut}> <IoIosLogOut />Sign Out</button>):(
                     <Link to={'/SignIn'}>Sign in</Link>
                    )}                   
                </div>
            </div>
        </div>
    )
}
export default Navbar;