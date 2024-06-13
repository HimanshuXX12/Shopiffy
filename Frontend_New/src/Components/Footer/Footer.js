import React from 'react'
import './Footer.css'
import main_icon from '../Assets/logo.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
import instagragm_icon from '../Assets/instagram_icon.png'
import  pinsteller_icon from '../Assets/pintester_icon.png'

function Footer() {
  return (
    <div className='footer'>

        <div className='footer_header'>
            <img src={main_icon}/>
            <h1>SHOPPIFY</h1>
        </div>
       
            <ul className='footer_main'>
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        
        <div className='footer_icons'>
            <img src={whatsapp_icon}/>
            <img src={pinsteller_icon}/>
            <img src={instagragm_icon}/>
           
        </div>

        <div className='footer_copyright'>
            Copyright @ 2022 -All Right Reserved

        </div>

      
    </div>
  )
}

export default Footer
