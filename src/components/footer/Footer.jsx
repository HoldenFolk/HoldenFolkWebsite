import React from 'react'
import './footer.css'
import {AiOutlineLinkedin, AiFillGithub} from 'react-icons/ai'


const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Holden Folk</a>

      <ul className='permalinks'> 
      <li><a href="#">Home</a></li>
      <li><a href="about">About</a></li>
      <li><a href="thisSite">About Site</a></li>
      <li><a href="contact">Contact</a></li>
      </ul>

      <div className="footer__copyright">
        <small>&copy; Property of Holden Folk. All rights reserved </small>
      </div>

    </footer>
  )
}

export default Footer