import React, { createContext, useContext, useEffect, useState } from 'react'
import data_new_local from '../Assets/new_collections'
import Item from '../Item/Item'
import axios from 'axios';
import { CartContext } from '../../Context/CartContext';

  function NewCollection() {
    const [recived,inputer]= useState([]);
    const contextValue= useContext(CartContext);
     const {url}=contextValue;
    const fetcher=async ()=>{
      const res=  await  axios.get(`${url}/listproduct`);
      inputer(res.data.items);
      

    }

  useEffect(()=>{
    fetcher();

  },[])

   const filter_data= recived.filter((item)=>item.special_category=="new");

  return (
    <div className='popular'>
        <h1>NEW COLLECTIONS</h1>
        <hr/>
        <div className='popular-item'>
           {
                filter_data.map((item)=>(
                    <Item item={item} />
                ))
            }
        </div>


      
    </div>
  )
}

export default NewCollection
