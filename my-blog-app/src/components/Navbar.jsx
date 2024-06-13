import React, { useContext } from "react";
import { Link} from "react-router-dom";
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

                    { currentUser ?( 
                        <Link to={'/create'}> <h6> Write</h6></Link>):(
                        <Link to={'/SignIn'}><h6> Write</h6></Link>
                    )
                   
                    }
                </div>

    

                <div className="profile">
                    {currentUser ? (<button onClick={SignOut}><h6>Sign Out</h6></button>):(
                     <Link to={'/SignIn'}> <h6>Sign in</h6></Link>
                    )}                   
                </div>
                <div >
                    {
                        currentUser ?(
                            currentUser.user_img?(
                            <Link to={`/profile/${currentUser.id}`}>
                                <img className="w-9 h-9 rounded-full mx-auto cursor-pointer" src={currentUser.user_img} />
                             </Link>):(
                                 <img className="w-9 h-9 rounded-full mx-auto" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" alt="USER" />
                             )
                         ):(
                           <div></div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}
export default Navbar;