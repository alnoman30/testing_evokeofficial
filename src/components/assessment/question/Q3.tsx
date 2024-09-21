import React, { useState } from "react";
import logo from '../../../assets/HeaderLogo.svg';
import './Q3.css';
import { useNavigate } from "react-router-dom";
import backArrowImg from '../../../assets/booking/MobileBackArrow.svg';
import hairImg1 from '../../../assets/Assessment/Scalp/scalp1.svg';
import hairImg2 from '../../../assets/Assessment/Scalp/scalp2.svg';
import hairImg3 from '../../../assets/Assessment/Scalp/scalp3.svg';
import hairImg4 from '../../../assets/Assessment/Scalp/scalp4.svg';
import hairImg5 from '../../../assets/Assessment/Scalp/scalp5.svg';
import hairImg6 from '../../../assets/Assessment/Scalp/scalp6.svg';
import hairImg7 from '../../../assets/Assessment/Scalp/scalp7.svg';

interface Question {
    question: string;
    type: 'text' | 'file' | 'radio';
    options?: string[];
    placeholder?: string;
  }
  interface HairTypeOption {
    label: string;
    value: string;
    image?: string;
  }
  const hairTypeOptions: HairTypeOption[] = [
    { label: 'Stage 1', value: 'stage1',image : hairImg1 },
    { label: 'Stage 2', value: 'stage2',image : hairImg2 },
    { label: 'Stage 3', value: 'stage3' ,image : hairImg3},
    { label: 'Stage 4', value: 'stage4',image : hairImg4 },
    { label: 'Stage 5', value: 'stage5' ,image : hairImg5},
    { label: 'Coin size patch', value: 'coinSizePatch' ,image : hairImg6},
    { label: 'Stage 6', value: 'stage6',image : hairImg7},
  ];
  const questions: Question[] = [
    { question: 'Select your hair type from the images below.', type: 'radio', options: ['Male', 'Female'] }];

const Q3: React.FC = () => {
    const [answer, setAnswer] = useState('');
    const navigate = useNavigate();
    

    const [selectedHairType, setSelectedHairType] = useState<string>('stage1');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSelectedHairType(event.target.value);
      setAnswer(event.target.value);
    };

    const handleNext = () => {
        
        const newData = { question: questions[0].question, answer };
        console.log(newData);
        
         navigate('/q4', { state: newData });
      };

      const logoClick = () => {
        window.scrollTo(0, 0);
        navigate('/q2');
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

            <div className="question-div div3">
                <h1>Question 3</h1>
            <span className="question">{questions[0].question}</span>
            <div className="answer3">
                <div className="q3-options">

            {hairTypeOptions.map((option) => (
          <label key={option.value} className="hair-type-option">
            <input
              type="checkbox"
              name="hairType"
              value={option.value}
              checked={selectedHairType === option.value}
              onChange={handleChange}
            />
            <span className="option-label">{option.label}</span>
            <span className="input-img">
            <img src={option.image} alt='Hair Type Image'/>
            {/* <img src={hairImg} alt='Hair Type Image'/> */}

            </span>
          </label>
        ))}
                </div>
            </div>

            <span onClick={handleNext} className="next-btn btn3">Next</span>
            </div>


            
            </div>

      
    </div>
  );
};

export default Q3;