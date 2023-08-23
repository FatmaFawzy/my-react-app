import React, { createContext, useState } from 'react'
import { products } from '../../ProuductsItem';
// import {products} from '../../ProuductsItem'
export const ShopContext =createContext(null)
// const getDefultCart =()=>{
//   let cart=[];
//   for(let i=1;i<products.length+1;i++){
//     cart[i]=0;
//   }
//   return cart;
// };
export const ShopContextProvider =(props)=> {
  const [cartItems,setCartItems]= useState(products);
  const addToCart =(itemId) =>{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
  };
    const removeFromCart=(itemId) =>{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}));
  };
  console.log(cartItems);
  const contextValue={cartItems,addToCart,removeFromCart};
  return <ShopContext.Provider value={contextValue}>{props.childern}</ShopContext.Provider>
}

