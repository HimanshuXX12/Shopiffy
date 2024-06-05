import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Hero from '../Components/Hero/Hero.js'
import Popular from '../Components/Popular/Popular'
import Offers from '../Components/Offers/Offers.js'
import NewCollection from '../Components/NewCollection/NewCollection.js'
import Newsletter from '../Components/Newsletter/Newsletter.js'
import Footer from '../Components/Footer/Footer.js'

function Shop() {
  return (
    <div>
    <Navbar/>
      <Hero/>
     <Popular/>
     <Offers/>
     <NewCollection/>
     <Newsletter/>
   <Footer/>
    </div>
  )
}

export default Shop
