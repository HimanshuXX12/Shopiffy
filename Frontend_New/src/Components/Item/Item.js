import React from 'react'
import './Item.css'

function Item(props) {
  return (
    <div className='item'>
        <img src={props.item.image}/>
        <p>{props.item.name}</p>
        <div className='item-prices'>
            <div className='item-prices-new'>${props.item.new_price}</div>
            <div className='item-prices-old'>${props.item.old_price}</div>
        </div>

      
    </div>
  )
}

export default Item
