import React from 'react'
import data_new from '../Assets/new_collections'
import Item from '../Item/Item'

function NewCollection() {
  return (
    <div className='popular'>
        <h1>NEW COLLECTIONS</h1>
        <hr/>
        <div className='popular-item'>
           {
                data_new.map((item)=>(
                    <Item item={item}/>
                ))
            }
        </div>


      
    </div>
  )
}

export default NewCollection
