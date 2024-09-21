// src/components/EvokeSolutions.tsx
import React from 'react';
import './EvokeSolutions.css';
import ES1Img from '../../assets/ES1.svg';
import ES2Img from '../../assets/ES2.svg';
// import ES3Img from '../../assets/ES3.svg';
import ES4Img from '../../assets/ES4.svg';
import ES5Img from '../../assets/ES5.svg';
import whatsapp from '../../assets/Whatsapp.svg';
import { useNavigate } from 'react-router-dom';
const solutions = [
  {
    title: 'Personalized Medications',
    image: ES1Img,
    desc: '',
    link: '/personalized-medications',
  },
  {
    title: 'Minimally invasive Procedures',
    desc: '(PRP, GFC, QR 678, Autologous Stem Cell Injections)',
    image: ES2Img,
    link: '/minimally-invasive-procedures',
  },
  // {
  //   title: 'GFC',
  //   image: ES3Img,
  //   link: '#',
  // },
  {
    title: 'Hair Transplant',
    image: ES4Img,
    link: '/hair-transplant',
  },
  {
    title: 'Non-Invasive Options',
    image: ES5Img,
    link: '/non-surgical-options',
  },
];

const EvokeSolutions: React.FC = () => {

  const navigate = useNavigate();

  const openWhatsapp = () => {
    window.open('https://wa.me/919999999999', '_blank');
  };
  
  return ( 
    <div className="evoke-solutions">
      <span className='whatsapp-icon'>
        <img onClick={openWhatsapp} src={whatsapp} />
      </span>
      <h2 className="evoke-solutions-title">Evoke’s Solutions</h2>
      <p className="evoke-solutions-description">
      Explore personalized hair solutions tailored to your unique needs. From non-invasive treatments to advanced surgeries, we ensure scientifically backed, cutting-edge care for optimal results.
      </p>
      <div className="evoke-solutions-grid">
        {solutions.map((solution, index) => (
          <div key={index} className="evoke-solution-card">
            <img src={solution.image} alt={solution.title} className="evoke-solution-image" />
            <h3 className="evoke-solution-title">{solution.title } 
              {/* <br /> <span className='evoke-solution-desc'> {solution.desc}</span> */}
              </h3>
            <span  className="evoke-solution-link" onClick={() => {
              // Improved approach using useNavigate hook
              // navigate to the Personalized Medicines page
              window.scrollTo(0, 0);
               navigate(solution.link);
            }
            }>Learn more →</span>
          </div>
        ))}
        {/* <div className="evoke-solution-card evoke-highlight-card">
          <h3 className="evoke-highlight-title">Why Evoke Hair?</h3>
          <p className="evoke-highlight-description">
            Lorem ipsum dolor sit amet consectetur tur adipiscing elit semper dalaracus vel facilisis volutpat est velitom.
          </p>
          <a href="#" className="evoke-highlight-button">Why Evoke?</a>
        </div> */}
      </div>
    </div>
    
  );
};

export default EvokeSolutions;
