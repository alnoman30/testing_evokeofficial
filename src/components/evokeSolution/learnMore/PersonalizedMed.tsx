import React, { useState } from "react";
import locationImg from '../../../assets/location.svg'
// import callIcon from '../../assets/CallNow.svg'
import logo from '../../../assets/HeaderLogo.svg';
import { useNavigate } from "react-router-dom";
import '../../policy/Privacy.css';
import './PersonalizedMed.css';
import MainFooter from "../../footer/MainFooter";
import PMImg from '../../../assets/Treatment/PM.svg';
import PmIMGMob from '../../../assets/Treatment/PM-md.svg';
import callIcon from '../../../assets/CallNow.svg'

const PersonalizedMed: React.FC = () => {
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
    const bookAppointment = () => {
        // Improved approach using useNavigate hook
        // navigate to the booking page
        navigate('/booking-page');
    }

    const callnow = () => {
        // Improved approach using window.location.href
        window.location.href = `tel:+919870588044`; // Replace with your actual phone number in E.164 format (e.g., +1234567890)
      };

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
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
                <h1>Personalized Medicines</h1>

                <p>
                    At Evoke, we believe that every individual's hair journey is unique and deserves a tailored approach. Our Personalized Medications service is designed to address your specific hair concerns with scientifically proven treatments. We utilize advanced diagnostic tools, such as hair scans and blood tests, to identify the most effective medications for you. Our expert team prepares personalized kits with medicine variants and concentrations tailored to your needs, ensuring optimal results.
                </p>
                <img className="main-img-web" src={PMImg} alt="" />
                <img className="main-img-mob" src={PmIMGMob} alt="" />

                <div className="mobile-navigation-bar">
                <span onClick={() => scrollToSection('section3')}>Personalised Medicine Kit</span>
                <span className="dot">•</span>
                <span onClick={() => scrollToSection('section4')}>Detailed Care Instructions</span>
                <span className="dot">•</span>
                <span onClick={() => scrollToSection('section5')}>Free Follow-up Consultations</span>
            </div>
                {/* First Section */}
                <div className="service-page-content-div" id="section1">
                    <h4>The Science Behind Personalized Medications</h4>
                    <p>
                        The foundation of our Personalized Medications service lies in thorough diagnostics.
                        By understanding the root cause of your hair issues, we can recommend the best treatments.
                        Here's how we do it:
                    </p>

                    {expandedSection === 'section1' && (
                        <>
                            <ol>
                                <li>
                                    Hair Scan and Blood Tests
                                    <ul>
                                        <li>
                                            Hair Scan: Using advanced technology, we analyze the condition of your scalp and hair follicles.
                                            This non-invasive procedure provides a detailed view of your hair density, thickness, and overall scalp health.
                                        </li>
                                        <li>
                                            Blood Tests: These tests help us identify any underlying health conditions that might be affecting your hair growth.
                                            We check for hormone levels, nutritional deficiencies, and other biomarkers that can influence hair health.
                                        </li>
                                    </ul>
                                </li>
                            </ol>
                            <p>
                                These diagnostics allow us to create a comprehensive profile of your hair health, which forms the basis for your personalized medication plan.
                            </p>
                        </>
                    )}

                    <span className="show-more" onClick={() => handleToggle('section1')}>
                        {expandedSection === 'section1' ? 'Show Less' : '...Show More'}
                    </span>
                </div>


                {/* Second Section */}
                <div className="service-page-content-div" id="section2">

                    <h4>Key Medications We Use</h4>
                    <p>We prescribe a range of scientifically proven medications to address various hair concerns. Some of the key medications include:</p>

                    {expandedSection === 'section2' && (
                        <>
                            <ol>
                                <li>
                                    Minoxidil
                                    <ul>
                                        <li>
                                            Usage: Minoxidil is a topical solution applied directly to the scalp. It is known to stimulate hair growth and slow balding.
                                        </li>
                                        <li>
                                            Mechanism: It works by widening blood vessels, allowing more oxygen, blood, and nutrients to reach hair follicles.
                                        </li>
                                    </ul>
                                </li>

                                <li>
                                    DHT Blockers
                                    <ul>
                                        <li>
                                            Finasteride: This oral medication reduces the levels of Dihydrotestosterone (DHT), a hormone that shrinks hair follicles and leads to hair loss.
                                        </li>
                                        <li>
                                            Dutasteride: Similar to finasteride but often more potent, dutasteride is another oral DHT blocker that helps in reducing hair loss and promoting regrowth.
                                        </li>
                                    </ul>
                                </li>

                                <li>
                                    Supplements
                                    <ul>
                                        <li>
                                            Biotin: An essential B-vitamin that strengthens hair and nails. Biotin supplements can improve hair thickness and overall scalp health.
                                        </li>
                                        <li>
                                            Other Supplements: Depending on your specific needs, we may recommend additional vitamins and minerals to support hair growth and overall health.
                                        </li>
                                    </ul>
                                </li>
                            </ol>
                        </>
                    )}

                    <span className="show-more" onClick={() => handleToggle('section2')}>
                        {expandedSection === 'section2' ? 'Show Less' : '...Show More'}
                    </span>

                </div>

                {/* Third Section */}
                <div className="service-page-content-div" id="section3">

                    <h4>Personalized Medication Kits</h4>
                    <p>
                        At Evoke Hair Health, we understand that no two individuals are alike, and therefore, their treatment shouldn't be either. Our personalized medication kits are crafted based on the detailed diagnostic results. Here’s what sets our kits apart:
                    </p>

                    {expandedSection === 'section3' && (
                        <>
                            <ol>
                                <li>
                                    Customized Formulations
                                    <ul>
                                        <li>
                                            Each kit contains medications in variants and concentrations specifically prepared for you. Whether it's a higher concentration of minoxidil or a specific dosage of finasteride, our formulations are tailored to your needs.
                                        </li>
                                    </ul>
                                </li>

                                <li>
                                    Ease of Use
                                    <ul>
                                        <li>
                                            Our kits are designed for convenience, making it easy for you to adhere to your treatment plan. Clear instructions and all necessary components are included.
                                        </li>
                                    </ul>
                                </li>

                                <li>
                                    Ongoing Support
                                    <ul>
                                        <li>
                                            We provide detailed information on what to expect during your treatment and how to care for your scalp post-treatment. Our team is always available to answer any questions and provide guidance.
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


                {/* Fourth Section */}

                <div className="service-page-content-div" id="section4">

                    <h4>Detailed Care Instructions</h4>
                    <p>
                        Starting a new hair treatment regimen can be daunting, but we're here to help. Our team will provide you with detailed information on how to use your medications and what to expect:
                    </p>

                    {expandedSection === 'section4' && (
                        <>
                            <ol>
                                <li>
                                    Application Instructions
                                    <ul>
                                        <li>
                                            For topical treatments like minoxidil, you'll receive step-by-step instructions on how to apply the solution correctly to ensure maximum effectiveness.
                                        </li>
                                    </ul>
                                </li>

                                <li>
                                    Oral Medications
                                    <ul>
                                        <li>
                                            For medications like finasteride and dutasteride, we'll guide you on the best time to take them and any potential interactions with other medicines.
                                        </li>
                                    </ul>
                                </li>

                                <li>
                                    Supplementation
                                    <ul>
                                        <li>
                                            If your kit includes supplements like biotin, we'll provide guidelines on how to incorporate them into your daily routine effectively.
                                        </li>
                                    </ul>
                                </li>

                                <li>
                                    Scalp Care
                                    <ul>
                                        <li>
                                            Proper scalp care is crucial for the success of your treatment. We'll provide tips on maintaining scalp hygiene, managing potential side effects, and promoting a healthy scalp environment.
                                        </li>
                                    </ul>
                                </li>
                            </ol>
                        </>
                    )}

                    <span className="show-more" onClick={() => handleToggle('section4')}>
                        {expandedSection === 'section4' ? 'Show Less' : '...Show More'}
                    </span>

                </div>

                {/* Fifth Section */}
                <div className="service-page-content-div" id="section5">

                    <h4>Free Follow-Up Consultations</h4>
                    <p>
                        We believe in the importance of monitoring progress and making adjustments as necessary. Our service includes free follow-up consultations to ensure you’re on the right track:
                    </p>

                    {expandedSection === 'section5' && (
                        <>
                            <ol>
                                <li>
                                    Progress Assessment
                                    <ul>
                                        <li>
                                            Regular follow-up appointments allow us to assess the effectiveness of your treatment plan. We'll track your progress and make necessary adjustments to optimize results.
                                        </li>
                                    </ul>
                                </li>

                                <li>
                                    Refining Your Approach
                                    <ul>
                                        <li>
                                            Based on the follow-up consultations, we might adjust the concentrations or types of medications in your kit. This personalized approach ensures you receive the most effective treatment possible.
                                        </li>
                                    </ul>
                                </li>

                                <li>
                                    Ongoing Support
                                    <ul>
                                        <li>
                                            Our team is committed to your success. We're always available to answer questions, provide support, and make sure you're comfortable with your treatment plan.
                                        </li>
                                    </ul>
                                </li>
                            </ol>
                        </>
                    )}

                    <span className="show-more" onClick={() => handleToggle('section5')}>
                        {expandedSection === 'section5' ? 'Show Less' : '...Show More'}
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

export default PersonalizedMed;