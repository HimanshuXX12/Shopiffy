import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

function Item(props) {
 
 
  return (
    <Link to={`/${props.item._id}`} className='link' onClick={window.scrollTo(0,0)}>
      <div className='item'>
          <img src={props.item.image}/>
          <p>{props.item.name}</p>
          <div className='item-prices'>
              <div className='item-prices-new'>${props.item.new_price}</div>
              <div className='item-prices-old'>${props.item.old_price}</div>
          </div>

        
      </div>
    </Link>
  )
}

export default Item
