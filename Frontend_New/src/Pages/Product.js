import React, { useState ,useContext, useEffect} from 'react'
import { Link } from 'react-router-dom';
import { CartContext} from '../Context/CartContext';
import { useParams } from 'react-router-dom'
import all_product from '../Components/Assets/all_product';
import Navbar from '../Components/Navbar/Navbar';
import './CSS/Product.css'
import axios from 'axios';
import star from '../Components/Assets/star_icon.png'
import star_dull from '../Components/Assets/star_dull_icon.png'
import Description from '../Components/Description/Description';
import Footer from '../Components/Footer/Footer';
import Related from '../Components/Related_Products/Related';
import Cart from './Cart';




function Product() 
{
  const [recived,inputer]= useState([]);
     
  const fetcher=async  ()=>{
    const res=   await axios.get('http://localhost:300/listproduct');
    inputer(res.data.items);
    

  }

    useEffect(()=>{
      fetcher();

    },[]);
 
    console.log('product recieved',recived);
     const productId= useParams();
     
     const product= recived.filter((item)=>(item._id)===(productId.product_id));

     console.log('product',product);
  
   const contextValue= useContext(CartContext);
    
    
    const {items,setter,remove_from_cart,add_to_cart}= contextValue;
  
      
  return (
    <div>
       {
          product.map((value)=>(
            <div>
                    <Navbar/>
            <div className='product'>
              <div className='product-left'>
                <div className='smaller-images'>
                  <img src={value.image}/>
                  <img src={value.image}/>
                  <img src={value.image}/>
                  <img src={value.image}/>
                </div>
                <div className='bigger-image'>
                  <img src={value.image}/>
                </div>
              </div>
              <div className='product-right'>
                <h1>{value.name}</h1>
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
                  <div className='item-prices-old'>${value.old_price}</div>
                  <div className='item-prices-new'>${value.new_price}</div>
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
                
                <Link to='/cart'><button  onClick={()=>{add_to_cart(value._id)}} className='add_to_cart' id='adder'  >ADD TO CART</button></Link>
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
          ))
       }

     
      
        
       
    </div>
  )
}




export  default    Product


