import React from 'react';
import locationImg from '../../assets/location.svg'
import callIcon from '../../assets/CallNow.svg'
import logo from '../../assets/HeaderLogo.svg';
import './WhyEvokeHero.css'
import heroImg from '../../assets/WhyEvoke/Hero.svg'
import starImg from '../../assets/WhyEvoke/HeroStar.svg';
import { useNavigate } from 'react-router-dom';
import whatsapp from '../../assets/Whatsapp.svg';


const WhyEvokeHero: React.FC = () => {

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

    const callnow = () => {
      // Improved approach using window.location.href
      window.location.href = `tel:+919870588044`; // Replace with your actual phone number in E.164 format (e.g., +1234567890)
    };

    const openWhatsapp = () => {
      window.open('https://wa.me/919999999999', '_blank');
    };

    return (

        <div className='homepage'>
        <div className='hea-der'>
        Inaugural Offers: Limited Time Only! ⏳
        </div>
        <div className='hea-der1'>
        <span>evoke</span>
        <div> <div  onClick={callnow} className='call-now'> <img src={callIcon} />Call Now</div></div>
        </div>
        <header className="aboutus-header">
      <div onClick={logoClick} className="logo"><img src={logo} /></div>
      <div className="nav">
        <span  className="btn1"> <span className='location-img'><img src={locationImg} /> Delhi</span> </span>
        <span onClick={bookAppointment}  className="btn">Book Appointment</span>
      </div>
    </header>

    <section className="whyEvoke-hero">

    <div className='whyEvoke-text'>

        <div className='whyEvoke-content'>
            <p>Our Assurance</p>
            <h1>Top Healthcare Solutions for You</h1>
        </div>


        <div>
        <div className="whyEvoke-hero-stats">
        <div className="whyEvoke-stat-item1">
          <span style={{
            fontFamily: 'Montserrat',
            fontSize: '20px',
            fontWeight: '700',
            lineHeight: '28.57px',
            letterSpacing: '0.02em',
            textAlign: 'left',
            color: '#084237'
          }}>25+ Yrs </span>
          <span>Dermatology experience</span>
        </div>
        <div className="whyEvoke-stat-item2">
          <span style={{
             fontFamily: 'Montserrat',
            fontSize: '20px',
            fontWeight: '700',
            lineHeight: '28.57px',
            letterSpacing: '0.02em',
            textAlign: 'left',
            color: '#084237'
          }}>10,000+ </span>
          <span>Patients</span>
        </div>
        <div className="whyEvoke-stat-item3">
          <span style={{
             fontFamily: 'Montserrat',
            fontSize: '20px',
            fontWeight: '700',
            lineHeight: '28.57px',
            letterSpacing: '0.02em',
            textAlign: 'left',
            color: '#084237'
          }}>Scientifically</span>
          <span>Backed Treatments</span>
        </div>
      </div>
        </div>

    </div>
    <div className='whyEvoke-img'>

        <div className='whyEvoke-img1'>
            <img src={starImg} alt="hero" />
        </div>
        <div className='whyEvoke-img2'>
            <img src={heroImg} alt="hero" />
        </div>
        
        <div className='whyEvoke-img3'>
            <img src={starImg} alt="hero" />
        </div>

    </div>



   

    </section>

    <span className='whatsapp-icon'>
        <img onClick={openWhatsapp} src={whatsapp} />
      </span>
        </div>
    );
};

export default WhyEvokeHero;