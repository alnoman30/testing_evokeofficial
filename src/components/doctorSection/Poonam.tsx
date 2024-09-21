import React from "react";
import locationImg from '../../assets/location.svg'
import poonam from '../../assets/DoctorPage/Poonam.svg'
// import callIcon from '../../assets/CallNow.svg'
import logo from '../../assets/HeaderLogo.svg';
import { useNavigate } from "react-router-dom";
import './Sunakshi.css'
import MainFooter from "../footer/MainFooter";
import callIcon from '../../assets/CallNow.svg'

const Poonam: React.FC = () => {

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
                    <h1>Dr.Poonam Bhasne</h1>
                </div>

                <div className="image-content">
                    <img className="doc-image" src={poonam} alt="Dr. Sunakshi Singh" />
                    <div className="doc-content">

                        <p>MBBS, DNB Dermatology</p>
                        <div >
                            <span className="doc-tag-button">20+ years experience</span>
                            <span className="doc-tag-button">1,000+ hair transplants</span>
                        </div>
                        <p><strong>Education:</strong> Moulana Azad Medical College Vardhman Mahavir Medical College & Safdarjung Hospital AIIMS New Delhi N.S.C Singapore</p>
                        <p className="loc-img">
                            <img src={locationImg} /> <strong>Evoke Clinic:</strong> 17A Ring Road, Lajpat Nagar, New Delhi
                        </p>
                    </div>
                </div>

                <div className="doctor-content-details">


                    <h2>About Dr.Poonam Bhasne:</h2>

                    <p>
                        Dr. Poonam is a National Board certified dermatologist and fellowship-trained cosmetic and laser expert with vast experience of 10 years. Currently, she is a Consultant Dermatologist at the <span className="doc-highlight">Batra hospital & Medical Research Centre,</span> while also practicing at her own award winning clinic, House of Aesthetica.
                    </p>
                    <p>
                    She received her graduate doctoral degree in medicine from the prestigious Maulana Azad Medical College (MAMC), New Delhi. Dr. Poonam completed her dermatology residency at Safdarjung Hospital and Vardhaman Mahavir Medical College, which has one of the best dermatology departments in the country. She underwent further training in Skin surgeries and Lasers at the <span className="doc-highlight">All India Institute of Medical Sciences (AIIMS), New Delhi.</span> 
                    </p>

                    <p>
                    Following her residency, Dr. Poonam completed an Advanced Laser and dermatosurgical Fellowship in National Skin Centre, Singapore. She received the much coveted scholarship from the International Society of Dermatology to be mentored in advanced diagnostic tools at San Gallicano Dermatologica Institute, Rome. This makes her one of a very small group of dermatologists nationwide to receive these honours. She also has undergone specialized training in Paediatric dermatology by European Association of Dermatology and Venereology in Istanbul, Turkey. Being trained internationally she has special expertise in treating skin of different ethnicity. She also received ISA travel grant in 2015 to attend the conference in Munich, Germany.
                    </p>

                    <div className="rating">
                        <span>⭐⭐⭐⭐⭐</span>
                        <span><strong>4.5/5</strong> Rated by 1200 patients</span>
                    </div>
                </div>

                <div className="book-clinic-visit">
                    <div>
                        <p>To schedule an appointment with <strong>Dr.Poonam Bhasne</strong>, please click and schedule the Appointment.</p>
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

export default Poonam;