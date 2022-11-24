import React from 'react'
import './header.css'
import CTA from "./CTA"
import HeaderSocials from "./HeaderSocials"
import ProfilePic from "../../assets/ProfilePic.png"

const Header = () => {
  return (
    <header>
        <div className="container header__container">

            <h5>Hello I'm</h5>
            <h1>Holden Folk</h1>
            <h5 className="text-light">Lorem Ipsum</h5>
            
            <CTA/>

            <div className="headshot">
              <img src={ProfilePic} alt="headshot"/>
            </div>

            <HeaderSocials/>
            
        </div>
    </header>
  )
}

export default Header