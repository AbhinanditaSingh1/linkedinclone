import { Link,useNavigate } from "react-router-dom"
import { useState } from "react";
import loginlogo from '/public/images/login-logo.svg'
import './Signin.css'

function Signin(){
    
    const navigate=useNavigate();
    
    const[email,setEmail]=useState("");
    const[pass,setPass]=useState("");

    const[emailError,setEmailError]=useState("");
    const[passError,setPassError]=useState("");

    function validateForm(event){
        event.preventDefault();
        let isValid=true;

        if(!email){
            setEmailError("Email is required");
            isValid=false;
        }
        if(!pass){
            setPassError("Password is required");
            isValid=false;
        }

        if(isValid){
            const storedEmail=localStorage.getItem("email");
            const storedPass=localStorage.getItem("password");

            if(email===storedEmail && pass===storedPass){
                alert("Sign-in successful");

                navigate("/home");
            }
            else
            {
                alert("Invalid email or password")
            }
        }
    }
    return(
        
        <div>
            <div className="signin-head">
                <img src={loginlogo} className="signinlogo"></img>
                <h2>Sign in</h2>
                <h3>Stay updated on your professional world</h3>
            </div>
            <form onSubmit={validateForm} className="signin">
                <div>
                    <input type="email" placeholder="Email id*" value={email} onChange={(e)=>setEmail(e.target.value)}></input><br></br>
                    <span>{emailError && <p style={{ color: "red" }}>{emailError}</p>}</span>
                </div>
                <div>
                    <input type="password" placeholder="Password*" value={pass} onChange={(e)=>setPass(e.target.value)}></input>
                    <span>{passError && <p style={{ color: "red" }}>{passError}</p>}</span>
                </div>
                <div>
                    <button type="submit">Sign In</button>
                </div>
                <div>
                    <p>New to LinkedIn?
                    <Link to='/join'>Join Now</Link></p>
                </div>
            </form>
        </div>
    )
}
export default Signin;