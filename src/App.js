import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import React, { useState, useContext } from "react";
import Products from "./components/Products/Products";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { AuthContext } from "./context/AuthContext";
import Navbar from "./components/Navbar/Navbar";

function App() {
  let {isAuth,setisAuth}=useContext(AuthContext)
  return (
    <div className="App">
      <Navbar/>
      <Routes>

        <Route path="/products" element={isAuth?<Products/>:<Navigate to="/login"/>}/>
        <Route path="/" element={  isAuth? <Home/> :<Navigate to="/login"/>}/>
        <Route path="/cartItems" element={  isAuth? <Home/> :<Navigate to="/login"/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
