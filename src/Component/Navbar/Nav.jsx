import React from 'react'
import {Link} from "react-router-dom";
import {HeartStraight, ShoppingCart} from "phosphor-react";
import "./nav.css"
import florid from "../../Images/florid-branch.png"


export default function Nav() {
  return <>
  <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid ">
    <a className="navbar-brand" href="#">gözəl
    <img src= {florid} alt=""  className='nav-img'/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse  flex-grow-0" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
          <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="product">Products</Link>
        </li>
          <li className="nav-item">
          <Link className="nav-link active" aria-current="services" to="/">Services</Link>
        </li>
                  <li className="nav-item">
          <Link className="nav-link active" aria-current="heart" to="/"><HeartStraight size="25"/></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/cart" ><ShoppingCart size="32"/></Link>
        </li>
      </ul>
    </div>
  </div>
</nav></>
}
