import React, { useState } from "react";
import logo from '../../../assets/HeaderLogo.svg';
import './Q4.css';
import { useNavigate } from "react-router-dom";
import backArrowImg from '../../../assets/booking/MobileBackArrow.svg';

interface Question {
    question: string;
    type: 'text' | 'file' | 'radio';
    options?: string[];
    placeholder?: string;
  }
  interface Stress {
    label: string;
    value: string;
  }
  const stress: Stress[] = [
    { label: 'None', value: 'none' },
    { label: 'Low', value: 'low' },
    { label: 'Moderate', value: 'moderate' },
    { label: 'High', value: 'high' },
    
  ];
  const questions: Question[] = [
    { question: 'How stressed are you?', type: 'radio'}];

const Q5: React.FC = () => {
    const [answer, setAnswer] = useState('');
    const navigate = useNavigate();
    

    const [selectedHairType, setSelectedHairType] = useState<string>('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSelectedHairType(event.target.value);
      setAnswer(event.target.value);
    };

    const handleNext = () => {
        
        const newData = { question: questions[0].question, answer };
        console.log(newData);
        
         navigate('/q6', { state: newData });
      };

      const logoClick = () => {
        window.scrollTo(0, 0);
        navigate('/q4');
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

            <div className="question-div div3 div4">
                <h1>Question 5</h1>
            <span className="question">{questions[0].question}</span>
            <div className="answer4">
                <div className="q4-options">

            {stress.map((option) => (
          <label key={option.value} className="dandruf-type-option">
            <input
              type="checkbox"
              name="hairType"
              value={option.value}
              checked={selectedHairType === option.value}
              onChange={handleChange}
            />
            <span className="dandruf-option-label">{option.label}</span>
          </label>
        ))}
                </div>
            </div>

            <span onClick={handleNext} className="next-btn btn4">Next</span>
            </div>


            
            </div>

      
    </div>
  );
};

export default Q5;