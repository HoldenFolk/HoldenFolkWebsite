import React from 'react'
import CV from "../../assets/HoldenFolk_Resume.pdf"

const CTA = () => {
  return (
    <div className="cta">
        <a href={CV} download className='btn'> Download Resume</a>
        <a href="#contact" className='btn'>Contact Me</a>
    </div>
  )
}

export default CTA