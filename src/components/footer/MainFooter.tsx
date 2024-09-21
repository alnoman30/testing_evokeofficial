// Footer.tsx
import React from 'react';
import './MainFooter.css';
import { Link } from '@mui/material';
import linkedinIcon from '../../assets/linkedin.svg';
import facebookIcon from '../../assets/fb.svg';
import instaIcon from '../../assets/Instagram.svg';
import logo from '../../assets/FooterLogo.svg';
import youTubeIcon from '../../assets/Utube.svg';
import { useNavigate } from 'react-router-dom';

const MainFooter: React.FC = () => {

  const navigate = useNavigate();

  const handleMailClick = () => {
    // Improved approach using window.location.href
    window.location.href = `mailto:contact@evokehair.com`; // Replace with your actual email address
  };

  const aboutUsClick = () => {
    // Improved approach using useNavigate hook
    // navigate to the About Us page
    //with smooth scroll
    window.scrollTo(0, 0);
    navigate('/about-us');
  };

  const whyEvokeClick = () => {
    // Improved approach using useNavigate hook
    // navigate to the Why Evoke page
    //with smooth scroll
    window.scrollTo(0, 0);
    navigate('/why-evoke');
  };
  const blogClick = () => {
    // Improved approach using useNavigate hook
    // navigate to the Why Evoke page
    //with smooth scroll
    window.scrollTo(0, 0);
    navigate('/blog.evokehair.com');
  };

  //logoClick
  const logoClick = () => {
    // Improved approach using useNavigate hook
    // navigate to the Home page
    //with smooth scroll
    window.scrollTo(0, 0);
    navigate('/');
  };

  const handleCallClick = () => {
    // Improved approach using window.location.href (for redirecting to a call screen/app)
    const phoneNumber = '+919870588044'; // Replace with your actual phone number in E.164 format (e.g., +1234567890)
    const encodedNumber = encodeURIComponent(phoneNumber);

    // Detect if a call-specific URL scheme is supported (varies by device)
    if (navigator.userAgent.match(/iphone|ipod|ipad/i)) {
      window.location.href = `tel:${encodedNumber}`; // iOS devices (tel: scheme)
    } else if (navigator.userAgent.match(/android/i)) {
      window.location.href = `tel:${encodedNumber}`; // Android devices (intent: scheme)
    } else {
      // Fallback for unsupported devices: display number as text
      // alert(`Please call us at: ${phoneNumber}`);
    }
  };

  const addressClick = () => {
    const address = "17A, Ring Road, Lajpat Nagar IV, New Delhi 110024";
    let mapURL = "https://www.google.com/maps/place/" + encodeURIComponent(address);
    window.open(mapURL, '_blank');
    // Check for device type (optional, can be improved)
    // if (navigator.userAgent.match(/android/i)) {
    //   window.location.href = "intent://geo:0,0?q=" + encodeURIComponent(address) + "&z=17&m=3"; // Open in Google Maps app (Android)
    // } else if (navigator.userAgent.match(/iphone|ipod|ipad/i)) {
    //   window.location.href = "http://maps.apple.com/?daddr=" + encodeURIComponent(address); // Open in Apple Maps app (iOS)
    // }
    // else {  
    //   window.open(mapURL, '_blank'); // Open in a new tab (fallback)
    // }
  };

  return (

    <footer>
        <div className='container'>
            <div className='top-footer-section'>
            <div className='top_side_footer'>
            <div className="footer-logo">
            <span className='footer-logo' onClick={logoClick}><img src={logo}/></span>
            <span className='social-icons'>
              <Link href="https://www.youtube.com/@evokehairhealth" target="_blank" rel="noopener noreferrer">
                  <img src={youTubeIcon} alt="YouTube" />
              </Link>
              <Link href="https://www.linkedin.com/company/evokehealth/" target="_blank" rel="noopener noreferrer">
                  <img src={linkedinIcon} alt="LinkedIn" />
              </Link>
              <Link href="https://www.instagram.com/evokehair?igsh=Z3dzYWxiYWFldXE=" target="_blank" rel="noopener noreferrer">
                  <img src={instaIcon} alt="Instagram" />
              </Link>
              <Link href="https://www.facebook.com/Evokehairhealth" target="_blank" rel="noopener noreferrer">
                  <img src={facebookIcon} alt="Facebook" />
              </Link>
          </span>
          </div>
            </div>
            <div className='top_side_footer'>
                <div className='top_footer_right_inner'>
                <div className="footer-right">
                    <h4>Evoke</h4>
                    <p onClick={aboutUsClick}>About us</p>
                    <p onClick={whyEvokeClick}>Why Evoke</p>
                    <p onClick={blogClick}>Blog</p>
                    </div>
                    <div className="footer-right ">
                    <h4>Contact us on</h4>
                    <p onClick={handleCallClick}>+91 9870588044</p>
                    <p onClick={handleMailClick}>contact@evokehair.com</p>
                    </div>
                    <div className="footer-right last_item">
                    <h4>Reach us at</h4>
                    <p onClick={addressClick}>17A, Ring Road,</p>
                    <p onClick={addressClick}>Lajpat Nagar IV, New Delhi 110024</p>
                    </div>
                </div>
            </div>
            </div>
            <div className='foot_heading'>
              <h4>Our Popular Services</h4>
            </div>

          <div className='additional_footer'>
            
          <div className='footer_section'>
            {/* <h4>Our Popular Services</h4> */}
            <ul>
              <li><a href="/fue-hair-transplant">FUE Hair Transplant</a></li>
              <li><a href="/bio-fue-hairtrasnplant">Bio FUE Hair Transplant</a></li>
              <li><a href="/mdfi-hair-transplant">MDFI Hair Transplant</a></li>
              <li><a href="/body-hair-transplant">Body Hair Transplant</a></li>
              <li><a href="/beard-hair-transplant">Beard Hair Transplant</a></li>
              <li><a href="/eyebrow-hair-transplant">Eyebrow Hair Transplant</a></li>
            </ul>
          </div>
          <div className='footer_section'>
            {/* <h4>Our Popular Services</h4> */}
            <ul>
              <li><a href="/women-hair-transplant">Hair Transplant for Women</a></li>
              <li><a href="/hair-transplant-repair">Hair Transplant Repair</a></li>
              <li><a href="/hair-transplant-doctor-surgeons">Hair Transplant Doctor/Surgeons</a></li>
              <li><a href="/hair-transplant-clinic">Hair Transplant Clinic</a></li>
              <li><a href="/top-5-hair-transplant-clinic-in-delhi">Top 5 Hair Transplant Clinics in Delhi</a></li>
              <li><a href="/sapphire-fue">Sapphire FUE</a></li>
            </ul>
          </div>
          <div className='footer_section'>
            {/* <h4>Our Popular Services</h4> */}
            <ul>
              <li><a href="/direct-hair-transplant">Direct Hair Tranplantation (DHT)</a></li>
              <li><a href="/long-hair-fue">Long Hair FUE</a></li>
              <li><a href="/hair-loss-concern">Hair Loss Concern</a></li>
              <li><a href="/prp-treatment">PRP Treatment</a></li>
              <li><a href="/hair-loss-in-men">Hair Loss In Men</a></li>
              <li><a href="/hair-loss-and-thinning-for-women">Hair Loss And Thinning For Women</a></li>
            </ul>
          </div>
          <div className='footer_section'>
            {/* <h4>Our Popular Services</h4> */}
            <ul>
              <li><a href="/mesotherapy-hair-treatment">Mesotherapy Hair Treatment</a></li>
              <li><a href="/gfc-treatment">GFC Treatment</a></li>
              <li><a href="/qr-678-treatment">QR 678 Treatment</a></li>
              <li><a href="/millifrac-microneedling-treatment">Millifrac Microneedling Treatment</a></li>
              <li><a href="/exsomes-injection">Exosomes Injection</a></li>
              <li><a href="/g-cell-regenera-activa">G Cell Regenera Activa</a></li>
            </ul>
          </div>
        </div>
        <div className='border_bottom'></div>
        <div className='footer_bottom'>
          <p>© 2024 - Evoke Hair<br /> All rights reserved.</p>
          <div className='footer_links'>
            <a href="/tnc-policy">Terms & Conditions</a>
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/cancellation-refund-policy">Cancellation & Refund Policy</a>
          </div>
        </div>


        </div>
    </footer>
  );
};

export default MainFooter;
