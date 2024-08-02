import React, { useState ,useContext,useEffect} from 'react'
import { CartContext } from '../Context/CartContext';
import axios from 'axios';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import logo from '../Components/Assets/logo.png'
import './CSS/order_placed.css'
import { Link } from 'react-router-dom';
import remove_icon from '../Components/Assets/cart_cross_icon.png'
function Place_order() {
   

    let  ContextValue= useContext(CartContext);
    const {items,url,recieved}=ContextValue;
    console.log("recieved in order_place",recieved);
    const [value,setter]=useState({
        Address:"",
        Mobile:0,
        status:"Placed",
        Mode:"cash",
        full_name:"",
        Pincode:0,
        Country:"India"
    })

    


    const changeHandler=async (e)=>{
        setter({...value,[e.target.name]:e.target.value});

    }


    useEffect(()=>{
         if(ContextValue.total_quantity()===0)
         {
            alert("Cart Empty");
            window.location.replace('/');
         }

         const element= document.getElementsByClassName("input");
         for(let i=0;i<element.length;i++)
         {
            element[i].addEventListener("blur",async function(){
                if(element[i].value)
                {
                    element[i].classList.add("filled");
                }
                else {
                   element[i].classList.remove("filled");
                }
            })
         }

         const elementer= document.getElementsByClassName("inputer");

         for(let i=0;i<elementer.length;i++)
         {
             elementer[i].addEventListener("blur",async function(){
                 if(elementer[i].value)
                 {
                    elementer[i].classList.add("filled");
                 }
                 else{
                    elementer[i].classList.remove("filled");
                 }
             })
         }
         
    },[]);

   
    const [checkboxValue,SetcheckboxValue]=useState(false);
    const [counter,changer]= useState(false);
    const checkboxChecker= async ()=>{
          if(checkboxValue===false)
          {
              SetcheckboxValue(true);
          }
          else
          {
             SetcheckboxValue(false);
          }
    }

    const clicker= async ()=>{
        console.log(checkboxValue);
          if(checkboxValue===true)
          {
            const res= await axios.post(`${url}/orders`,{
                Address:value.Address,
                Mobile:value.Mobile,
                Price:ContextValue.total_price(),
                Quantity:ContextValue.total_quantity(),
                status:value.status,
                items:items,
                Mode:value.Mode,
                token:localStorage.getItem("token"),
                full_name:value.full_name,
                Pincode:value.Pincode,
                Country:value.Country
              })
    
              console.log(res);
    
              alert(res.data.error);
              if(res.data.sucess)
              {
                  const res=await axios.post( `${url}/delete_cart`,{
                    token:localStorage.getItem("token")
                })
                console.log("items ",items);
                window.location.replace("/orders");
               
              }
          }
          else
          {
              alert("Tick the Checkbox for proceed");
          }

          
          
        }
        
  // const roatter=  ()=>{
  //    window.scroll(0,0);
  // }
  return (
    <div className='order-place-page' >
        <Navbar className="navo"/>
        <div className='order_placed'>
            <div className='left-container'>
                <div className='left-inner-container'>
                    <div className='nav-logo' id='logger'>
                        <img src={logo}/>
                        {/* <p>SHOPIFFY</p> */}
                    </div>
                  
                    
                    <div className='lower-left-inner'>
                        <div className='inner-item'>
                            <p><strong>Total items</strong></p>
                            <p>{ContextValue.total_quantity()}</p>
                        </div>
                        <hr className='underline'/>
                        <div className='inner-item'>
                            <p><strong>Shipping Fee</strong></p>
                            <p><strong>Free</strong></p>
                        </div>
                        <hr className='underline'/>
                        <div className='inner-item'>
                            <p><strong>Total Price</strong></p>
                            <p>${ContextValue.total_price()}</p>
                        </div>
                       
                    </div>

                </div>


            </div>
            <div className='right-container'>
              <div className='inside-right-container'>
              <h4>Payement Information</h4>
              <div>
                <div><label for="full_name" className='texter'><strong>Full Name</strong></label></div>
                <input className='input' type='text' id='full_name' name='full_name' onChange={changeHandler} value={value.full_name}/>
              </div>
              <div>
                 <div><label for="Address" className='texter'><strong>Address</strong></label></div>
                <input className='input' id='Address' type='text' name='Address' onChange={changeHandler} value={value.Address}/>
              </div>
              <div className='samller'>
                 <div>
                    <div><label for="Pincode" className='texter'><strong>Pincode</strong></label></div>
                    <input className="inputer" type='Number' id='Pincode' name='Pincode' placeholder='' onChange={changeHandler}/>
                 </div>
                 <div>
                    <div><label for="Country" className='texter'><strong>Country</strong></label></div>
                    <input className='inputer'  name='Country' id='Country'  onChange={changeHandler}/>
                 </div>
              </div>
              <div>
                <div><label for="Mobile" className='texter'><strong>Mobile</strong></label></div>
                <input className='input' id='Mobile' name='Mobile' onChange={changeHandler}/>
              </div>
              <div>
                <input type='checkbox' name='checkbox' id='checkbox' onClick={checkboxChecker} className='checkbox'/>
                <label for="chackbox" className='texter' id='labeler'><strong>By Placing the Secure Order I  agree to the terms and Condition</strong></label>
              </div>

              <button className='add_to_cart' onClick={clicker} >ORDER</button>

              </div>
            </div>

        </div>
 

        <Footer className="foot"/>
      
      
    </div>
  )
}

export default Place_order
