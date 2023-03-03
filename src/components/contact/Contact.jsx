import React from 'react'
import './contact.css'
import { AiOutlineMail } from 'react-icons/ai'
import {AiOutlineWhatsApp} from 'react-icons/ai'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {useRef} from 'react'
import emailjs from 'emailjs-com'


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_t6fkywr', 'template_2nr84lw', form.current, '0aB5PKTbseEoc4rHa')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };
 
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2> Contact Me</h2>

    <div className='container contact__container'> 
      <div className="contact__options">
        <article className='contact__option'> 
        <AiOutlineMail className='contact__option-icon'/> 
          <h4>Email</h4>
          <h5>holdenfolk1@gmail.com</h5>
          <a href="mailto:holdenfolk1@gmail.com" target='_blank'>Send a message</a>
        </article>
        <article className='contact__option'> 
        <AiOutlineLinkedin className='contact__option-icon'/> 
          <h4>LinkedIn</h4>
          <h5>Holden Folk</h5>
          <a href="https://www.linkedin.com/in/holden-folk-995b8220a" target='_blank'>Send a message</a>
        </article>
        <article className='contact__option'> 
        <AiOutlineWhatsApp className='contact__option-icon'/> 
          <h4>Phone/WhatsApp</h4>
          <h5>+1 647-967-2658</h5>
          <a href="https://api.whatsapp.com/send?phone=16479672658" target='_blank'>Send a message</a>
        </article>
      </div>
      {/* END OF CONTACT OPTIONS */}
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name='name' placeholder='Your Full Name' required />
        <input type="email" name='email' placeholder='Your Email' required />
        <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
        <button type='submit' className='btn__secondary'>Send Message</button>
      </form>
    </div>

    </section>
  )
}

export default Contact