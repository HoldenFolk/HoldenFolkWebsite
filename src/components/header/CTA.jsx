import React from 'react'
import CV from "../../assests/HoldenFolk_Resume.pdf"

const CTA = () => {
  return (
    <div className="cta">
        <a href={CV} download> Download Resume</a>
        <a href="#contact">Contact Me</a>
    </div>
  )
}

export default CTA