import React, { useState } from "react";
import logo from '../../../assets/HeaderLogo.svg';
import './Q2.css';
import { useNavigate } from "react-router-dom";
import backArrowImg from '../../../assets/booking/MobileBackArrow.svg';

interface Question {
    question: string;
    type: 'text' | 'file' | 'radio';
    options?: string[];
    placeholder?: string;
  }

  const questions: Question[] = [
    { question: 'Select Your Gender', type: 'radio', options: ['Male', 'Female'] }];

const Q2: React.FC = () => {
    const [answer, setAnswer] = useState('');
    const [selectedGender, setSelectedGender] = useState(''); 
    const navigate = useNavigate();
    

    const handleGenderChange = (event:any) => {
        setSelectedGender(event.target.value); // Update state on change
        setAnswer(event.target.value); // Update answer
      };

    const handleNext = () => {
        
        const newData = { question: questions[0].question, answer };
        console.log(newData);
        
         navigate('/q3', { state: newData });
      };

      const logoClick = () => {
        window.scrollTo(0, 0);
        navigate('/q1');
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

            <div className="question-div div2">
                <h1>Question 2</h1>
            <span className="question">{questions[0].question}</span>
            <div className="answer2">
                <div className="inputs">
                <span className="input-span">
            <input 
            type="checkbox"
            name="gender"
            value='male'
            checked={selectedGender === 'male'} // Set checked state
            onChange={handleGenderChange}
             />
                <label htmlFor="male">Male</label>
                </span>

                <span className="input-span">

             <input 
            type="checkbox"
            name="gender" // Add a name for radio group
                  value="female"
                  checked={selectedGender === 'female'} // Set checked state
                  onChange={handleGenderChange}
             />
             <label htmlFor="female">Female</label>
                </span>
                </div>
            </div>

            <span onClick={handleNext} className="next-btn btn2">Next</span>
            </div>


            
            </div>

      
    </div>
  );
};

export default Q2;