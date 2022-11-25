import React from 'react'
import './about.css'
import Headshot from '../../assets/Headshot.png'

const About = () => {
  return (
    <section id='about' className='container about__container'>
      <h2> About me: </h2>

      <div className="workImage">
              <img src={Headshot} alt="headshot"/>
      </div>

      <h5> Lorem Ipsum </h5>

    </section>
  )
}

export default About