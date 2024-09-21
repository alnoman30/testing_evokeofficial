import React, { useState } from "react";
import locationImg from '../../../assets/location.svg'
// import callIcon from '../../assets/CallNow.svg'
import logo from '../../../assets/HeaderLogo.svg';
import { useNavigate } from "react-router-dom";
import '../../policy/Privacy.css';
import './PersonalizedMed.css';
import MainImg from '../../../assets/Treatment/HT.svg';
import HTMd from '../../../assets/Treatment/HT-md.svg';
import MainFooter from "../../footer/MainFooter";
import callIcon from '../../../assets/CallNow.svg'

const HairTransPlant: React.FC = () => {

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
            <h1>Hair Transplant</h1>

            <p>
            A hair transplant is a surgical procedure that involves transferring permanent hair from areas of the scalp that typically do not experience hair loss (such as the sides and back of the head) to areas affected by permanent hair loss. This advanced procedure can also be used to restore eyebrows and beards, offering a complete solution for those seeking to regain their natural hair. Hair transplants are minor day surgeries lasting between 3-8 hours and are performed under local anesthesia, eliminating the need for hospitalization afterward.
            </p>

        <img className="main-img-web" src={MainImg} alt="" />
                        <img className="main-img-mob" src={HTMd} alt="" />
            <div className="service-page-content-div non-surgical">
                    <h4>When Do We Recommend Hair Transplants?</h4>
                    <p>
                    Hair transplants are recommended for individuals experiencing significant hair loss that cannot be effectively treated with non-surgical options or medications. This includes:
                    </p>
                    {expandedSection === 'section1' && (
                        <><ul>
                            <li>
                            Individuals with advanced stages of hair loss (Norwood scale grade 4 and above).
                            </li>
                            <li>
                            Those seeking to restore hair in specific areas such as the hairline, crown, eyebrows, or beard.
                            </li>
                            <li>
                            Patients looking for a permanent solution to their hair loss issues.
                            </li>
                        </ul>
                            </>
                        
                    )}

                    <span className="show-more" onClick={() => handleToggle('section1')}>
                        {expandedSection === 'section1' ? 'Show Less' : '...Show More'}
                    </span>
                </div>

                <div className="service-page-content-div non-surgical">
                    <h4>Techniques for Harvesting Hair</h4>
                    <p>
                    At Evoke, we utilize advanced techniques for harvesting hair, ensuring minimal discomfort and optimal results. The two primary methods are:
                    </p>
                    {expandedSection === 'section2' && (
                        <>
                        <span>FUE (Follicular Unit Extraction)</span>
                        <ul>
                            <li>
                                <span>Procedure:</span>Individual hair follicles are extracted without leaving a linear scar on the back of the scalp. It is the most common cosmetic procedure globally and is performed under local anesthesia, allowing the patient to remain awake and aware throughout the process.
                            </li>
                            <li>
                                <span>Benefits:</span>Painless and stitchless, minimal visibility due to small punch sizes (0.7 to 1mm), and quick post-op healing. Patients can resume their duties within 2-3 days.
                            </li>
                        </ul>

                        <span>FUT (Follicular Unit Transplantation)</span>
                        <ul>
                            <li>
                                <span>Procedure:</span>A strip of skin is excised from the donor area under local anesthesia and closed with suturing. The strip is then divided into grafts and implanted. This method can be combined with FUE for higher grades of baldness.
                            </li>
                            <li>
                                <span>Benefits:</span>Suitable for high-grade baldness when combined with FUE, but it leaves a linear scar.
                            </li>
                        </ul>
                            </>
                        
                    )}

                    <span className="show-more" onClick={() => handleToggle('section2')}>
                        {expandedSection === 'section2' ? 'Show Less' : '...Show More'}
                    </span>
                </div>

                <div className="service-page-content-div non-surgical">
                    <h4>Implant Techniques</h4>
                    <p>
                    We employ various implantation techniques to ensure the best outcomes for our patients:
                    </p>
                    {expandedSection === 'section3' && (
                        <>
                      <ol>
                        <li>
                        Direct Hair Implantation (DHI)
                        <ul>
                            <li>
                            A technique that involves implanting hair follicles directly into the scalp using a specialized too
                            </li>
                        </ul>
                        </li>
                        <li>
                        Choi Implanter
                        <ul>
                            <li>
                            A method that uses a pen-like device to implant hair follicles with precision.
                            </li>
                        </ul>
                        </li>
                        <li>
                        No Root Touch Technique
                        <ul>
                            <li>
                            A technique where the roots of the hair follicles are not touched, minimizing damage and increasing survival rates.
                            </li>
                        </ul>
                        </li>
                        <li>
                        Pre-made Slits
                        <ul>
                            <li>
                            Pre-prepared slits are made in the scalp before implantation, ensuring proper alignment and density.
                            </li>
                        </ul>
                        </li>
                        <li>
                        Stick & Place
                        <ul>
                           <li>
                           A technique where grafts are implanted immediately after creating slits, reducing the time grafts spend outside the body.
                           </li>
                        </ul>
                        </li>
                      </ol>
                            </>
                        
                    )}

                    <span className="show-more" onClick={() => handleToggle('section3')}>
                        {expandedSection === 'section3' ? 'Show Less' : '...Show More'}
                    </span>
                </div>

                <div className="service-page-content-div non-surgical">
                    <h4>Procedure Details</h4>
                    <p>
                    Our hair transplant procedures are meticulously planned and executed to ensure the best results:
                    </p>
                        <span>Preparation</span>
                        <ul>
                            <li>
                            The safe zone for extraction is marked to ensure the best outcomes without thinning the donor area. Local anesthesia is administered using vibrators and needleless injections for patient comfort.
                            </li>
                        </ul>

                    {expandedSection === 'section4' && (
                        <>
                        <span>Extraction</span>
                        <ul>
                            <li>
                            The surgeon punches the graft, and the assistant extracts and places it in a storage solution or PRF (Platelet-Rich Fibrin) until implantation.
                            </li>
                        </ul>

                        <span>Implantation</span>
                        <ul>
                            <li>
                            Extracted grafts are implanted using techniques suited to the individual patient, ensuring natural-looking results. Show less.
                            </li>
                        </ul>
                            </>
                        
                    )}

                    <span className="show-more" onClick={() => handleToggle('section4')}>
                        {expandedSection === 'section4' ? 'Show Less' : '...Show More'}
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

export default HairTransPlant;