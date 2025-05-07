import React from 'react'
import './Contact.css';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
    const [state, handleSubmit] = useForm("mdobenlw");
    if (state.succeeded){
        setTimeout(() => {
          document.getElementById("contact-form").reset();
        }, 2500)
    }
  return (
    <div className='section-container'>
        <Header 
            heading='Get in touch'
            subHeading="Interested to collaborate? Feel free to drop me an email.">
        </Header>
        <div className="contact-form-container">
        {
            state.succeeded &&
            <div className='alert'>
                Thanks for the submission!
            </div>
        }
            <form className='contact-form' onSubmit={handleSubmit} id='contact-form'>
                <input type="email" name="email" id="email" placeholder='Your Email here' className='input-box email-input' required />
                <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
<textarea type="text" placeholder='Your Message' name='message'
            className='input-box body-input' required></textarea>
          <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
                        <button type="submit" className='contact-btn' disabled={state.submitting}>Send Email</button>
            </form>
        </div>
        <div className="social-links">
            <a href="https://www.linkedin.com/in/shilpajha/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://www.linkedin.com/in/shilpajha/" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/shilpajha/" target="_blank" rel="noopener noreferrer"><SiLeetcode /></a>
            <a href="https://www.linkedin.com/in/shilpajha/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        </div>
        <Footer
        phrase="Read more "
        link="about me."
        toAddress="/about">
      </Footer>
    </div>
  )
}
