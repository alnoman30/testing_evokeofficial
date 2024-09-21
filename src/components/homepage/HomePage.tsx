import React from 'react';
import './HomePage.css';
import heroImg from '../../assets/HeroImg.svg'
import locationImg from '../../assets/location.svg'
import callIcon from '../../assets/CallNow.svg'
import logo from '../../assets/HeaderLogo.svg';
import { useNavigate } from 'react-router-dom';


const HomePage: React.FC = () => {

  const navigate = useNavigate();

  const callnow = () => {
    // Improved approach using window.location.href
    window.location.href = `tel:+919870588044`; // Replace with your actual phone number in E.164 format (e.g., +1234567890)
  };

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

  const assessmentPage = () => {
    // Improved approach using useNavigate hook
    // navigate to the assessment page
    navigate('/assessment-page');
  }

  return (
    <div className='homepage'>
      <div className='hea-der'>
        Inaugural Offers: Limited Time Only! ⏳
      </div>
      <div className='hea-der1'>
        <span>evoke</span>
        <div> <div onClick={callnow} className='call-now'> <img src={callIcon} />Call Now</div></div>
      </div>
      <header className="header">
        <div onClick={logoClick} className="logo"><img src={logo} /></div>
        <div className="nav">
          <span className="btn1"> <span className='location-img'><img src={locationImg} /> Delhi</span> </span>
          <span onClick={bookAppointment} className="btn">Book Appointment</span>
        </div>
      </header>

      <section className="hero">
        <div className="hero-content">
          <div className='hero-content-div'>Tailored Hair Treatments,<br /><span>Delivered by Specialist</span></div>
          <span>Doctors</span>
          <p>Your path to healthier hair starts here</p>
          <button style={{
            outline: 'none',
          }} onClick={bookAppointment} className="hero-button">Book Appointment</button>
        </div>

        <div className="hero-image1">
          <img src={heroImg} alt="hero" />
        </div>

        <div className="hero-stats">
          <div className="stat-item1">
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
          <div className="stat-item2">
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
          <div className="stat-item3">
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
        <div className="hero-image2">
          <img src={heroImg} alt="hero" />
        </div>
      </section>

      <section className="assessment">
        <span>Find Your Perfect Hair Solution with Our Easy Hair Test</span>
        <div className="assessment-buttons">
          <button style={{
            outline: 'none',
          }} className="assessment-button1">Free Hair Assessment</button>
          <button style={{
            outline: 'none',
          }} onClick={assessmentPage} className="assessment-button">Click Now</button>
        </div>
      </section>

    </div>
  );
};

export default HomePage;
