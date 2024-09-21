import React from 'react';
import './AboutUsHero.css';
import locationImg from '../../assets/location.svg'
import callIcon from '../../assets/CallNow.svg'
import logo from '../../assets/HeaderLogo.svg';
import whatsapp from '../../assets/Whatsapp.svg';

import handshakeImage from '../../assets/AboutUS/HandShake.svg';
import doctorImage from '../../assets/AboutUS/Doctor.svg';
import { useNavigate } from 'react-router-dom';

const AboutUsHero: React.FC = () => {
  const navigate = useNavigate();

  const logoClick = () => {
    // Improved approach using useNavigate hook
    // navigate to the Home page
    //with smooth scroll
    window.scrollTo(0, 0);
    navigate('/');
  };

  const bookAppointment = () => {
    // Improved approach using useNavigate hook
    // navigate to the booking page
    navigate('/booking-page');
  }

  const openWhatsapp = () => {
    window.open('https://wa.me/919999999999', '_blank');
  };

  const callnow = () => {
    // Improved approach using window.location.href
    window.location.href = `tel:+919870588044`; // Replace with your actual phone number in E.164 format (e.g., +1234567890)
  };

    return (
        <div className='homepage'>
         
        <div className='hea-der'>
        Inaugural Offers: Limited Time Only! ⏳
        </div>
        <div className='hea-der1 aboutus-hea-der1'>
        <span>evoke</span>
        <div> <div  onClick={callnow} className='call-now'> <img src={callIcon} />Call Now</div></div>
        </div>
        <header className="aboutus-header">
      <div onClick={logoClick} className="logo"><img src={logo} /></div>
      <div className="nav">
        <span  className="btn1"> <span className='location-img'><img src={locationImg} /> Delhi</span> </span>
        <span onClick={bookAppointment} className="btn">Book Appointment</span>
      </div>
    </header>

    <section className="aboutus-hero">

    <div className="mission-statement">
        <div className="mission-text">
          <h1>
          At Evoke, our mission is to enhance <br /> hair health for millions through advanced,<span className="highlight"> personalized  treatments</span> and state-of-the-art <br />technology.
          </h1>
        </div>
        <div className="mission-text-mobile">
          <h1>
          At Evoke, our mission is to<br />enhance hair health for <br /> millions through advanced, <span className="highlight-mobile">personalized  treatments</span> <br /> and state-of-the-art <br /> technology.
          </h1>
        </div>
        <div className="mission-images">
          <img src={handshakeImage} alt="Handshake" className="mission-image" />
          <img src={doctorImage} alt="Doctor" className="mission-image small" />
          <img src={doctorImage} alt="Doctor" className="mission-image smallest" />
        </div>
      </div>
   

    </section>

    <span className='whatsapp-icon'>
        <img onClick={openWhatsapp} src={whatsapp} />
      </span>
        </div>
    );
};

export default AboutUsHero;