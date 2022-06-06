import axios from "axios";
import React,{useEffect,useContext} from "react";
import { CartContext } from "../../context/CartContext";

const Products = () => {
  let {items,setItems}=useContext(CartContext)
  useEffect(()=>{
    axios.get(" http://localhost:8080/products").then((res)=>{
      console.log(res.data)
      setItems(res.data)
    }).catch(err=>{
      console.log(err.messsage)
    })
  },[])
  return <div>{/* Code here */}
    <h1>Products</h1>
   
      {items.map((e)=>{
        return <>
        <ol>

          <li>

          {e.name}
          </li>
          <li> {e.description}</li>
        </ol>
        
        </>
      })}
  
  </div>;
};

export default Products;
