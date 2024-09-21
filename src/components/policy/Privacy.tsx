import React from "react";
import locationImg from '../../assets/location.svg'
// import callIcon from '../../assets/CallNow.svg'
import logo from '../../assets/HeaderLogo.svg';
import { useNavigate } from "react-router-dom";
import './Privacy.css'
import MainFooter from "../footer/MainFooter";
import callIcon from '../../assets/CallNow.svg'

const Privacy: React.FC = () => {

    const navigate = useNavigate();

    const logoClick = () => {
        // Improved approach using useNavigate hook
        // navigate to the Home page
        //with smooth scroll
        window.scrollTo(0, 0);
        navigate('/');
    };
    const callnow = () => {
      // Improved approach using window.location.href
      window.location.href = `tel:+919870588044`; // Replace with your actual phone number in E.164 format (e.g., +1234567890)
    };
    const bookAppointment = () => {
        // Improved approach using useNavigate hook
        // navigate to the booking page
        navigate('/booking-page');
      }

    return (
        <div>
            <div className='hea-der'>
                Inaugural Offers: Limited Time Only! ⏳
            </div>
            <div className='hea-der1'>
                <span>evoke</span>
                <div> <div onClick={callnow} className='call-now'> <img src={callIcon} />Call Now</div></div>
            </div>
            <header className="aboutus-header">
                <div onClick={logoClick} className="logo"><img src={logo} /></div>
                <div className="nav">
                    <span className="btn1"> <span className='location-img'><img src={locationImg} /> Delhi</span> </span>
                    <span onClick={bookAppointment} className="btn">Book Appointment</span>
                </div>
            </header>

            <div className="privacy-policy-data">
            <h1>Privacy Policy</h1>
      <h2>Last Updated: 1st July 2024</h2>
      
      <p>
        Thank you for choosing Evoke Hair Health. Evoke website is created for the exclusive use of customers and for the purpose of providing necessary information about Hair Health. The content of the website cannot be duplicated, modified, or redistributed in whole or part without prior written authorization from Evoke Hair Health. All policies, terms, and conditions are subject to change with notice. Moreover, if the General Terms and Conditions provided on our website do not answer your questions or in case of detailed information, please contact us by email or call our customer care. This Privacy Policy outlines how we collect, use, disclose, and safeguard your personal information when you visit our website or use our services.
      </p>
      
      <h2>Information We Collect</h2>
      <ul>
        <li>
          <strong>Personal Information:</strong> We may collect personal information such as your name, contact details, medical history, and photographs when you voluntarily provide them for consultation or appointment purposes.
        </li>
        <li>
          <strong>Website Usage Information:</strong> We may collect non-personal information related to your use of our website, including IP address, browser type, device information, and pages visited. This information helps us enhance our website and user experience.
        </li>
      </ul>
      
      <h2>How We Use Your Information</h2>
      <ul>
        <li>
          <strong>Personalized Services:</strong> We use your personal information to provide personalized services, including appointment scheduling, medical consultations, and follow-up communications.
        </li>
        <li>
          <strong>Improving Services:</strong> Non-personal information is utilized to analyze website trends, improve functionality, and enhance user experience.
        </li>
      </ul>
      
      <h2>Data Security</h2>
      <p>
        We implement robust security measures to protect your personal information from unauthorized access, disclosure, alteration, and destruction. Our security procedures are regularly reviewed to ensure the safety of your data.
      </p>
      
      <h2>Third-Party Disclosure</h2>
      <ul>
        <li>
          <strong>Service Providers:</strong> We may share your information with third-party service providers to facilitate appointment scheduling, payment processing, and other services. These providers are contractually bound to maintain the confidentiality and security of your information.
        </li>
      </ul>
      
      <h2>Cookies</h2>
      <p>
        We use cookies to enhance your browsing experience on our website. You have the option to disable cookies through your browser settings, but please note that this may affect certain functionalities.
      </p>
      
      <h2>Your Choices</h2>
      <p>
        You have the right to access, correct, or delete your personal information. If you wish to exercise these rights, please contact us using the information provided below.
      </p>
      
      <h2>Updates to Privacy Policy</h2>
      <ul>
        <li>
          <strong>Notification of Changes:</strong> We reserve the right to update this Privacy Policy periodically. Any changes will be posted on our website with the date of the last modification.
        </li>
      </ul>
      
      <h2>Contact Information</h2>
      <p>
        If you have any questions or concerns about our Privacy Policy or the handling of your personal information, please contact us at <a href="mailto:contact@evokehair.com">contact@evokehair.com</a>.
      </p>
      
      <p>
        By using our website or services, you signify your acceptance of this Privacy Policy. It is your responsibility to review this policy periodically for any changes.
      </p>


            </div>

            <MainFooter />

        </div>
    );
};

export default Privacy;