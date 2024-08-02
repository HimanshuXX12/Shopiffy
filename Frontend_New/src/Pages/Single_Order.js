import React, { useEffect, useState,useContext } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import Navbar from '../Components/Navbar/Navbar';
import './CSS/Single_order.css'
import Footer from '../Components/Footer/Footer';
import logo from '../Components/Assets/logo.png'
import { CartContext } from '../Context/CartContext';
function Single_Order() {
    let value= useParams();
    const [feild,setfield]= useState(false);
    let  ContextValue= useContext(CartContext);
    const {url}=ContextValue;
   let  id=value.order_id;
    const [order_detail, order_detailsSet]= useState([]);
    const [all_Product,inputer]= useState([]);
   const Fetcher= async ()=>{
      const res=await axios.post(`${url}/order_detail`,{
        token:localStorage.getItem("token"),
        id:id
      })
      console.log(res.data.order_detail);
      order_detailsSet(res.data.order_detail);
      
      const all_res= await axios.get(`${url}/listproduct`);
       inputer(all_res.data.items);
       
      

   }

   const dater=  (timestamp)=>{
    
         const date= new Date(timestamp);
         
         return date.getDate();
          
      }
  
    
   const printer= (timestamp)=>{
    const date= new Date(timestamp);
     date= new Date(date.getTime()+2*24*60*60*1000);
    const option={year:'numeric',month:'long',day:'numeric'};
    const formatedDate=new Intl.DateTimeFormat('en-US',option).format(date);
    return formatedDate;
  }
   
   const reacter= ()=>{
      if(feild===false)
      {
        setfield(true);
      }
      else{
        setfield(false);
      }
   }
  
   useEffect(()=>{
     Fetcher()
     
   },[]);

    console.log("order.details",order_detail);
   
  return (
    <div className='single_order_page'>
      <Navbar/>
      <div className='order_detail_section'>
        <div className='inner-left-section'>
            <div className='inner-header'>
                <p><srong>Products</srong></p>
                <p><srong>Category</srong></p>
                <p><srong>Price</srong></p>
                <p><srong>Quantity</srong></p>
                <p><strong>Total</strong></p>
                
            </div>
            <div className='inner-main'>
              {
                  all_Product.map((item)=>{
                      if(order_detail.items[item._id]>0)
                      {
                        return (
                          <div className=''>
                            <div className='cart-list-main'>
                              <img src={item.image} className='imaging'/>
                              <p className='item-naam'>{item.name}</p>
                              <p className='daam'>${item.new_price}</p>
                              <p className='pricer'>{order_detail.items[item._id]}</p>
                              <p className=''>${order_detail.items[item._id]*item.new_price}</p>
                            </div>

                            <hr className=''/>
                          </div>
                        )
                      }
                  })
              }
            </div>
        </div>
        <div className='inner-right-section'>
           <div className='logo'><img src={logo}/></div>
          
           <hr className='liner'/>
          
           <div className='right-inner-main'>
              <div className='small-items'>
                 <p>Total items</p>
                 <p>{order_detail.Quantity}</p>
              </div>

              <div className='small-items'>
                  <p>Total Price</p>
                  <p>${order_detail.Price}</p>
              </div>
            
              {
                feild?<div>
                  <div className='stater-box'>
                   <p>Status</p>
                   <p>{order_detail.status}</p>
                </div>
                <div className='stater-box'>
                   <p>Estimated Time</p>
                   <p>Two Days</p>
                </div>
                </div>
                :  <div className='btn-box'> 
         
                <button onClick={reacter} className='add_to_cart' id="adder">Check Status</button></div>
              }
           </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Single_Order
