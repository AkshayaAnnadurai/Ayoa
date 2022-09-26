import React from 'react'
import "./Navbar.css"
// import Signup from './Signup'
import {Link, useNavigate} from "react-router-dom"

function Navbar() {
    // function login(){
    //     window.location.href={Signup}
    // }
const navigate=useNavigate()
    return (
        <div id="Navbar">
           <div id="Logo">
            <img src="https://www.ayoa.com/wp-content/themes/droptaskreload/navigation/images/ayoa_bluenavlogo.svg" alt="logo" />
           </div>
           <div id="Right">
            <Link to="/"><h4 className='h4'>Home</h4></Link>
            <Link to="/why"><h4 className='h4'>Why Ayoa?</h4></Link>
            <h4 className='h4'>Uses</h4>
            <Link to="/Includ" ><h4 className='h4'>Inclusivity</h4></Link>  
            <h4 className='h4'>Resource</h4>  
            <h4 className='h4'>Pricing</h4>
           <button id='btn1' onClick={()=>{navigate("/login")} }>Log in</button>
           </div>

        </div>
    )
}


export default Navbar