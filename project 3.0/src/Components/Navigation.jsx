import React from "react";
import { useState } from 'react'
import {BrowserRouter,Link} from "react-router-dom";
import { useCart } from "./CartContext";

function NavigationBar(){
    const [show, setToggle] = useState(false);
    const { cart } = useCart();
 
  function toggle(){
    setToggle(!show)
  }
  const totalItems = cart.reduce((total, item) => total + (item.quantity || 1), 0);
    return(
        <>
        <nav className=" nav_bar container-fluid navbar navbar-expand-md border-2 border-bottom border-warning  pb-3 d-flex gap-3 pb-sm-3 pb-md-0 justify-content-md-center">
    <div className='order-sm-1 order-2'>
      <Link to="/" className="navbar-brand">
        <img src="/images/Pintola_Logo_PNG_400x.avif" alt="Pintola Logo" className='logo'/>
      </Link>
    </div>
      
      <button type="button" className='d-block d-sm-block d-md-none rounded' data-bs-toggle="offcanvas" data-bs-target="#list">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="order-sm-2 order-1 offcanvas offcanvas-start" id="list">
          <p className='offcanvas-title d-md-none'>
            <button className='btn-close d-md-none ms-3 mt-3' data-bs-dismiss="offcanvas"></button>
          </p>
        <ul className="navbar-nav d-flex gap-3 offcanvas-body">
          <li className="nav-item hover_link d-flex" >
            <a href="" className="nav-link nav-link1 ms-md-2 m-0" > Store</a>

            <span style={{marginLeft:"310px",lineHeight:"40px",width:"10px",display:"inline-block"}} className='m-md-0' onClick={toggle} >
              <i class="fa-solid fa-greater-than"></i>
            </span>

            <ul className= {`d-md-flex gap-4 border justify-content-center d-flex flex-wrap flex-md-nowrap flex-basis-2 ${ show ? "show1" :""}` } id="items" >
            <li>
              <figure>
                <a href="#">
                  <img src="/images/image1.webp"></img>
                  <figcaption>All product</figcaption>
                </a>
              </figure>
            </li>
            <li>
              <figure>
                <a href="#">
                  <img src="/images/image2.webp"></img>
                  <figcaption>Natural Peanut Butter</figcaption>
                </a>
              </figure>
            </li>
            <li>
              <figure>
                <a href="#">
                  <img src="/images/image3.webp"></img>
                  <figcaption>Premium Nut Butters</figcaption>
              </a>
              </figure>
            </li>
            <li>
              <figure>
                <a href="#">
                  <img src="/images/image4.webp"></img>
                  <figcaption>High protein & Performance Butter</figcaption>
                </a>
              </figure>
            </li>
            <li>
              <figure>
                <a href="#">
                  <img src="/images/image5.webp"></img>
                  <figcaption>Certified Organic Product</figcaption>
                </a>
              </figure>
            </li>
            <li>
              <figure>
              <a href="#">
                <img src="/images/image6.webp"></img>
                <figcaption>Nuts & seeds</figcaption>
              </a>  
              </figure>
            </li>
              <li>
                <figure>
                <a href="#">
                  <img src="/images/image7.webp"></img>
                  <figcaption>Rice Cakes</figcaption>
                </a>
              </figure>
              </li>
              <li>
                <figure>
                <a href="#">
                  <img src="/images/image8.webp"></img>
                  <figcaption>High Protin Brackfast Cereals</figcaption>
              </a>
              </figure>
              </li>
          </ul>
          </li>
          <li className={`nav-item ${ show ? "show2" :""}`}>
            <Link to="/AboutUs" className="nav-link">About Us</Link>
          </li>
          <li className="nav-item">
            <Link to="/whyPintola" className="nav-link">Why Pintola?</Link>
          </li>
          <li className="nav-item">
            <Link to="/Recipes" className="nav-link">Recipes</Link>
          </li>
          <li className="nav-item">
            <Link to="/Contact" className="nav-link">Contact Us</Link>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">Track Your Order</a>
          </li>
        </ul>
      </div>
      
    <div className='nav_icon me-5 d-flex order-3'>
      <Link to="/"><i class="fa-solid fa-user"></i></Link>
      <Link to="/"><i class="fa-solid fa-magnifying-glass"></i></Link>
      <Link to="/cart"><i class="fa-solid fa-cart-shopping"></i>
      {totalItems > 0 && (
              <span className="bg-danger bedge1 mt-1" style={{ width: "16px", height: "16px", display: "block",borderRadius:"50%",textAlign:"center",lineHeight:"15px",color:"white",fontSize:"12px",position:"absolute",right:"60px",top:"30px"}}>
                {totalItems}
              </span>
            )}
            </Link>
      </div> 
    </nav>  
        </>
    )
}

export default NavigationBar