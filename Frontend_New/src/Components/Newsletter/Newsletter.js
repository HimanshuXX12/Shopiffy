import React from 'react'
import '../Newsletter/Newsletter.css'


function Newsletter() {
  return (
    <div className='news_letter'>
        <h1>Gets Exclusive Offer On Your Mails</h1>
        <p>Subscribe to NewsLetter and stay Updatted</p>
        <div class="action">
			
					<input type="email" name="email" placeholder="Enter Your email" required/>
					<button type="submit" name="submit" >Submit</button>
				
			</div>
      
    </div>
  )
}

export default Newsletter
