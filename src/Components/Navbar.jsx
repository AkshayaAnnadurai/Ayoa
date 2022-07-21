import React from 'react'
import "./Navbar.css"
function Navbar() {
    return (
        <div id="Navbar">
           <div id="Logo">
            <img src="https://www.ayoa.com/wp-content/themes/droptaskreload/navigation/images/ayoa_bluenavlogo.svg" alt="logo" />
           </div>
           <div id="Right">
            <h4 className='h4'>Home</h4>
            <h4 className='h4'>Why Ayoa?</h4>
            <h4 className='h4'>Uses</h4>
            <h4 className='h4'>Inclusivity</h4>  
            <h4 className='h4'>Resource</h4>  
            <h4 className='h4'>Pricing</h4>
            <button id='btn1'>Log in</button>
           </div>

        </div>
    )
}

export default Navbar