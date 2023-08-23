import React from 'react'
import { products} from '../../ProuductsItem'
import Product from '../../Component/Product/Product'
import Banner from '../../Component/Banner/Banner'
import About from '../../Component/About/About'
import Foot from '../../Component/Foot/Foot'
import "./home.css"
export default function Home() {
  return <>
  <div className="head">
    <Banner/>
  </div>
  <div className="shop my-5 text-center">
    <h1 >My SHOP</h1>
    <div className='shop-head'></div>
    <div className="container mt-3">
          <div className=" row proudacts">
        {products.map((product)=>(
            <Product data={product} />
        ))}
    </div>
    </div>
  </div>
  <div className="container mt-5">
    <div className="row">
      <About/>
    </div>
  </div>
  <div className="footer">
    <Foot/>
  </div>
  </>
}
