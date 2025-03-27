import React from "react";
import { useNavigate } from "react-router-dom";
import loginlogo from '/public/images/login-logo.svg'
import loginhero from '/public/images/login-hero.svg'
import './Login.css'

function Login(){

    const navigate=useNavigate();

    function handlejoin(){
        navigate('/join');    
    }
    function handlesignin(){
        navigate('/signin');
    }
    return(
        <div>
            <div className="header">
                <img src={loginlogo} className="loginlogo"></img>
                <button onClick={handlejoin} className="login-join">Join Now</button>
                <button onClick={handlesignin} className="login-signin">Sign In</button>
            </div>
            <div className="body">
                <p className="login-left">Welcome to your professional community</p>
                <img src={loginhero} className="loginhero"></img>
            </div>
        </div>
    )
}
export default Login;