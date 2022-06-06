import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

// use react-router Link or NavLink
// const Link = <a />;

const Navbar = () => {
  let {isAuth,setisAuth}=useContext(AuthContext)
  return (
    <div data-cy="navbar" className='navbar'>
      <Link data-cy="navbar-home-link" to="/">Home</Link>
      <span data-cy="navbar-cart-items-count">{/* count here */}</span>
      <button data-cy="navbar-login-logout-button" onClick={()=>{
        setisAuth(false)
      }}>Logout</button>
    </div>
  );
};

export default Navbar;
