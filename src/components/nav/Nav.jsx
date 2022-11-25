import React from 'react'
import './nav.css'
import {AiFillHome, AiFillInfoCircle, AiOutlineMessage} from "react-icons/ai"
import {BiUserCircle} from "react-icons/bi"
import { useState } from 'react'

const Nav = () => {
  //Use state to determine if a section of the page is being visited from the nav
  const {activeNav, setActiveNav} = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}>
         <AiFillHome/>
         <h5> Home </h5>
      </a>

      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}> 
        <BiUserCircle/>
        <h5> About Me </h5> 
      </a>

      <a href="#thisSite" onClick={() => setActiveNav('#thisSite')} className={activeNav === '#thisSite' ? 'active' : ''}>
        <AiFillInfoCircle/>
        <h5> About Site </h5>
      </a>

      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}>
         <AiOutlineMessage/>
         <h5> Contact </h5>
      </a>
    </nav>
  )
}

export default Nav