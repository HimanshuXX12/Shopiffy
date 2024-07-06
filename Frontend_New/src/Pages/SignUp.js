import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import './CSS/LoginSigUp.css'
import { Link } from 'react-router-dom'

function SignUp() {
  return (
    <div>
         <Navbar/>
      <div className='login'>
        <div className='login-container'>
          <h1>WELCOME</h1>
          <div>
            <label  for='name'>UserName</label><br/>
            <input type='text' id='name' className='name' name='user_name'/>
            <hr/>
          </div>
          <div>
            <label  for='email'>Email</label><br/>
            <input type='email' id='email' className='email' name='email'/>
            <hr/>
          </div>
          <div>
            <label for='password'>Password</label><br/>
            <input type='password' className='password' id='password' name='password' />
            <hr/>
          </div>
          <div className='login-tail'>
            <button className=''>Register</button>
            <div>
              <p>Already a User?</p>
              <Link to='/login' className='link'>Login</Link>
            </div>
          </div>

        </div>

      </div>

      

      
    </div>
  )
}

export default SignUp
