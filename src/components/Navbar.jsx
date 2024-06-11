import React from "react";
import './Navbar.css'
import logo from './../assets/logo.png'
import search_icon from './../assets/search_icon.svg'
import bell_icon from './../assets/bell_icon.svg'
import profile_icon from './../assets/profile_img.png'
import drop_icon from './../assets/caret_icon.svg'

const Navbar =()=>{

    return(
    <div className="Navbar">
            <div className="Navbar-left">
                <img src={logo} alt="" />
                <ul>
                    <li>Home</li>
                    <li>Tv shows </li>
                    <li>Movies</li>
                    <li> New & Popular</li>
                    <li>My List</li>
                    <li>Browse by languages</li>
                </ul>
                
            </div>
            <div className="navbar-right">
                <img src={search_icon} alt="" className="icons" />
                <p>Children</p>
                <img src={bell_icon} alt="" className="icons" />
                <div className="navbar-profile">
                <img src={profile_icon} alt="" className="profile" />
                <img src={drop_icon} alt=""  />
                <div className="dropdown">
                    <p>Settings</p>
                    <p>Sign out of Netflix</p>
                </div>
                </div>
            </div>
        </div>
)
    

}


export default Navbar