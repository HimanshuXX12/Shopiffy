import React, { useState ,useContext, useEffect} from 'react'
import { Link } from 'react-router-dom';
import { CartContext} from '../Context/CartContext';
import { useParams } from 'react-router-dom'
import all_product from '../Components/Assets/all_product';
import Navbar from '../Components/Navbar/Navbar';
import './CSS/Product.css'
import star from '../Components/Assets/star_icon.png'
import star_dull from '../Components/Assets/star_dull_icon.png'
import Description from '../Components/Description/Description';
import Footer from '../Components/Footer/Footer';
import Related from '../Components/Related_Products/Related';
import Cart from './Cart';


function Product() {
  const productId= useParams();
   const contextValue= useContext(CartContext);
    useEffect(()=>{
      if(!localStorage.getItem('himanshuCart'))
        {
            localStorage.setItem('himanshuCart',[]);
        }
        else
        {
           localStorage.setItem('himanshuCart',JSON.stringify(contextValue.items));
        }

        console.log(JSON.parse(localStorage.getItem('himanshuCart')));
        

    },[])

    
    
    const {items,setter,remove_from_cart,add_to_cart}= contextValue;
  
    
     const product= all_product.filter((item)=>item.id==productId.product_id);
     
      console.log('Printing items at Product.js',contextValue);
   
       
       

       

      
  return (
    <div>
      <Navbar/>
      <div className='product'>
        <div className='product-left'>
          <div className='smaller-images'>
             <img src={product[0].image}/>
             <img src={product[0].image}/>
             <img src={product[0].image}/>
             <img src={product[0].image}/>
          </div>
          <div className='bigger-image'>
            <img src={product[0].image}/>
          </div>
        </div>
        <div className='product-right'>
          <h1>{product[0].name}</h1>
          <div className='main-star-rating'>
             <div>
                <img src={star}/>
                <img src={star}/>
                <img src={star}/>
                <img src={star}/>
                <img src={star_dull}/>
             </div>
             <div>
               (122)
             </div>
          </div>
          <div className='pricing'>
            <div className='item-prices-old'>${product[0].old_price}</div>
            <div className='item-prices-new'>${product[0].new_price}</div>
          </div>
          <div className='description'>
             <p>A Light Weight usually knitted pullover shirt close-fitting with a round neckline and shortsleeve </p>
          </div>

          <div>
            <div><strong> Select Sizes</strong></div>
            <div className='sizes-collection'>
               <div>S</div>
               <div>M</div>
               <div>XL</div>
               <div>2XL</div>
            </div>
          </div>
          <Link to='/cart'><button  onClick={()=>{add_to_cart(product[0].id)}} className='add_to_cart'>ADD TO CART</button></Link>
          <div>
            <strong>Category : </strong>Women ,T-Shirt,Crop-Top
          </div>
          <div>
            <strong>Tags : </strong> Modern Latest
          </div>



        </div>

      </div>
      <Description/>
      <Related/>
      <Footer/>
         
       
    </div>
  )
}

export  default    Product


