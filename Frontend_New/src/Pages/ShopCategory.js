import React ,{useContext, useEffect,useState}from 'react'
import Navbar from '../Components/Navbar/Navbar'
import all_data_local from '../Components/Assets/all_product.js'
import Item from '../Components/Item/Item.js'
import './CSS/Shop_category.css'
import men_banner from '../Components/Assets/banner_mens.png'
import women_banner from '../Components/Assets/banner_women.png'
import kid_banner from '../Components/Assets/banner_kids.png'
import drop_down from '../Components/Assets/dropdown_icon.png'
import Footer from '../Components/Footer/Footer.js'
import { CartContext } from '../Context/CartContext.js'
import axios from 'axios'

 function ShopCategory(props) {
   
   const [recived,inputer]= useState([]);
   
   const ContextValue= useContext(CartContext);
   const {url}= ContextValue;
  const fetcher=async ()=>{
    const res=   await axios.get(`${url}/listproduct`);
    inputer(res.data.items);
    

  }
  const [value,setter]= useState(false);
    let intital=null;
 
 

    useEffect(()=>{
      fetcher();
    },[]);
    console.log("printing shop category",recived);
   
    const filter_data= recived.filter((value)=>value.category===props.category);
    const non_category= recived.filter((value)=>value.category!=props.category);
   
    const changer=async ()=>{
        if(value===false)
        {
           setter(true);
        }
        else
        {
          setter(false);
        }
    }
 
 
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
      
      <div className=''>
      {
        
        value?
         <div>
            <div className='popular'>
        <div  className='popular-item'>
            {
              non_category.map((item)=>(
                <Item item={item}/>
              ))
            }
            
          </div>
          </div>
          <div className='btn'>
             <button onClick={()=>changer()} >Show Less </button>
         </div>
         </div>
           :
         <div className='btn'>
             <button onClick={()=>changer()} >Explore More </button>
         </div>
      }
     

      </div>
      <Footer/>

      
      
    </div>
  )
}

export default ShopCategory
