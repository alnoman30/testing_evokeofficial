// src/components/EvokeSolutions.tsx
import React from 'react';
import './Disorder.css';
import HairLossImg from '../../assets/HairLoss.svg';
import HairThinningImg from '../../assets/HairThin.svg';
import DandruffImg from '../../assets/Dandruff.svg';
import ItchyScalpImg from '../../assets/Itchy.svg';
import { useNavigate } from 'react-router-dom';
// import ComparisonTable from './ComparisonTable';


const solutions = [
    { title: 'Hair Loss', image: HairLossImg },
    { title: 'Hair Thinning', image: HairThinningImg },
    { title: 'Dandruff', image: DandruffImg },
    { title: 'Itchy, Scaly Scalp', image: ItchyScalpImg },
  
];

const Disorder: React.FC = () => {
    const navigate = useNavigate();

    const bookAppointment = () => {
        // Improved approach using useNavigate hook
        // navigate to the booking page
        navigate('/booking-page');
      }
  return ( 
    <><div className="disorder">
          <h2 className="disorder-title">Uncover Your Hair Issues</h2>
          <p className="disorder-description">
          Identify and address the root causes of your hair concerns with our expert solutions. Discover tailored treatments for every hair issue.
          </p>
          <div className="disorder-grid">
              {solutions.map((solution, index) => (
                  <div key={index} className="disorder-card">
                      <img src={solution.image} alt={solution.title} className="disorder-image" />
                      <span className="disorder-card-title">{solution.title} <span onClick={bookAppointment} style={{
                          color: '#084237',
                            cursor: 'pointer',
                      }}> →</span></span>
                      {/* <a href={solution.link} className="disorder-link">Learn more →</a> */}
                  </div>
              ))}
          </div>

          <button onClick={bookAppointment} className="disorder-button">Book Clinic Visit</button>

      </div></>
    
  );
};

export default Disorder;
