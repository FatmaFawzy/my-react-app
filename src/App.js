import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './Pages/Home/Home'
import Product from './Component/Product/Product'
import Nav from './Component/Navbar/Nav'
import Cart from "./Pages/Cart/Cart"
import { ShopContextProvider } from './Component/Context/ShopContext'

export default function App() {
  return <>
  <ShopContextProvider>
  <Nav/>
  <Routes>
    <Route  path="/" element={<Home/>} />
    <Route path="/product" element={<Product/> } />
    <Route path="/cart" element={<Cart/> } />
  </Routes>
  </ShopContextProvider>
  </>
}

