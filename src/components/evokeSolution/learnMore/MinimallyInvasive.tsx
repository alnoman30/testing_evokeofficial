import React, { useState } from "react";
import locationImg from '../../../assets/location.svg'
// import callIcon from '../../assets/CallNow.svg'
import logo from '../../../assets/HeaderLogo.svg';
import { useNavigate } from "react-router-dom";
import '../../policy/Privacy.css';
import './PersonalizedMed.css';
import mainImg from '../../../assets/Treatment/MIP.svg';
import PRPImg from '../../../assets/Treatment/PRP.svg';
import millifrac from '../../../assets/Treatment/Millifrac.svg';
import mesoTherapy from '../../../assets/Treatment/Mesotherapy.svg';
import MIPMd from '../../../assets/Treatment/MIP-md.svg';
import PRPMd from '../../../assets/Treatment/PRP-md.svg';
import MainFooter from "../../footer/MainFooter";
import callIcon from '../../../assets/CallNow.svg'

const MinimallyInvasive: React.FC = () => {
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
                <h1>Minimally Invasive Procedures</h1>

                <h4>When Do We Suggest Minimally Invasive Procedures?</h4>

                <p>
                    At Evoke, we understand that hair loss can be a distressing experience. While medications can be effective for early stages of hair loss, there are times when more advanced treatments are necessary. We typically recommend minimally invasive procedures for individuals experiencing grade 2 to grade 4 hair loss. At these stages, medications alone may not provide the desired results, and more targeted interventions are needed to stimulate hair growth and improve hair density.
                </p>

                <img className="main-img-web" src={mainImg} alt="" />
                <img className="main-img-mob" src={MIPMd} alt="" />


<div className="treatment-navigation-bar">
            <span onClick={() => scrollToSection('section1')}>GFC</span>
            <span className="dot">•</span>
            <span onClick={() => scrollToSection('section2')}>Millifrac (Microneedling)</span>
            <span className="dot">•</span>
            <span onClick={() => scrollToSection('section3')}>QR 678</span>
            <span className="dot"></span>
            <span onClick={() => scrollToSection('section4')}>Exosomes Injections</span>
            <span className="dot">•</span>
            <span onClick={() => scrollToSection('section5')}>G-Cell</span>
            <span className="dot">•</span>
            <span onClick={() => scrollToSection('section6')}>Mesotherapy</span>
        </div>

                <div className="service-page-content-div non-surgical">
                    <h4>Minimally invasive procedures are ideal for those who:</h4>
                    <ul>
                        <li>Are experiencing thinning hair or balding in specific areas.</li>
                        <li>Have not seen significant improvement with topical or oral medications.</li>
                    </ul>
                    {expandedSection === 'section1' && (
                        <><ul>
                            <li>Are looking for effective solutions with minimal downtime and discomfort.</li>
                            <li>Prefer non-surgical options that offer natural-looking results.</li>
                        </ul><p>
                                These procedures are designed to stimulate hair follicles, enhance blood circulation, and promote the growth of new, healthy hair. Our team of experts will assess your specific condition and recommend the most suitable minimally invasive procedure for you.
                            </p>
                        </>
                    )}
                    <span className="show-more" onClick={() => handleToggle('section1')}>
                        {expandedSection === 'section1' ? 'Show Less' : '...Show More'}
                    </span>
                </div>

                <div className="service-page-content-div non-surgical">
                    <h4>Minimally Invasive Procedures We Perform</h4>
                    <p>
                    At Evoke, we offer a range of minimally invasive procedures tailored to meet your individual needs. Each treatment is performed by our skilled professionals using the latest technology and techniques to ensure optimal results. Here are the minimally invasive procedures we offer:
                    </p>

                </div>

                <div className="service-page-content-div non-surgical">
                    <h4>PRP (Platelet-Rich Plasma) Therapy</h4>
                    <p>
                    <span>What is PRP Therapy?</span> Platelet-Rich Plasma (PRP) therapy is a cutting-edge treatment that uses your body's own platelets to stimulate hair growth. Platelets contain growth factors that promote healing and tissue regeneration, making PRP an effective option for hair restoration.
                    </p>
                    {expandedSection === 'section2' && (
                        <>
                            <span>How Does It Work?</span>
                       <ul>
                        <li>
                        A small sample of your blood is drawn and processed in a centrifuge to separate the platelets from the rest of the blood components.
                        </li>
                        <li>
                        The concentrated platelets are then injected into the scalp, targeting areas with thinning hair or bald spots.
                        </li>
                        <li>
                        The growth factors in the platelets stimulate the hair follicles, promoting new hair growth and improving the overall health of the scalp.
                        </li>
                       </ul>
                        <span>Benefits of PRP Therapy</span>
                        <ul>
                            <li>
                            Natural and safe: Uses your own blood, reducing the risk of allergic reactions.
                            </li>
                            <li>
                            Minimally invasive with no downtime.
                            </li>
                            <li>
                            Promotes thicker, healthier hair.
                            </li>
                        </ul>

                        <div>
                        <img className="main-img-web" src={PRPImg} alt="" />
                        <img className="main-img-mob" src={PRPMd} alt="" />
                        </div>
                        </>
                    )}
                    <span className="show-more" onClick={() => handleToggle('section2')}>
                        {expandedSection === 'section2' ? 'Show Less' : '...Show More'}
                    </span>
                </div>

                <div className="service-page-content-div non-surgical" id="section1">
                    <h4>GFC (Growth Factor Concentrate) Therapy</h4>
                    <p>
                    <span>What is GFC Therapy?</span> Growth Factor Concentrate (GFC) therapy is a refined version of PRP that involves a higher concentration of growth factors. This treatment is designed to provide more potent stimulation to the hair follicles.
                    </p>
                    {expandedSection === 'section3' && (
                        <>
                            <span>How Does It Work?</span>
                       <ul>
                       <li>
                       Similar to PRP, a blood sample is taken and processed to concentrate the growth factors.
                       </li>
                       <li>
                       The concentrated growth factors are then injected into the scalp to stimulate hair growth and improve scalp health.
                       </li>
                       </ul>
                        <span>Benefits of GFC Therapy</span>
                        <ul>
                            <li>
                            Higher concentration of growth factors for enhanced results.
                            </li>
                            <li>
                            Stimulates hair growth and improves hair density.
                            </li>
                            <li>
                            Safe and effective with minimal discomfort.
                            </li>
                        </ul>
                        </>
                    )}
                    <span className="show-more" onClick={() => handleToggle('section3')}>
                        {expandedSection === 'section3' ? 'Show Less' : '...Show More'}
                    </span>
                </div>

                <div className="service-page-content-div non-surgical" id="section2">
                    <h4>Millifrac (Microneedling)</h4>
                   <p>
                   <span>What is Millifrac?</span> Millifrac, or microneedling, is a minimally invasive procedure that involves creating tiny micro channels on the scalp using fine needles. This process stimulates the body's natural healing response, promoting hair growth and improving scalp health.
                   </p>
                    {expandedSection === 'section2' && (
                        <>
                            <span>How Does It Work?</span>
                       <ul>
                        <li>
                        A microneedling device is used to create controlled micro-injuries on the scalp.
                        </li>
                        <li>
                        These micro-injuries stimulate the production of collagen and growth factors, which help in rejuvenating the hair follicles.
                        </li>
                        <li>
                        The procedure can be combined with PRP or other growth factor treatments for enhanced results.
                        </li>
                       </ul>
                        <span>Benefits of Millifrac</span>
                        <ul>
                            <li>
                            Stimulates collagen production and improves blood circulation.
                            </li>
                            <li>
                            Enhances the effectiveness of topical treatments when used in combination.
                            </li>
                            <li>
                            Minimal downtime and quick recovery.
                            </li>
                        </ul>

                        <div>
                        <img src={millifrac} alt="" />
                        </div>
                        </>
                    )}
                    <span className="show-more" onClick={() => handleToggle('section2')}>
                        {expandedSection === 'section2' ? 'Show Less' : '...Show More'}
                    </span>
                </div>

                
                <div className="service-page-content-div non-surgical" id="section3">
                    <h4>QR 678</h4>
                    <p>
                    <span>What is QR 678?</span> QR 678 is a revolutionary hair growth treatment that involves the injection of a proprietary blend of growth factors into the scalp. Developed by scientists, QR 678 has shown promising results in promoting hair growth and reducing hair fall, especially in Indian users.
                    </p>
                    {expandedSection === 'section4' && (
                        <>
                            <span>How Does It Work?</span>
                       <ul>
                       <li>
                       The QR 678 solution, containing a mix of growth factors, is injected into the scalp using fine needles.
                       </li>
                       <li>
                       These growth factors stimulate the hair follicles, encouraging new hair growth and reducing hair fall.
                       </li>
                       </ul>
                        <span>Benefits of QR 678</span>
                        <ul>
                            <li>
                            Non-surgical and minimally invasive.
                            </li>
                            <li>
                            Promotes natural hair growth and reduces hair fall.
                            </li>
                            <li>
                            Clinically proven to be effective.
                            </li>
                        </ul>
                        </>
                    )}
                    <span className="show-more" onClick={() => handleToggle('section4')}>
                        {expandedSection === 'section4' ? 'Show Less' : '...Show More'}
                    </span>
                </div>


                <div className="service-page-content-div non-surgical" id="section4">
                    <h4>Exosomes Injections</h4>
                    <p>
                    <span>What are Exosomes Injections?</span> Exosomes are tiny vesicles that contain proteins, lipids, and genetic material. They play a crucial role in cell communication and regeneration. Exosome therapy involves injecting concentrated exosomes into the scalp to promote hair growth.
                    </p>
                    {expandedSection === 'section5' && (
                        <>
                            <span>How Does It Work?</span>
                       <ul>
                      <li>
                      Exosomes are derived from stem cells and concentrated into a solution.
                      </li>
                      <li>
                      This solution is injected into the scalp, where the exosomes deliver their regenerative properties to the hair follicles.
                      </li>
                      <li>
                      The growth factors and proteins in exosomes stimulate hair growth and improve scalp health.
                      </li>
                       </ul>
                        <span>Benefits of Exosomes Injections</span>
                        <ul>
                            <li>
                            Highly potent with regenerative properties.
                            </li>
                            <li>
                            Promotes new hair growth and enhances scalp health.
                            </li>
                            <li>
                            Minimally invasive with no downtime.
                            </li>
                        </ul>
                        </>
                    )}
                    <span className="show-more" onClick={() => handleToggle('section5')}>
                        {expandedSection === 'section5' ? 'Show Less' : '...Show More'}
                    </span>
                </div>

                <div className="service-page-content-div non-surgical" id="section5">
                    <h4>G-Cell (Autologous Stem Cell Injection)</h4>
                    <p>
                    <span>What is G-Cell? </span>G-Cell is an innovative treatment that involves the use of autologous stem cells to stimulate hair growth. Autologous stem cells are derived from your own body, making the treatment safe and effective.
                    </p>
                    {expandedSection === 'section6' && (
                        <>
                            <span>How Does It Work?</span>
                       <ul>
                     <li>
                     A small sample of fat tissue is taken from your body and processed to extract stem cells.
                     </li>
                     <li>
                     These stem cells are then injected into the scalp to stimulate hair growth and improve the health of the hair follicles.
                     </li>

                       </ul>
                        <span>Benefits of G-Cell</span>
                        <ul>
                            <li>
                            Uses your own stem cells, reducing the risk of rejection.
                            </li>
                            <li>
                            Promotes natural hair growth and improves scalp health.
                            </li>
                            <li>
                            Minimally invasive with no downtime.
                            </li>
                        </ul>
                        </>
                    )}
                    <span className="show-more" onClick={() => handleToggle('section6')}>
                        {expandedSection === 'section6' ? 'Show Less' : '...Show More'}
                    </span>
                </div>


                <div className="service-page-content-div non-surgical" id="section6">
                    <h4>Mesotherapy</h4>
                   <p>
                   <span>What is Mesotherapy?</span> Mesotherapy is a non-surgical treatment that involves injecting a customized blend of vitamins, minerals, and medications into the scalp. This treatment nourishes the hair follicles and stimulates hair growth.
                   </p>
                    {expandedSection === 'section7' && (
                        <>
                            <span>How Does It Work?</span>
                       <ul>
                     <li>
                     A series of microinjections are administered into the scalp, delivering a tailored mix of nutrients and medications directly to the hair follicles.
                     </li>
                     <li>
                     The treatment improves blood circulation, nourishes the scalp, and stimulates hair growth.
                     </li>

                       </ul>
                        <span>Benefits of Mesotherapy</span>
                        <ul>
                            <li>
                            Provides essential nutrients to the hair follicles.
                            </li>
                            <li>
                            Improves blood circulation and scalp health.
                            </li>
                            <li>
                            Minimally invasive with no downtime.
                            </li>
                        </ul>

                        <div>
                            <img src={mesoTherapy} alt="" />
                        </div>
                        </>
                    )}
                    <span className="show-more" onClick={() => handleToggle('section7')}>
                        {expandedSection === 'section7' ? 'Show Less' : '...Show More'}
                    </span>
                </div>

                <div className="service-page-content-div non-surgical">

                    <h4>What to Expect During and After Treatment</h4>
                    <p>
                    At Evoke, we prioritize your comfort and care throughout the treatment process. Here's what you can expect during and after your minimally invasive procedure:
                    </p>
                {expandedSection === 'section8' && (
                        <>

                        <ol type='a'>
                            <li>
                            <span>Consultation and Assessment</span>
                            </li>
                            <ul>
                                <li>
                                Our experienced dermatologists will conduct a thorough assessment of your hair and scalp.
                                </li>
                                <li>
                                Based on your specific needs, we will recommend the most suitable minimally invasive procedure for you.
                                </li>
                            </ul>

                            <li>
                            <span>Treatment Procedure</span>
                            </li>
                            <ul>
                                <li>
                                The procedure is performed in our state-of-the-art clinic by our skilled professionals.
                                </li>
                                <li>
                                We use advanced technology and techniques to ensure minimal discomfort and optimal results.
                                </li>
                            </ul>

                            <li>
                            <span>Post-Treatment Care</span>
                            </li>
                            <ul>
                                <li>
                                Our team will provide you with detailed instructions on how to care for your scalp after the procedure.
                                </li>
                                <li>
                                It's important to follow these instructions to maximize the effectiveness of the treatment and ensure a smooth recovery.
                                </li>
                            </ul>

                            <li>
                            <span>Follow-Up Consultations</span>
                            </li>
                            <ul>
                                <li>
                                We offer free follow-up consultations to monitor your progress and make any necessary adjustments to your treatment plan.
                                </li>
                                <li>
                                These consultations are an opportunity to address any concerns and ensure you are achieving your desired results.
                                </li>
                            </ul>

                        </ol>
                            
                        </>
                    )}
                    <span className="show-more" onClick={() => handleToggle('section8')}>
                        {expandedSection === 'section8' ? 'Show Less' : '...Show More'}
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

export default MinimallyInvasive;