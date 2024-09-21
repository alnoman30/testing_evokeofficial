import React, { useState } from "react";
import logo from '../../../assets/HeaderLogo.svg';
import './Q1.css';
import { useNavigate } from "react-router-dom";
import backArrowImg from '../../../assets/booking/MobileBackArrow.svg';

interface Question {
    question: string;
    type: 'text' | 'file' | 'radio';
    options?: string[];
    placeholder?: string;
  }

  const questions: Question[] = [
    { question: 'How old are you?', type: 'text', placeholder: 'Enter Your Age' }];

const Q1: React.FC = () => {
    const [answer, setAnswer] = useState('');
    const navigate = useNavigate();

    const handleNext = () => {
        const data = { question: questions[0].question, answer };
        
        navigate('/q2', { state: data });
      };

      const logoClick = () => {
        window.scrollTo(0, 0);
        navigate('/assessment-page');
      };


  return (
    <div className="question-container">
          <header className="assessment-header q1-header">
        <div  className="assessment-logo">
          <img src={logo} alt="Logo" />
        </div>
      </header>


      <div className='backArrow'>
          <img onClick={logoClick} src={backArrowImg} alt="Back Arrow" />
          <span>Back</span>
        </div>


        <div className='question-content'>

            <div className="total-question">
            Total No. of Questions : 7
            </div>

            <div className="question-div div1">
                <h1>Question 1</h1>
            <span className="question">{questions[0].question}</span>
            <div className="answer">
            <input type="text" placeholder={questions[0].placeholder} value={answer}
              onChange={(e) => setAnswer(e.target.value)} />
            </div>

            <span onClick={handleNext} className="next-btn">Next</span>
            </div>


            
            </div>

      
    </div>
  );
};

export default Q1;