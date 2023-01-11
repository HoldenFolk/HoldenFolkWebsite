import React from 'react'
import './about.css'
import Headshot from '../../assets/altas_people.jpg'
import {GiClassicalKnowledge} from 'react-icons/gi'
import {IoMdSchool} from 'react-icons/io'
import {RiLightbulbLine} from 'react-icons/ri'

const About = () => {
  return (
    <section id='about' >

      <h2> About me: </h2>

     <div className='container about__container'>
     <div className = "about__me">
        <div className="workImage">
               <img src={Headshot} alt="work image"/>
        </div>
      </div>
      

      <div className = "about__content">
        <div className = "about__tags">

          <article className='about__tag'> 
            <GiClassicalKnowledge className="about__icon"/> 
            <h5> Experience </h5>
            <small> Has done x </small>
          </article> 

          <article className= "about__tag"> 
            <IoMdSchool className='about__icon'/>
            <h5> Education </h5>
            <small> Lorem Ipsum </small>
          </article>

          <article className='about__tag'>
             <RiLightbulbLine className='about__icon'/>
             <h5> Intrests </h5>
             <small> Lorem Ipsum </small>
          </article> 
        </div>

        <p> 
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
          Eos assumenda dicta nemo vitae ullam quae necessitatibus?
           Eveniet voluptatum incidunt consequuntur provident? Ipsum placeat,
            quaerat reprehenderit amet soluta sunt ducimus mollitia?
        </p>

        <a href="#contact"  className='btn btn-primary'> Lets Talk! </a>

        </div>
      </div>
    </section>
  )
}

export default About