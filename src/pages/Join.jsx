import { useState,useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import loginlogo from '/public/images/login-logo.svg'
import './Join.css'

function Join(){
    const[email,setEmail]=useState("");
    const[pass,setPass]=useState("");
    const[emailError,setEmailError]=useState("");
    const[passError,setPassError]=useState("");

    const navigate=useNavigate();

    useEffect(() => {
        const savedEmail = localStorage.getItem("email");
        const savedPass = localStorage.getItem("password");
       
        if (savedEmail && savedPass) {
          setEmail(savedEmail);
          setPass(savedPass);
        }
      
        console.log("Loaded from localStorage:", {savedEmail, savedPass});
      }, []); 
    
      function validateEmail(email) {
        const regex = /^[a-zA-Z0-9]+[a-zA-Z0-9._%+-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return regex.test(email);
      }
    
      function validatePass(pass) {
        const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
        return regex.test(pass);
      }

      function validateForm(event) {
        event.preventDefault();
        let isValid = true;
    
        if (!email) {
          setEmailError("Email is required");
          isValid = false;
        } else if (!validateEmail(email)) {
          setEmailError("Email is invalid");
          isValid = false;
        }
    
        if (!pass) {
          setPassError("Password is required");
          isValid = false;
        } else if (!validatePass(pass)) {
          setPassError("Password is invalid");
          isValid = false;
        }
    
        if (isValid) {
          localStorage.setItem("email", email);
          localStorage.setItem("password", pass);
    
          setEmail("");
          setPass("");
          setEmailError("");
          setPassError("");

          navigate("/home");
        }
      }
    return(
        <div className="join">
          <img src={loginlogo} className="join-loginlogo"></img>
            <h2>Make most of your professional life</h2>
            <form onSubmit={validateForm}>
                <div>
                    <input type="email" placeholder="Email id*" value={email} onChange={(e)=>setEmail(e.target.value)}></input><br></br>
                    <span>{emailError && <p style={{ color: "red" }}>{emailError}</p>}</span>
                </div>
                <div>
                    <input type="password" placeholder="Password*" value={pass} onChange={(e)=>setPass(e.target.value)}></input>
                    <span>{passError && <p style={{ color: "red" }}>{passError}</p>}</span>
                </div>
                <div>
                    <button type="submit">Agree & Join</button>
                </div>
                <div className="join-bottom">
                    <p>Already a member?
                    <Link to='/signin'>Sign In</Link></p>
                </div>
            </form>
        </div>
    )
}
export default Join;
