import React from 'react'
import './Contact.css';
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function Contact() {
  return (
    <div className="contact-page">
        <div className='contact-header'>
            <h1>Get in touch</h1>
            <p>Interested to collaborate? Feel free to drop me an email.</p>
        </div>
        <div className="contact-form">
            <form action="https://formspree.io/f/xkgrgzyy" method="POST">
                <input type="email" name="email" id="email" placeholder='Your Email here' required />
                <textarea name="message" id="message" rows="7" placeholder='Your Message here' required></textarea>
                <button type="submit" className='submit-button'>Send Email</button>
            </form>
        </div>
        <div className="social-links">
            <a href="https://www.linkedin.com/in/shilpajha/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://www.linkedin.com/in/shilpajha/" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/shilpajha/" target="_blank" rel="noopener noreferrer"><SiLeetcode /></a>
            <a href="https://www.linkedin.com/in/shilpajha/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        </div>
    </div>
  )
}
