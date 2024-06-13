import React from 'react'
import './Related.css'
import data from '../Assets/data.js'
import Item from '../Item/Item.js'
function Related() {
  return (
    <div>
         <div className='popular'>
        <h1>RELATED PRDUCTS</h1>
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

      
    </div>
  )
}

export default Related
