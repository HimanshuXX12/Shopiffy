import React, { useEffect, useState,useContext } from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import './CSS/Order.css'
import axios from 'axios'
import crroser from '../Components/Assets/cart_cross_icon.png'
import { Link } from 'react-router-dom'
import { CartContext } from '../Context/CartContext'
function Orders() {

    const [orders,setter]= useState([]);
    const [timer,inputer]= useState({
        year:0,
        mm:0,
        dd:0
    });
    let  ContextValue= useContext(CartContext);
    const {url}= ContextValue;
   
      useEffect(()=>{
          if(!localStorage.getItem("token"))
          {
            alert('Login First');
            window.location.replace("/login");
            
          }
          else{
            Fetcher();
          }
      },[])
    const remover= async (orderId)=>{
       const res= await axios.post(`${url}/delete-order`,{
          orderId:orderId
        })

        if(res.data.sucess)
        {
          alert("Order Deleted Sucessfully");
          window.location.reload();
        }
        else{
           alert("Failled to delete Your Order");
        }
    }

  const Fetcher= async ()=>{
      const res=await axios.post(`${url}/order_list`,{
        token:localStorage.getItem("token")
     })

   

     setter(res.data.orders);
  
  }

//   const dater=  (timestamp)=>{
    
//      const date= new Date(timestamp);
//      return date.getDate();
      
//   }

//   const monther=  (timestamp)=>{
//     const date= new Date(timestamp);
//     return date.getMonth();
     
//  }

//  const yearer=  (timestamp)=>{
//   const date=new  Date(timestamp);
//   return date.getFullYear();
   
// }

 const printer= (timestamp)=>{
   const date= new Date(timestamp);
   const option={year:'numeric',month:'long',day:'numeric'};
   const formatedDate=new Intl.DateTimeFormat('en-US',option).format(date);
   return formatedDate;
 }

  useEffect(()=>{
      Fetcher()
    },[])
    console.log("orders recived",orders);
  
  
  return (
    <div className='orders'>
      <Navbar/>
      <div className='order_list'>
        <div className='order_upper'>
           <p><strong>Order ID</strong></p>
           <p><strong>Mobile</strong></p>
           <p><strong>Address</strong></p>
           <p><strong>Amount</strong></p>
           <p><strong>Date</strong></p>
           <p><strong>Delete Order</strong></p>
           
        </div>
        <hr className='underline'/>
        <div className='order-main'>
          {
            orders.map((order)=>{
               return (
                 <div>
                    <div className='order-receiver'>
                    <Link to={`/order/${order._id}`} className='linker'><p className='order_id'>{order._id}</p></Link>
                    <p>{order.Mobile}</p>
                    <p id="addresser">{order.Address}</p>
                    <p>${order.Price}</p>
                    {/* <p>{`${dater(order.createdAt)}-${monther(order.createdAt)}-${yearer(order.createdAt)}`}</p> */}
                     <p>{printer(order.createdAt)}</p>
                     <img className='remover' src={crroser} onClick={()=>remover(order._id)}/>
                 </div>
                 <hr className='underline'/>
                 </div>
                 
               )
            })
          }
        </div>
        
      </div>

     
      
    </div>
  )
}

export default Orders
