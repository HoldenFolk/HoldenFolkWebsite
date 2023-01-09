import React from 'react'
import './about.css'
import Headshot from '../../assets/altas_people.jpg'

const About = () => {
  return (
    <section id='about' className='container about__container'>
      <h2> About me: </h2>
       
        <div className="workImage">
               <img src={Headshot} alt="headshot"/>
        </div>

        <h5> Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem IpsumLorem IpsumLorem Ipsum </h5>

    </section>
  )
}

export default About