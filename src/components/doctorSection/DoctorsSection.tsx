import React from 'react';
import './DoctorsSection.css';
import sunakshi from '../../assets/DoctorPage/Sunakshi.svg'
import iftekhar from '../../assets/DoctorPage/Ifetar.svg'
import poonam from '../../assets/DoctorPage/Poonam.svg'
import shayitsa from '../../assets/DoctorPage/Shayista.svg'
import prashant from '../../assets/DoctorPage/Prashant.svg';
import { useNavigate } from 'react-router-dom';

const DoctorCard: React.FC<{ name: string; description: string; imageUrl: string, tags: string[], post: string,cardIndex: number, link:string }> = ({ name, description, imageUrl,tags, post,cardIndex , link}) => {
  const navigate = useNavigate(); // Declare the navigate function here

  return (
    <div className="doctor-card">
      <img src={imageUrl} alt={name} className="doctor-image" />
      
        <div className={`name-post ${cardIndex === 2 ? 'fourth-card' : ''}`}>
        <h3>{name}</h3>
        <span style={{
          color: '#084237',
          fontSize: '14px',
        }}>{post}</span>

        </div>
      <div className="doctor-details">
      <div className="doc-tags">
        {tags.map((tag, index) => (
          <span key={index} className="doc-tag-button">{tag}</span>
        ))}
      </div>
        <p>{description}</p>
        {/* <div className="verified">
          <img src="https://img.icons8.com/ios-filled/50/000000/verified-account.png" alt="Verified" />
          Verified
        </div> */}
      </div>
      <div  className=" doc-link" onClick={() => {
                // Improved approach using useNavigate hook
                // navigate to the Personalized Medicines page
                //with smooth scroll
                window.scrollTo(0, 0);
                 navigate(link);
              }
              }>Learn more →</div>
    </div>
  );
};

const DoctorsSection: React.FC = () => {
  const doctors = [
    {
      name: 'Dr. Sunakshi Singh',
      post : 'MBBS, MD Dermatology',
      tags: ['15+ years experience', '1,000+ hair transplants'],
      description: 'BP Koirala Institute of Health Sciences (affiliated with AIIMS) University of Greifswald, Germany',
      imageUrl: sunakshi,
      link: '/sunakshi'
    },
    {
      name: 'Dr. Poonam Bhasne',
      post : 'DNB Dermatology',
      tags: ['20+ years experience', '1,000+ hair transplants'],
      description: 'Moulana Azad Medical College Vardhman Mahavir Medical College & Safdarjung Hospital AIIMS New Delhi N.S.C Singapore',
      imageUrl: poonam,
      link: '/poonam'
    },
    {
      name: 'Dr. Shayista Kazi',
      post : 'MBBS, MD, DNB, FRGUHS (Dermatosurgeon)',
      tags: ['6+ years experience'],
      description: 'Sapthagiri Institute of Medical Sciences, Bangalore Shimoga Institute of Medical Sciences, Research Center Sree Balaji Medical College and Hospital, Chennai',
      imageUrl: shayitsa,
      link: '/shayista'
    },
    {
      name: 'Dr. Iftekhar Khan',
      post : 'MBBS, MD Dermatology,DNB,MRCP (SCE)',
      tags: ['6+ years experience'],
      description: ' AIIMS New Delhi, a hair transplant workshop at FUE Europe in Turkey and a certificate course in facial aesthetics at IMMAST Mumbai.',
      imageUrl: iftekhar,
      link: '/iftekhar'
    },
    {
      name: 'Dr. Prashant Bharti',
      post : 'MBBS, MD, DNB, MRCP (SCE), UK ',
      tags: ['10+ years experience','650+ hair transplants'],
      description: ' MBBS(UCMS) New Delhi, and an MD in Dermatology and Venereology from AIIMS, New Delhi, DNB and MRCP (SCE) from the Royal College of Physicians of Edinburgh, UK.',
      imageUrl: prashant,
      link: '/prashant'
    },
  ];

  return (
    <div className="doctors-section">
      <div className='doc-head'>
      <h2>Meet Our Doctors</h2>
      <p>Our team of highly skilled and experienced doctors is dedicated to providing you with the best hair health solutions. Learn more about the experts who will be guiding your journey to healthier hair.</p>
      </div>
      <div className="doctor-cards-container">
        {doctors.map((doctor, index) => (
          <DoctorCard key={index} {...doctor} cardIndex={index}/>
        ))}
      </div>
      
    </div>
  );
};

export default DoctorsSection;
