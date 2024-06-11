import React, { useState } from "react";
import './Login.css'
import logo from './../assets/logo.png'

const Login =()=>{

const [signstate,setSignState] = useState("Sign In");

  return(
    <div className="Login">
      <img src={logo} alt="" className="login-logo"/>
      <div className="Login-form">
        <h1>{signstate} </h1>
        <form >
          {signstate==="Sign Up"?<input type="text" placeholder="Enter your username" /> 
          :<></>}
       <input type="email" placeholder="Email"/>
          <input type="password" placeholder="password" />
        <button type="submit">{signstate}</button>
        <div className="form-help">
          <div className="remember">
            <input type="checkbox" />
          <label htmlFor="">Remember Me</label>
                 
          </div>
          <p> <span>Need Help?</span></p>
        </div>
          </form>
         <div className="Fswitch">
         {signstate==="Sign In"? <p>New To Netflix?<span onClick={()=>{setSignState("Sign Up")}} >Sign up Now </span></p> 
          : <p> Already have an account! <span onClick={()=>{setSignState("Sign In ")}} >Sign in Now </span> </p>
          }
         
        

         </div>
      </div>
    </div>

  )

}


export default Login