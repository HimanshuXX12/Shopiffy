import React, { useState,useContext } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_image from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';
function Navbar() {
    const [menu,setmenu]=useState('shop');
    const ContextValue=useContext(CartContext);
    console.log(localStorage.getItem('token'));
    let total=ContextValue.total_quantity();

    const logout= async ()=>{
         localStorage.removeItem('token');
         window.location.replace('/');
    }
  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo}/>
            <p>SHOPIFFY</p>
        </div>
        <div className='nav-menu'>
            <ul className='lists'>
                <li onClick={()=>setmenu('shop')}><Link to='/'className='link'>Shop</Link>{menu=='shop'?<hr/>:<></>}</li>
                <li onClick={()=>setmenu('Mens')}><Link to="/men"className='link'>Men</Link>{menu=='Mens'?<hr/>:<></>}</li>
                <li onClick={()=>setmenu('Women')}><Link to='/women'className='link'>Women</Link>{menu=='Women'?<hr/>:<></>}</li>
                <li onClick={()=>setmenu('Kids')}><Link to='/kid'className='link'>Kids</Link>{menu=='Kids'?<hr/>:<></>}</li>
                <li onClick={()=>setmenu('orders')}><Link to='/orders'className='link'>Orders</Link>{menu=='orders'?<hr/>:<></>}</li>
            </ul>
        </div>
        <div className='nav-icon'>
           {localStorage.getItem('token')?<button onClick={logout}>Logout</button>:
           <Link className='link' to='/login'><button>Login</button></Link>}
           <Link to='/cart' className='link'>
            <img src={cart_image} className='cart_image'/>
           </Link>
            <div className='counter'>{total}</div>
        </div>
      
      
    </div>
  )
}

export default Navbar
