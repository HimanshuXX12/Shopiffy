import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_image from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom';
function Navbar() {
    const [menu,setmenu]=useState('shop');
  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo}/>
            <p>SHOPIFFY</p>
        </div>
        <div className='nav-menu'>
            <ul className='lists'>
                <li onClick={()=>setmenu('shop')}><Link to='/'className='link'>Shop</Link>{menu=='shop'?<hr/>:<></>}</li>
                <li onClick={()=>setmenu('Mens')}><Link to="/mens"className='link'>Men</Link>{menu=='Mens'?<hr/>:<></>}</li>
                <li onClick={()=>setmenu('Women')}><Link to='/womens'className='link'>Women</Link>{menu=='Women'?<hr/>:<></>}</li>
                <li onClick={()=>setmenu('Kids')}><Link to='/kids'className='link'>Kids</Link>{menu=='Kids'?<hr/>:<></>}</li>
            </ul>
        </div>
        <div className='nav-icon'>
           <Link className='link' to='/login'><button>Login</button></Link>
           <Link to='/cart' className='link'>
            <img src={cart_image} className='cart_image'/>
           </Link>
            <div className='counter'>0</div>
        </div>
      
      
    </div>
  )
}

export default Navbar
