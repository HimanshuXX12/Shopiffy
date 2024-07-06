import {React,useContext,useState,useEffect} from 'react'
import Product from './Product'
import './CSS/Cart.css';
import axios from 'axios';
import { CartContext } from '../Context/CartContext';
import Shop from './Shop';
import all_product from '../Components/Assets/all_product';
import remove_icon from '../Components/Assets/cart_cross_icon.png'
import Navbar from '../Components/Navbar/Navbar';
import { Link } from 'react-router-dom';
function Cart() {
   let  updatted_cart;
   let  ContextValue= useContext(CartContext);
   let total=ContextValue.total_quantity();
   const [all_product,inputer]= useState([]);
    
     const {url}= ContextValue;
   const Fetcher= async ()=>{
     const res=   await axios.get(`${url}/listproduct`);
     inputer(res.data.items);
   }
 useEffect(()=>{
     Fetcher();
 
 },[]);
  return (
     <>
     <Navbar/>
    
    <div className='cart'>
      <div className='cart-header'>
        <p>Products</p>
        <p>Category</p>
        <p className='cart-price'>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr/>
       <div className='cart-list'>
       {
        all_product.map((item)=>{
           if(ContextValue.items[item._id]>0)
            {
              return (
                 <div>
                    <div className='cart-item'>
                  <img src={item.image} className='item-image'/>
                  <Link to={`/${item._id}`}  className='link'>
                    <p className='item-naam'>{item.name} </p>
                  </Link>
                  <p>${item.new_price}</p>
                  <button className='cart-button' onClick={()=>ContextValue.add_to_cart(item._id)}>{ContextValue.items[item._id]}</button>
                  <p>${item.new_price*ContextValue.items[item._id]}</p>
                  <img className='remover' src={remove_icon} onClick={()=>ContextValue.remove_from_cart(item._id)}/>
               
                   
                </div>
                <hr/>
                 </div>
              )
            }
        })
      }


       </div>

       <div className='cart-tail'>
          <div className='cart-tail-left'>
              <h1>Cart Totals</h1>
              <div>
                <div className='inner-item'>
                  <p>Total Items</p>
                  <p>{total}</p>
                </div>
                <hr className='underline'/>
                <div className='inner-item'>
                  <p>Shipping Free</p>
                  <p>Free</p>
                </div>
                <hr className='underline'/>
                <div className='inner-item'>
                  <p><strong>Total</strong></p>
                  <p><strong>${ContextValue.total_price()}</strong></p>
                </div>
              </div>

              <button className='add_to_cart'>PROCEED TO CHECKOUT</button>

          </div>
          <div className='cart-tail-right'>
            <p>If You have a Promo Code Please Paste it here </p>
            
              <div className='promo-holder'>
              <input placeholder='Promo Code' className='promo'/>
              <button className='promo-button'>Submit</button>
              
            </div>
          </div>
         
       </div>

      
    </div>

    </>
  )
}

export default Cart
