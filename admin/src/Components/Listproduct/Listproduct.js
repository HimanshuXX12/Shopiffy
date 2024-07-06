import React, { useState,useEffect } from 'react'
import './Listproduct.css'
import cross from '../Assets/cross_icon.png'
import axios from 'axios'
function Listproduct() {
    const [recieved_items,inputer]= useState([]);
    const fetcher= async ()=>{
         const res= await axios.get('http://localhost:300/listproduct');
         inputer(res.data.items);
         console.log(res.data.items);
        

    }
  useEffect(()=>{
    fetcher();
    

  },[])

  const remover=async (id)=>{
    console.log(id)
       const user_info={
        id:id
      }
      const res= await axios.post('http://localhost:300/deleteProduct',user_info);
      fetcher();
  }
    
  return (
    <div className='product_list'>
      <h1>All Product</h1>
      <div className='header_name'>
        <p><strong>Products</strong></p>
        <p><strong>Title</strong></p>
        <p><strong>Old Price</strong></p>
        <p><strong>New price</strong></p>
        <p><strong>Category</strong></p>
        <p><strong>Remove</strong></p>

      </div>
      <div className='main_table'>
        {
           recieved_items.map((item)=>(
              <>
               <hr/>
                <div className='single_item'>
                  <div><img src={item.image} className='imager'/></div>
                  <div>{item.name}</div>
                  <div>{item.old_price}</div>
                  <div>{item.new_price}</div>
                  <div>{item.category}</div>
                  <div><img src={cross}  onClick={()=>remover(item._id)} className='crosser'/></div>

                </div>
            
              
              </>
           ))
        }
      </div>
      <hr className='horizontal'/>
      
    </div>
  )
}

export default Listproduct
