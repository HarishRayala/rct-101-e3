import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Home from "./Home";

const Login = () => {
  const navigate=useNavigate()
  let {isAuth,setisAuth}=useContext(AuthContext)
  return (
    <div>
      
     
      <br />
      <input data-cy="login-email" name='email' type='email' placeholder='Enter Email id'  />
      <br/>
      <input data-cy="login-password" name='password' type='password'  placeholder='Enter Password' />
      <br />
      <button data-cy="login-submit" onClick={()=>{
        setisAuth(true);
        navigate("/")

      }} >Login</button>
    </div>
  );
};

export default Login;
