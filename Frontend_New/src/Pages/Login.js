import React, { useContext } from 'react'
import Navbar from '../Components/Navbar/Navbar'
import './CSS/LoginSigUp.css'
import { Link } from 'react-router-dom'
import { CartContext } from '../Context/CartContext'
function LoginSignUp() {
    const ContextValue= useContext(CartContext);
    console.log(ContextValue)
  return (
    <div className=''>
      <Navbar/>
      <div className='login'>
        <div className='login-container'>
          <h1>LOGIN</h1>
          <div>
            <label  for='email'>Email</label><br/>
            <input type='email' id='email' className='email'/>
            <hr className='login-underline'/>
          </div>
          <div>
            <label for='password'>Password</label><br/>
            <input type='password' className='password' id='password' />
            <hr/>
          </div>
          <div className='login-tail'>
            <button className=''>Login</button>
            <div>
              <p>New user?</p>
              <Link to='/signup' className='link'>Singnup</Link>
            </div>
          </div>

        </div>

      </div>

      
    </div>
  )
}

export default LoginSignUp
