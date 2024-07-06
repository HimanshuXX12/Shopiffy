import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arror_icon from '../Assets/arrow.png'
import hero_right from '../Assets/hero_image.png'
function Hero() {
  return (
    <div className='hero'>
        <div className='hero-left'>
            <h2>NEW ARRIVALS ONLY</h2>
            <div>
                <div className='hero-hand-icon'>
                    <p>New</p>
                    <img src={hand_icon}/>
                </div>
                <p>Collections</p>
                <p>For Everyone</p>
            </div>
            <div className='hero-latest-btn'>
                <p>Latest Collections</p>
                <img src={arror_icon}/>
            </div>

        </div>
        <div className='hero-right'>
            <img src={hero_right} className='imager'/>

        </div>
      
    </div>
  )
}

export default Hero
