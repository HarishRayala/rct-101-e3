import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate=useNavigate()
  return <div>{/* Code here */}
    <br />
  <button onClick={()=>{
    navigate("/products")
  }}>Products</button>
  <br />
  <button onClick={()=>{
    navigate("/cartItems")
  }}>cart itemns</button>
  </div>;
};

export default Home;
