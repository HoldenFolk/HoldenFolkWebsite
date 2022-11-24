import React from 'react'
import './nav.css'
import {AiFillHome, AiFillInfoCircle, AiOutlineMessage} from "react-icons/ai"
import {BiUserCircle} from "react-icons/bi"

const Nav = () => {
  return (
    <nav>
      <a href="#"> <AiFillHome/> <h5> Home </h5> </a>
      <a href="#about"> <BiUserCircle/> <h5> About Me </h5> </a>
      <a href="#thisSite"> <AiFillInfoCircle/> <h5> About Site </h5> </a>  
      <a href="#contact"> <AiOutlineMessage/> <h5> Contact </h5> </a>
    </nav>
  )
}

export default Nav