import React from 'react'
import './contact.css'
import { AiOutlineMail } from 'react-icons/ai'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2> Contact Me</h2>

    <div className='conainter contact__container'> 
      <div className="contact__options">
        <article className='contact__option'> 
        <AiOutlineMail/> 
          <h4>Email</h4>
          <h5>holdenfolk1@gmail.com</h5>
          <a href="mailto:holdenfolk1@gmail.com" target='_blank'>Send a message</a>
        </article>
        <article className='contact__option'> 
        <AiOutlineMail/> 
          <h4>LinhkedIn</h4>
          <h5>Holden Folk</h5>
          <a href="https://www.linkedin.com/in/holden-folk-995b8220a" target='_blank'>Send a message</a>
        </article>
        <article className='contact__option'> 
        <AiOutlineMail/> 
          <h4>Phone/WhatsApp</h4>
          <h5>+1 647-967-2658</h5>
          <a href="https://api.whatsapp.com/send?phone=16479672658" target='_blank'>Send a message</a>
        </article>
      </div>
      {/* END OF CONTACT OPTIONS */}
      <form action="">
        <input type="text" name='name' placeholder='Your Full Name' required />
        <input type="email" name='email' placeholder='Your Email' required />
        <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
        <button type='submit' className='btn btn-primary'>Send Message</button>
      </form>
    </div>

    </section>
  )
}

export default Contact