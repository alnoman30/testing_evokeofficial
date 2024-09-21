import React from "react";
import locationImg from '../../assets/location.svg'
import callIcon from '../../assets/CallNow.svg'
import Ifetar from '../../assets/DoctorPage/Ifetar.svg'
// import callIcon from '../../assets/CallNow.svg'
import logo from '../../assets/HeaderLogo.svg';
import { useNavigate } from "react-router-dom";
import './Sunakshi.css'
import MainFooter from "../footer/MainFooter";

const Iftekhar: React.FC = () => {

    const navigate = useNavigate();

    const logoClick = () => {
        // Improved approach using useNavigate hook
        // navigate to the Home page
        //with smooth scroll
        window.scrollTo(0, 0);
        navigate('/');
    };


    const bookClinicVisit = () => {
        navigate('/booking-page');
    }

    const callnow = () => {
        // Improved approach using window.location.href
        window.location.href = `tel:+919870588044`; // Replace with your actual phone number in E.164 format (e.g., +1234567890)
      };

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

            <div className="doc-detail-container">
            <div>
                <h1>Dr. Iftekhar Khan</h1>
            </div>

            <div className="image-content">
                <img className="doc-image" src={Ifetar} alt="Dr. Sunakshi Singh" />
                <div className="doc-content">

                <p>MBBS, MD, MRCP SCE(Dermatology)</p>
                <div >
                    <span className="doc-tag-button">6+ years experience</span>
                    {/* <span className="doc-tag-button">1,000+ hair transplants</span> */}
                </div>
                <p><strong>Education:</strong> AIIMS New Delhi</p>
                <p className="loc-img">
                    <img src={locationImg} /> <strong>Evoke Clinic:</strong> 17A Ring Road, Lajpat Nagar, New Delhi
                </p>
                </div>
            </div>

            <div className="doctor-content-details">
                

                <h2>About Dr. Iftekhar Khan:</h2>
                <p>
                Dr. Iftekhar Khan is an accomplished dermatologist with extensive experience in dermatology and hair transplant surgery. Dr. Iftekhar completed his <span className="doc-highlight"> MBBS and MD in Dermatology from AIIMS, Delhi,</span> where he gained a solid foundation in dermatology and clinical practices. He further enhanced his expertise by completing a hair transplant workshop at FUE Europe in Turkey and a <span className="doc-highlight">certificate course in facial aesthetics at IMMAST Mumbai</span>.
                </p>
                <p>
                Throughout his career, Dr. Iftekhar has been actively involved in clinical practice and academic research. He has published several papers in indexed journals, showcasing his contributions to dermatological science. His notable publications include studies on innovative dermatological treatments and case reports on rare dermatological conditions.
                </p>

                <p>
                Dr. Iftekhar has presented his research at various national and international conferences, earning recognition for his work. His presentations have covered a range of topics, from phototherapy in vitiligo to advanced techniques in dermatosurgery.
                </p>

                <p>
                Dr. Iftekhar's dedication to continuous learning and his commitment to patient care make him a highly respected professional in the field of dermatology and hair transplant surgery.
                </p>

                <div className="rating">
                    <span>⭐⭐⭐⭐⭐</span>
                    <span><strong>4.5/5</strong> Rated by 1200 patients</span>
                </div>
            </div>

            <div className="book-clinic-visit">
                <div>
                <p>To schedule an appointment with <strong>Dr. Iftekhar Khan</strong>, please click and schedule the Appointment.</p>
                <button onClick={bookClinicVisit}>Book Clinic Visit</button>
                </div>
            </div>
        </div>


   <div className="doc-footer">
        <MainFooter />
    </div>       
        </div>
    );
}

export default Iftekhar;