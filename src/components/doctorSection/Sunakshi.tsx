import React from "react";
import locationImg from '../../assets/location.svg'
import sunakshi from '../../assets/DoctorPage/Sunakshi.svg'
// import callIcon from '../../assets/CallNow.svg'
import logo from '../../assets/HeaderLogo.svg';
import { useNavigate } from "react-router-dom";
import './Sunakshi.css'
import MainFooter from "../footer/MainFooter";
import callIcon from '../../assets/CallNow.svg'

const Sunakshi: React.FC = () => {

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


    const bookClinicVisit = () => {
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

            <div className="doc-detail-container">
            <div>
                <h1>Dr.Sunakshi Singh</h1>
            </div>

            <div className="image-content">
                <img className="doc-image" src={sunakshi} alt="Dr. Sunakshi Singh" />
                <div className="doc-content">

                <p>MBBS, MD (Dermatology)</p>
                <div >
                    <span className="doc-tag-button">15+ years experience</span>
                    <span className="doc-tag-button">1,000+ hair transplants</span>
                </div>
                <p><strong>Education:</strong> BP Koirala Institute of Health Sciences (affiliated with AIIMS) University of Greifswald, Germany.</p>
                <p className="loc-img">
                    <img src={locationImg} /> <strong>Evoke Clinic:</strong> 17A Ring Road, Lajpat Nagar, New Delhi
                </p>
                </div>
            </div>

            <div className="doctor-content-details">
                

                <h2>About Dr. Sunakshi Singh:</h2>
                <p>
                    Dr. Sunakshi is a dynamic hair transplant surgeon with over nine years of experience in dermatology,
                    currently practicing in Delhi. Her robust career includes collaborations with esteemed corporations
                    like Kaya, VLCC, and Pristyn Care. She has honed her expertise internationally, acquiring her hair
                    transplant fellowship and training from both domestic and overseas institutions.
                </p>
                <p>
                    Accredited with <span className="doc-highlight">over 1000 successful Follicular Unit Extraction (FUE) procedures,</span> Dr. Sunakshi is
                    also adept at administering anti-aging treatments such as PRP, fillers, and BOTOX injections,
                    alongside utilizing energy-based devices like lasers. Her academic credentials include a
                    postgraduate degree in dermatology, earned from BPKIHS—a program certified by AIIMS, in 2014.
                    Additionally, she holds a Fellowship in Aesthetic Medicine from the University of Greifswald, Germany,
                    obtained in 2015.
                </p>

                <div className="rating">
                    <span>⭐⭐⭐⭐⭐</span>
                    <span><strong>4.5/5</strong> Rated by 1200 patients</span>
                </div>
            </div>

            <div className="book-clinic-visit">
                <div>
                <p>To schedule an appointment with <strong>Dr. Sunakshi Singh</strong>, please click and schedule the Appointment.</p>
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

export default Sunakshi;