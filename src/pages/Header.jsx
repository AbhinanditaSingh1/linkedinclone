import React from "react";
import logo from '/public/images/logo.png'
import home from '/public/images/home.png'
import network from '/public/images/network.png'
import jobs from '/public/images/jobs.png'
import user1 from '/public/images/user-1.png'
import search from '/public/images/search.png'
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import './Header.css'

function Header(){
    return(
        <nav className="navbar">
            <div className="navbar-left">
                <Link to={'/home'}><img src={logo} className="logo"></img></Link>
                <div className="search">
                    <img src={search}></img>
                    <input type="text" placeholder="search"></input>
                </div>
            </div>
            <div className="navbar-center">
                <ul>
                    <li>
                        <NavLink to="/home" className={({ isActive }) => isActive ? "active-link" : ""}>
                            <img src={home} />
                            <span>Home</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/connections" className={({ isActive }) => isActive ? "active-link" : ""}>
                            <img src={network} />
                            <span>My Network</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/jobs" className={({ isActive }) => isActive ? "active-link" : ""}>
                            <img src={jobs} />
                            <span>Jobs</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/profile" className={({ isActive }) => isActive ? "active-link" : ""}>
                            <img src={network} />
                            <span className="profile">Profile</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="navbar-right">
                <div className="online">
                    <img src={user1} className="nav-profile-img"></img>
                </div>
            </div>
        </nav>  
    )
}
export default Header;