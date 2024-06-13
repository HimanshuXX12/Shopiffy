import React ,{useContext}from 'react'
import Navbar from '../Components/Navbar/Navbar'
import all_data from '../Components/Assets/all_product.js'
import Item from '../Components/Item/Item.js'
import './CSS/Shop_category.css'
import men_banner from '../Components/Assets/banner_mens.png'
import women_banner from '../Components/Assets/banner_women.png'
import kid_banner from '../Components/Assets/banner_kids.png'
import drop_down from '../Components/Assets/dropdown_icon.png'
import Footer from '../Components/Footer/Footer.js'
import { ShopContext } from '../Context/CartContext.js'

function ShopCategory(props) {
   const filter_data=all_data.filter((value)=>value.category===props.category);
  

  console.log("printing all data",all_data)
 
  return (
    
    <div>
      <Navbar/>
      <div className='banner_image'>
            <img src={props.banner}/>
      </div>
      <div className='shop_category_middle'>

          <span className='text'><strong>Showing 1-12 </strong> out of 36 Products</span>
        
         <div className='drop'>
          <div>Sort by</div>
          <img src={drop_down} className='drop_down_image'/>
         </div>
      </div>
      <div className='shop_category'>
              <div className='popular'>
            <div  className='popular-item'>
                {
                  filter_data.map((item)=>(
                    <Item item={item}/>
                  ))
                }
                
              </div>
              </div>
     </div>
      
      <div className='btn'>

      <button >Explore More </button>

      </div>
      <Footer/>

      
      
    </div>
  )
}

export default ShopCategory
