import React, { useState } from "react";
import locationImg from '../../../assets/location.svg'
// import callIcon from '../../assets/CallNow.svg'
import logo from '../../../assets/HeaderLogo.svg';
import { useNavigate } from "react-router-dom";
import MainImg from '../../../assets/Treatment/NonSurgical.svg';
import nonSurgialMd from '../../../assets/Treatment/NonSurgical-md.svg';
import '../../policy/Privacy.css';
import './PersonalizedMed.css';
import MainFooter from "../../footer/MainFooter";
import callIcon from '../../../assets/CallNow.svg'

const NonSurgical: React.FC = () => {
    const [expandedSection, setExpandedSection] = useState(null);

    const handleToggle = (section: any) => {
        setExpandedSection(prevSection => (prevSection === section ? null : section));
    };

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
                    {/* <span onClick={bookAppointment} className="btn">Book Appointment</span> */}
                </div>
            </header>

            <div className="service-page-container">
            <h1>Non-Surgical Options</h1>

            <p>
            At Evoke, we understand that not everyone is comfortable with surgical hair restoration procedures. For those who prefer non-surgical solutions, we offer high-quality hair patches and extensions. These modern alternatives provide a seamless, natural look and are suitable for patients with medium to high degrees of hair loss who do not wish to undergo a hair transplant.
            </p>
     

        <img className="main-img-web" src={MainImg} alt="" />
                        <img className="main-img-mob" src={nonSurgialMd} alt="" />

        <div className="service-page-content-div non-surgical">
                    <h4>When Do We Use Non-Surgical Options?</h4>
                    <p>
                    Non-surgical options are ideal for individuals who:
                    </p>
                            <ul>
                                <li>
                                Experience medium to high degrees of hair loss but prefer not to undergo surgical procedures.
                                </li>
                                <li>
                                Seek a quick and effective solution to improve their hair appearance.
                                </li>
                            </ul>
                    {expandedSection === 'section1' && (
                        <><ul>
                            <li>
                            Want a reversible and flexible option for hair restoration.
                            </li>
                            <li>
                            Have medical conditions or personal preferences that make them unsuitable candidates for surgical procedures.
                            </li>
                        </ul>
                        <p>
                        Non-surgical hair restoration provides an excellent solution for those looking to enhance their hair density and overall appearance without the need for invasive treatments.
                        </p>
                            </>
                        
                    )}

                    <span className="show-more" onClick={() => handleToggle('section1')}>
                        {expandedSection === 'section1' ? 'Show Less' : '...Show More'}
                    </span>
                </div>

                <div className="service-page-content-div non-surgical">
                    <h4>Modern Hair Patches & Extensions: High-Quality Solutions</h4>
                    <p>
                    Modern hair patches have come a long way from the traditional wigs of the past. Our hair patches are designed to blend seamlessly with your natural hair, providing a flawless and undetectable appearance.
                    </p>
                            <span>Quality and Realism</span>
                            <ul>
                                <li>
                                    <span>Expert Craftsmanship:</span>Each hair patch is crafted with precision to match your hair type, color, and style. Our experts take great care to ensure that the hair patches look as natural as possible.
                                </li>
                                <li>
                                    <span>Comfort and Durability:</span>Modern hair patches are designed to be comfortable to wear and durable enough to withstand daily activities. They are lightweight and breathable, making them easy to wear for extended periods.
                                </li>
                            </ul>
                    {expandedSection === 'section2' && (
                        <>
                        <ul>
                            <li>
                                <span>Seamless Integration:</span>Our specialists are skilled in integrating hair patches with your natural hair. They ensure that the transition between the patch and your natural hair is smooth and undetectable.
                            </li>
                            <li>
                                <span>Styling Options:</span>Hair patches can be styled just like your natural hair. You can wash, cut, and style them to suit your preferences, giving you the freedom to maintain your desired look.
                            </li>
                        </ul>
                       
                            </>
                        
                    )}

                    <span className="show-more" onClick={() => handleToggle('section2')}>
                        {expandedSection === 'section2' ? 'Show Less' : '...Show More'}
                    </span>
                </div>

                <div className="service-page-content-div non-surgical">
                    <h4>Customized Hair Patches: Tailored to Your Needs</h4>
                    <p>
                    Customization is key to achieving a natural and personalized look. At Evoke, we offer customized hair patches that are tailored to your specific needs and preferences. Customized hair patches are crafted to match your unique hair characteristics, making them virtually indistinguishable from natural hair.
                    </p>
                    {expandedSection === 'section3' && (
                        <>
                            <span>Personalization Process</span>
                            <ul>
                                <li>
                                    <span>Initial Consultation:</span>During your initial consultation, our experts will assess your hair loss pattern, hair type, and personal preferences. This helps us create a detailed profile to customize your hair patch.
                                </li>
                                <li>
                                    <span>Measurement and Design:</span>Accurate measurements of your scalp are taken to ensure that the hair patch fits perfectly. The design process involves selecting the right hair type, color, and texture to match your natural hair.
                                </li>
                                <li>
                                    <span>Creation and Fitting:</span>Once the customized hair patch is ready, our specialists will fit it securely and blend it with your natural hair. This ensures a seamless and natural appearance.
                                </li>
                            </ul>
                            </>
                        
                    )}

                    <span className="show-more" onClick={() => handleToggle('section3')}>
                        {expandedSection === 'section3' ? 'Show Less' : '...Show More'}
                    </span>
                </div>

                <div className="treatment-div">
                    <div className="book-clinic-visit-p">
                        <p>
                            Our team of experts is here to help you find the right treatment plan tailored to your needs. </p>
                        <p>
                            To schedule an appointment, please click and schedule the Appointment.
                        </p>
                        <button onClick={bookAppointment}>Book Clinic Visit</button>
                    </div>
                </div>
            </div>

            <MainFooter />

        </div>
    );
};

export default NonSurgical;