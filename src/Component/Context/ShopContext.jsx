import React, { createContext, useState } from "react";
import { products } from "../../ProuductsItem";

const ShopContext = createContext({});

const getDefultCart = () => {
  let cart = {};
  for (let i = 1; i < products.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};
export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefultCart());

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  return (
    <ShopContext.Provider value={{ addToCart, removeFromCart, cartItems }}>
      {" "}
      {props.children}
    </ShopContext.Provider>
  );
};

export const useShopContext = () => React.useContext(ShopContext);
