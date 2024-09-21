import React from "react";
import locationImg from '../../assets/location.svg'
import Shayista from '../../assets/DoctorPage/Shayista.svg'
// import callIcon from '../../assets/CallNow.svg'
import logo from '../../assets/HeaderLogo.svg';
import { useNavigate } from "react-router-dom";
import './Sunakshi.css'
import MainFooter from "../footer/MainFooter";
import callIcon from '../../assets/CallNow.svg'

const Shastiya: React.FC = () => {

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
                <h1>Dr.Shayista Kazi</h1>
            </div>

            <div className="image-content">
                <img className="doc-image" src={Shayista} alt="Dr. Sunakshi Singh" />
                <div className="doc-content">

                <p>MBBS, MD, DNB, FRGUHS (Dermatosurgeon)</p>
                <div >
                    <span className="doc-tag-button">6+ years experience</span>
                    {/* <span className="doc-tag-button">1,000+ hair transplants</span> */}
                </div>
                <p><strong>Education:</strong> Sapthagiri Institute of Medical Sciences, Bangalore, Shimoga Institute of Medical Sciences, Research Center, Sree Balaji Medical College and Hospital, Chennai</p>
                <p className="loc-img">
                    <img src={locationImg} /> <strong>Evoke Clinic:</strong> 17A Ring Road, Lajpat Nagar, New Delhi
                </p>
                </div>
            </div>

            <div className="doctor-content-details">
                

                <h2>About Dr. Shayista Kazi:</h2>
                <p>
                Dr. Shayista Kazi is a distinguished dermatologist with over 6 years of experience in the field. She is a specialist in Dermatology, Venereology, and Leprosy, holding an MBBS, MD, and DNB.
                </p>
                <p>
                Dr. Shayista's academic journey includes an MD in Dermatology from Shimoga Institute of Medical Sciences and a DNB from Sree Balaji Medical College and Hospital, Chennai. She further honed her skills with a fellowship in Dermatosurgery from the Rajiv Gandhi University of Health Sciences, Bangalore.
                </p>

                <p>
                With a strong interest in cosmetic dermatology, Dr. Shayista is proficient in non-surgical facial rejuvenation, acne scar revision surgeries, and dermatologic lasers for pigment and tattoo removal. She has performed <span className="doc-highlight">over 450 dermatosurgeries and 200 laser procedures,</span> including hair removal and fractional lasers for skin rejuvenation and tightening.
                </p>

                <p>
                Her training spans across prestigious institutions, including the Karnataka Institute of Medical Sciences and advanced laser training at Dr. Arpitha Pawadshettar’s Clinic of Aesthetic Dermatology. She has also received specialized training in pediatric dermatology and has attended numerous workshops on Botox, fillers, and advanced dermatologic procedures.  Dr. Shayista is a life member of Indian Academy of Dermatology, Venereology and Leprology and has a publication “A study of clinical Dermoscopic and histopathological correlation of clinically suspected ashy dermatoses: A cross-sectional study at a tertiary care center” under her name.
                </p>

                <div className="rating">
                    <span>⭐⭐⭐⭐⭐</span>
                    <span><strong>4.5/5</strong> Rated by 1200 patients</span>
                </div>
            </div>

            <div className="book-clinic-visit">
                <div>
                <p>To schedule an appointment with <strong>Dr.Shayista Kazi</strong>, please click and schedule the Appointment.</p>
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

export default Shastiya;