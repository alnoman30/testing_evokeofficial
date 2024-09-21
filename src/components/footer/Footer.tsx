import React from 'react';
import './Footer.css';
import { useNavigate } from 'react-router-dom';

const Footer: React.FC = () =>{
    const navigate = useNavigate();
    const bookAppointment = () => {
        // Improved approach using useNavigate hook
        // navigate to the booking page
        navigate('/booking-page');
      }

 return (

    
    <div className='footer-container'>

    <form className="footer-form">
        <div className='footer-head'>
            <h3>Discover Your Health Potential with </h3>
            <p>
            Evoke
            </p>
        </div>
        <div className='footer-input'>
    <button onClick={bookAppointment} type="submit" className="footer-submit-button">Book Clinic Visit</button>
        </div>
  </form>
    </div>
);
}

export default Footer;
