import React from 'react'
import './header.css'
import CTA from "./CTA"
import HeaderSocials from "./HeaderSocials"
import ProfilePic from "../../assets/ProfilePic.png"

const Header = () => {
  return (
    <header>
        <div className="container header__container">

            <h5 >Welcome to the webpage of:</h5>
            <h1 className='typewriter'>Holden Folk</h1>

            <h5 className="text-light">I'm a CS major at McGill University with a passion for progamming and web development. Explore this page to learn about my experiences, intrests, and projects.</h5>
            
            <CTA/>

            <div className="headshot">
              <img src={ProfilePic} alt="headshot"/>
            </div>

            <h5> My Socials: </h5>

            <HeaderSocials/>
            
        </div>
    </header>
  )
}

export default Header