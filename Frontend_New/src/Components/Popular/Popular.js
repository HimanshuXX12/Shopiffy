import React, { useEffect,useState,useContext } from 'react'
import './Popular.css'
import data_object from '../Assets/data'
import Item from '../Item/Item'
import axios from 'axios';
import { CartContext } from '../../Context/CartContext';
  function Popular() {
    
  const [recived,inputer]= useState([]);
  const contextValue= useContext(CartContext);
  const {url}=contextValue; 
  const fetcher=async ()=>{
    const res=   await axios.get(`${url}/listproduct`);
    inputer(res.data.items);
    

  }

    useEffect(()=>{
      fetcher();

    },[]);

    const filter_data= recived.filter((item)=>item.special_category=="data"|| item.other_category=="data");
 
    

  return (
    <div className='popular'>
        <h1>POPULAR IN WOMEN</h1>
        <hr/>
        <div className='popular-item'>
           {
                filter_data.map((item)=>(
                    <Item item={item} key={item._id}/>
                ))
            }
        </div>

      
    </div>
  )
}

export default Popular
