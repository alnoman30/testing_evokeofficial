import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/Assessment/AssessmentLogo.svg';
import mainImg from '../../assets/Assessment/MainImg.svg';
import evokeLogo from '../../assets/Assessment/evoke.svg';
import './Assessment.css';


const Assessment: React.FC = () => { 
    const navigate = useNavigate();

    const logoClick = () => {
        window.scrollTo(0, 0);
        navigate('/');
      };

      const question = () => {
        window.scrollTo(0, 0);
        navigate('/assessment-details');
      };

    return (
        <div className='assessment-container'>
            <header className="assessment-header">
        <div onClick={logoClick} className="assessment-logo">
          <img src={logo} alt="Logo" />
        </div>
        <div onClick={logoClick} className="assessment-logo-mob">
          <img src={evokeLogo} alt="Logo" />
        </div>
      </header>

      <div className='assessment-content'>
        <h1 className="assessment-heading">Hair <span>Assessment</span> </h1>
        <span className='assessment-img'> <img src={mainImg} /></span>
        <p>Assess, Understand, Transform Your Hair</p>
        <div onClick={question} className='start-btn'>Start Asessment</div>
      
      </div>
        </div>
    );

};

export default Assessment;