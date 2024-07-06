import React, { useState } from 'react'
import './Addproduct.css'
import axios from 'axios'
import Navbar from '../Navbar/Navbar'
import Slidebar from '../Slidebar/Slidebar'
import upload from '../Assets/upload_area.svg'
function Addproduct() {
    const [item,setter]=useState(false);
    const [product_deatils,inputer]=useState({
        name:"",
        image:"",
        // category:"women",
        new_price:"",
        old_price:""
    })

    const imageHandler=(e)=>{
         setter(e.target.files[0]);
    }

    const product_Handler=(e)=>{
        inputer({...product_deatils,[e.target.name]:e.target.value})
    }

    const addhandler=async ()=>{
       console.log(product_deatils);
        const url="http://localhost:300/upload";
        const formData= new FormData();
        formData.append('product',item);
        console.log(formData);
        const res=await axios.post(url,formData);
         
        product_deatils.image=res.data.image_url;
        

        const new_responce=await axios.post('http://localhost:300/new_collection',product_deatils);
         if(new_responce.data.sucess)
            {
                 alert('Product Added');
            }
            else{
                 alert('Failed to add product');
            }
    }
  return (

    <div className='addproduct'>
            <div className='addproduct-itemfield'>
                <p>Product Title</p>
                <input name='name'  className='input_first' placeholder='Type Here' type='text' onChange={product_Handler} value={product_deatils.name}/>
            </div>
            <div className='smaller'>
                <div className='addproduct-itemfield'>
                    <p>Price</p>
                    <input name='old_price'  className='input' placeholder='Type Here' type='number' onChange={product_Handler} value={product_deatils.old_price}/>
                </div>
                <div className='addproduct-itemfield'>
                    <p> Offer Price</p>
                    <input name='new_price' onChange={product_Handler}   placeholder='Type Here' type='number' className='input'/>
                </div>
            </div>
            <p className='addproduct-itemfield' id='category-text'>Product Category</p>
            {/* <select name='category' value={product_deatils.category} onChange={product_Handler} className='addproduct-itemfield fielding' >
                <option value='women'>Women</option>
                <option value='men'>Men</option>
                <option value='kid'>kid</option>
            </select> */}
            <label htmlFor='file-input' className='filler'>
                <img src={item?URL.createObjectURL(item):upload}/>
            </label>
            <input type='file' onChange={imageHandler} className='file-upload-button' id='file-input' hidden/>
             <button onClick={addhandler} className='btn'>ADD</button>
    </div>
  )
}

export default Addproduct
