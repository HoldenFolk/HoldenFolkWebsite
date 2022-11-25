import React from 'react'
import {AiOutlineLinkedin, AiFillGithub} from 'react-icons/ai'
import './header.css'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/holden-folk-995b8220a/" target="_blank" className="socials"> <AiOutlineLinkedin/> </a>
        <a href="https://github.com/HoldenFolk" target="_blank" className="socials"> <AiFillGithub/> </a>
    </div>
  )
}

export default HeaderSocials