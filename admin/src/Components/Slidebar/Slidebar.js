import React from 'react'
import product_list_icon from '../Assets/Product_list_icon.svg'
import add_product_icon from '../Assets/Product_Cart.svg'
import './Slidebar.css'
import { Link } from 'react-router-dom'
function Slidebar() {
  return (
    <div className ='slidebar'>
     
       <div className='inner_slider'>
         <img src={add_product_icon}/>
         <Link to='/listproduct' className='link'>
         <p className='text' >Product List</p>
         </Link>
      </div>
     
      <div className='inner_slider'>
         <img src={product_list_icon}/>
      <Link to='/addproduct' className='link'>
         <p className='text'>Add Product</p>
      </Link>
      </div>
      
      
    </div>
  )
}

export default Slidebar
