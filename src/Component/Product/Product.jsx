import React, { useContext } from 'react';
import "./product.css"
import {HeartStraight, ShoppingCart} from "phosphor-react";
import {ShopContext} from '../../Component/Context/ShopContext'

export default function Product(props) {
  const {id,productName,price,productImg}= props.data;
  const {addToCart}=useContext(ShopContext)
  // console.log(addToCart);
  return <>
        <div className="contain col-md-3">
          <div className='space p-3'>
                <div className="img-contain mb-3">
            <img src={productImg} alt=""  className="card-img-top w-100" />
          </div>
          <div className="card pt-2">
            <h5> {productName}</h5>
            <h6>{price} <a className='ms-2' onClick={()=>addToCart(id)}><ShoppingCart size="25"/></a> <span className='ms-27'><HeartStraight size="25"/></span></h6>
          </div>
          </div>
        </div>
  </>
}
