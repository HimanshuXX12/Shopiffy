import React,{useEffect,useState,useContext} from 'react'
import './Related.css'
import data from '../Assets/data.js'
import Item from '../Item/Item.js'
import axios from 'axios'
import { CartContext } from '../../Context/CartContext.js'
function Related() {

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
    <div>
         <div className='popular'>
        <h1>RELATED PRDUCTS</h1>
        <hr/>
        <div className='popular-item'>
           {
                filter_data.map((item)=>(
                    <Item item={item}/>
                ))
            }
        </div>

      
    </div>
  )

      
    </div>
  )
}

export default Related
