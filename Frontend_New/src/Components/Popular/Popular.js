import React from 'react'
import './Popular.css'
import data from '../Assets/data'
import Item from '../Item/Item'
function popular() {
    console.log("comming",data);
  return (
    <div className='popular'>
        <h1>POPULAR IN WOMEN</h1>
        <hr/>
        <div className='popular-item'>
           {
                data.map((item)=>(
                    <Item item={item}/>
                ))
            }
        </div>

      
    </div>
  )
}

export default popular
