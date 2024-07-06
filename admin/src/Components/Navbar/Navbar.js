import React from 'react'

import nav_logo from '../Assets/nav-logo.svg'
import nav_profile from '../Assets/nav-profile.svg' 
import './Navbar.css'
function Navbar() {
  return (
    <div className='navbar'>
     <img src={nav_logo}/>
     <img src={nav_profile}/>
    </div>
  )
}

export default Navbar
