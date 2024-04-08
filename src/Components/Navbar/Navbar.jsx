import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'


export default function Navbar() {

  const [menu,setMenu]=useState("shop");

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt="Logo" />
        <p>SOOPEFREEE</p>
      </div>
      <ul className='nav-menu'>
      <li onClick={()=>{setMenu('Shop')}}><Link style={{textDecoration:'none'}} to="/">Shop</Link>{menu==="Shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Men")}}><Link style={{textDecoration:'none'}} to="/men">Men</Link>{menu==="Men"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Women")}}><Link style={{textDecoration:'none'}} to="/Women">Women</Link>{menu==="Women"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:'none'}} to="/kids">Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
        
      </ul>
      <div className="nav-login-cart">
        <Link style={{textDecoration:'none'}} to="/Login"><button>Login</button></Link>
        <Link style={{textDecoration:'none'}} to="/Cart"><img src={cart_icon} alt="cart_icon" /></Link>
        <div className="nav-cart-count">0</div>
        </div>
    </div>
  )
}
