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
            <small> 3 Internships Completed</small>
          </article> 

          <article className= "about__tag"> 
            <IoMdSchool className='about__icon'/>
            <h5> Education </h5>
            <small> Pursuing Comp-Sci Degree</small>
          </article>

          <article className='about__tag'>
             <RiLightbulbLine className='about__icon'/>
             <h5> Intrests </h5>
             <small> Web Development/Design </small>
          </article> 
        </div>

        <p> 
          Hello! My name is Holden. I am a second year computer science 
          student at McGill University. My intrests include software design and 
          development, web design, and database systems. I have currently completed
          both internships in web design and finance, and am always looking for further
          opportunities to learn and collaborate in interesting environments. Check
          out my resume and LinkedIn to learn more about my experience. 
        </p>

        <a href="#contact"  className='btn btn-primary'> Lets Talk! </a>

        </div>
      </div>
    </section>
  )
}

export default About