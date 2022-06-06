import React, {useState, createContext } from "react";
import axios from 'axios'

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const[isAuth,setisAuth]=useState(false)
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  function ToggleAuth(email,password){
    let body={email,password}
    axios.post("http://localhost:8080/products",body).then((res)=>{
      console.log(res)
      setisAuth(true)
    }).catch((res)=>{
      console.log(res)
    })
  }


  return <AuthContext.Provider value={{email,password,setEmail,setPassword,ToggleAuth,isAuth,setisAuth}} >{children}</AuthContext.Provider>;
};
