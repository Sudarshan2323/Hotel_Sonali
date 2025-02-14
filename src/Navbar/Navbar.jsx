import React, { useState } from 'react'
import {NavLink} from 'react-router-dom'
import './nav.css'

function Navbar() {
  const[isOpen,setOpen]=useState(false)

  const handle=()=>{
    setOpen((preState)=> !preState)
    
    console.log(!isOpen ? 
      document.querySelector('.nav-menu').style.display="block" : document.querySelector('.nav-menu').style.display="none");
  }

  return (
    <nav>
        <h2 className="logo">
            Hotel_Sonali
        
        <div className="toglle-btn" onClick={handle}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
        </div>
        </h2>
      <ul className='nav-menu'>
        <li><NavLink to='/' className='nav-link'>Home</NavLink></li>
        <li><NavLink to='/menu' className='nav-link'>Menu</NavLink></li>
        <li><NavLink to='/blog' className='nav-link'>Gallery</NavLink></li>
        <li><NavLink to='/about' className='nav-link'>About</NavLink></li>
        <li><NavLink to='/login' className='nav-link'>Login</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar
