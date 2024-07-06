import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../Components/Navbar/Navbar'
import './CSS/LoginSigUp.css'
import { CartContext } from '../Context/CartContext';
import axios from 'axios';
import { Link } from 'react-router-dom'
import { CartContext } from '../Context/CartContext'
function LoginSignUp() {
    const ContextValue= useContext(CartContext);
    const {url}= ContextValue;
    const [value,inputer]=useState('Login');
    const [formData, setfromData]= useState({
         user_name:"",
         email:"",
         password:""

    });


    const changeHandler=async (e)=>{
        setfromData({...formData,[e.target.name]:e.target.value});

    }

     const printer=async ()=>{
          if(value==='Login')
            {
                const res= await axios.post(`${url}/login`,formData);
                alert(res.data.error);
                if(res.data.sucess)
                {
                  localStorage.setItem('token',res.data.token);
                  window.location.replace('/');
                }
                 
            }
            else
            {
                const res= await axios.post(`${url}/signup`,formData);

               
                if(res.data.sucess)
                  {
                    alert(res.data.error);
                     inputer('Login');
                  }
            }
     }

    console.log(ContextValue)

    const logger= async ()=>
      {
        if(value==='Login')
          {
            inputer('WELCOME');
          }
          else{
            inputer('Login');
          }
    }

  //  const executer=async ()=>{
  //             if(formData.user_name==="")
  //               {
  //                    const res= await axios.post('http://localhost:300/login',formData);
  //                    console.log(res.data);
  //               }
  //               else if(formData.user_name!=)
  //  }
  return (
    <div className=''>
      <Navbar/>
      <div className='login'>
        <div className='login-container'>
          <h1>{value}</h1>
          {value==='Login'?<></>:
          <div>
             <label for='user_name'>User Name</label><br/>
            <input type='text' onChange={changeHandler}  className='user_name' id='user_name' name='user_name' />
            <hr/>
            </div>}
          <div>
            <label  for='email'>Email</label><br/>
            <input type='email' onChange={changeHandler}  id='email' className='email' name='email'/>
            <hr className='login-underline'/>
          </div>
          <div>
            <label for='password'>Password</label><br/>
            <input type='password'  onChange={changeHandler} className='password' id='password' name='password'/>
            <hr/>
          </div>
          <div className='login-tail'>
            <button className='' onClick={printer} >{value==='Login'?'Login':'Sign Up'}</button>
            {
              value==='Login'?
              <div>
              <p>New user?</p>
              <Link to='/login' className='link' onClick={()=>logger()}>Singnup</Link>
            </div>:
             <div>
             <p>Already a Customer?</p>
             <Link to='/login' className='link' onClick={()=>logger()}>Login</Link>
           </div>
            }
          </div>

        </div>

      </div>

      
    </div>
  )
}

export default LoginSignUp
