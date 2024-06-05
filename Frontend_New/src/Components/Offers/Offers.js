

import React from 'react'
import './Offers.css'
import exlusive_image from '../Assets/exclusive_image.png'

function Offers() {
  return (
    <div className='offers'>
        <div className='offer-left'>
            <h1>Exclusive</h1>
            <h1>Offers For You</h1>
            <p>ONLY ON  BEST SELLERS PRODUCTS</p>
            <button className='hero-latest-btn' id='main_button'>Check Now</button>
        </div>
        <div className='offer-right  hero-right'>
            <img src={exlusive_image}/>

        </div>

        
    </div>
  )
}

export default Offers
