import React from "react";
import locationImg from '../../assets/location.svg'
// import Ifetar from '../../assets/DoctorPage/Ifetar.svg'
import prashant from '../../assets/DoctorPage/Prashant.svg'
// import callIcon from '../../assets/CallNow.svg'
import logo from '../../assets/HeaderLogo.svg';
import { useNavigate } from "react-router-dom";
import './Sunakshi.css'
import MainFooter from "../footer/MainFooter";
import callIcon from '../../assets/CallNow.svg'

const Prashant: React.FC = () => {

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
                <h1>Dr. Prashant Bharti</h1>
            </div>

            <div className="image-content">
                <img className="doc-image" src={prashant} alt="Dr. Sunakshi Singh" />
                <div className="doc-content">

                <p>MBBS, MD (AIIMS, New Delhi), DNB, MRCP (SCE), UK</p>
                <div >
                    {/* <span className="doc-tag-button">6+ years experience</span> */}
                    <span className="doc-tag-button">650+ hair transplants</span>
                </div>
                <p><strong>Education:</strong> AIIMS New Delhi</p>
                <p className="loc-img">
                    <img src={locationImg} /> <strong>Evoke Clinic:</strong> 17A Ring Road, Lajpat Nagar, New Delhi
                </p>
                </div>
            </div>

            <div className="doctor-content-details">
                

                <h2>About Dr. Prashant Bharti:</h2>
           
           <p>
           Dr. Prashant Bharti is an esteemed dermatologist with a robust background in dermatology and hair transplant surgery. He holds an MBBS from the University College of Medical Sciences (UCMS), New Delhi, and an MD in Dermatology and Venereology from AIIMS, New Delhi. Further enhancing his qualifications, Dr. Prashant has earned a <span className="doc-highlight">DNB and MRCP (SCE) from the Royal College of Physicians of Edinburgh, UK</span>.
           </p>

           <p>
           Dr. Prashant's professional journey is marked by significant roles, including serving as a Junior and Senior Resident in Dermatology & Venereology at AIIMS, New Delhi, and Guru Gobind Singh Govt. Hospital, New Delhi. He has performed and assisted in <span className="doc-highlight">around 650 hair transplant surgeries</span>. </p> 
           <p>
           In addition to his clinical practice, Dr. Prashant has expertise in various cosmetic procedures such as Botox, fillers, thread lifts, and chemical peels. His skills encompass a wide range of dermatological treatments, including vitiligo surgeries, acne scar surgeries, mole and cyst removal, and advanced techniques in dermatosurgery.
           </p>
           <p>
           Dr. Prashant's commitment to continuous learning and excellence in patient care is evident through his diverse skill set and clinical accomplishments. His dedication makes him a respected figure in the field of dermatology and hair transplant surgery.
           </p>

                <div className="rating">
                    <span>⭐⭐⭐⭐⭐</span>
                    <span><strong>4.5/5</strong> Rated by 1200 patients</span>
                </div>
            </div>

            <div className="book-clinic-visit">
                <div>
                <p>To schedule an appointment with <strong>Dr. Prashant Bharti</strong>, please click and schedule the Appointment.</p>
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

export default Prashant;