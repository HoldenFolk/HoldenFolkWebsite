import React from 'react'
import {AiOutlineLinkedin, AiFillGithub} from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/holden-folk-995b8220a/" target="_blank"> <AiOutlineLinkedin/> </a>
        <a href="https://github.com/HoldenFolk" target="_blank"> <AiFillGithub/> </a>
    </div>
  )
}

export default HeaderSocials