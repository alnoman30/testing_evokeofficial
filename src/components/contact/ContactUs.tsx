import React from 'react';
import './ContactUs.css';

const ContactUS: React.FC = () => (
    <form className="contact-form">
        <div className='contact-head'>
            <h3>Get In Touch</h3>
            <p>
               Reach out to us for personalized hair health solutions. Our expert team is here to answer your questions and guide you on your journey to healthier hair. Fill in your details, and we’ll get back to you shortly.
            </p>
        </div>
        <div className='contact-input'>
    <input type="text" placeholder="Enter your phone number" className="input-field" />
    <input type="text" placeholder="Enter your full name" className="input-field" />
    <button type="submit" className="submit-button">Submit</button>
        </div>
  </form>
);

export default ContactUS;
