import React from 'react';
import './AssessmentCompletion.css';
import bar from '../../assets/Assessment/BarComplete.svg';
import completionIcon from '../../assets/Assessment/AssessmentCompletionIcon.svg';
import logo from '../../assets/HeaderLogo.svg';
import { useNavigate } from 'react-router-dom';
import backArrowImg from '../../assets/booking/MobileBackArrow.svg';
import barMob from '../../assets/Assessment/BarCompleteMob.svg';

const AssessmentCompletion: React.FC = () => {
   
    const navigate = useNavigate();

    
    const handleBackHome = () => {
        navigate('/');
      };

    const logoClick = () => {
        window.scrollTo(0, 0);
        navigate('/assessment-details');
      };
  

    return (
        <div className='assessment-contain'>
            <header className="assessment-header q1-header">
                <div className="assessment-logo">
                    <img src={logo} alt="Logo" />
                </div>
            </header>

            <div className='backArrow'>
          <img onClick={logoClick} src={backArrowImg} alt="Back Arrow" />
          <span>All done!</span>
        </div>

            <div className='bar'>
                <span className='step12'>Step 2/2: Completion message</span>
                <span className='web-bar'>
                    <img src={bar} alt="Progress bar" />
                </span>

                <span className='mob-bar'>
                    <img src={barMob} alt="Progress bar" />
                </span>
            </div>

            <div className='assessment-completion'>


                {/* <div className='completion-icon'>
                    <img src={completionIcon} alt="Completion Icon" />
                    </div> */}

                    <div className='form2-content'>
          <img src={completionIcon} alt="Booking Confirmation" />
          <div className='form2-heading confirmation'>
            <span>Thank you for completing your</span>
            <span>hair assessment.</span>
          </div>
            <div className='form2-subheading'>
                <span>Our hair specialists will call you back shortly</span>
                <span>with their recommendations..</span>
                </div>
          <div className='backhome-button completion-btn' onClick={handleBackHome} >
            <span>Back To Home Page</span>
          </div>
        </div>
                
                
                    
            </div>
        </div>
    );
};

export default AssessmentCompletion;
