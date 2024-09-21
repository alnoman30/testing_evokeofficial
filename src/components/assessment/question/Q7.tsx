import React, { useState } from "react";
import logo from '../../../assets/HeaderLogo.svg';
import './Q7.css';
import { useNavigate } from "react-router-dom";
import Dropzone, { FileWithPath } from 'react-dropzone';
import uploadIcon from '../../../assets/Assessment/uploadicon.svg';
import backArrowImg from '../../../assets/booking/MobileBackArrow.svg';

interface Question {
    question: string;
    type: 'text' | 'file' | 'radio';
    options?: string[];
    placeholder?: string;
}

const questions: Question[] = [
    { question: 'Upload your scalp photo', type: 'radio' }
];

const Q7: React.FC = () => {
    // const [answer, setAnswer] = useState('');
    const [file, setFile] = useState<FileWithPath | null>(null);
    // const [uploadProgress, setUploadProgress] = useState(0);
    const navigate = useNavigate();

    const handleNext = () => {
        const newData = { question: questions[0].question, file };
        console.log(newData);
        navigate('/assessment-completion', { state: newData });
    };

    const logoClick = () => {
        window.scrollTo(0, 0);
        navigate('/q6');
    };

    const handleDrop = (acceptedFiles: FileWithPath[]) => {
        const uploadedFile = acceptedFiles[0];
        setFile(uploadedFile);
        // setAnswer(uploadedFile.name);

        // Simulate upload progress
        // const uploadInterval = setInterval(() => {
        //     setUploadProgress((prevProgress) => {
        //         if (prevProgress >= 100) {
        //             clearInterval(uploadInterval);
        //             return 100;
        //         }
        //         return prevProgress + 10;
        //     });
        // }, 200);
    };

    return (
        <div className="question-container">
            <header className="assessment-header q1-header">
                <div className="assessment-logo">
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

                <div className="question-div div3 div7">
                    <h1>Question 7</h1>
                    <span className="question">{questions[0].question}</span>
                    <span className="q7-para">
                        <p>After you submit the assessment, this photo is used by: <br />1. Doctors - To analyze and prescribe your kit’s dosage.
                            <br /> 2. Hair coaches- To track your hair progress.</p>
                    </span>
                    <div className="answer4 answer7">
                        <Dropzone onDrop={handleDrop}>
                            {({ getRootProps, getInputProps }) => (
                                <section className="dropzone">
                                    <div {...getRootProps()} className="dropzone-box">
                                        <input {...getInputProps()} />
                                        {file ? (
                                            file.type.startsWith('image/') && (
                                                <img src={URL.createObjectURL(file)} alt="Preview" className="image-preview" />
                                            )
                                        ) : (
                                            <><div className="dragdrop-container">

                                           
                                            <span className="dragndrop">
                                                    <img src={uploadIcon} alt="Upload icon" />
                                                    <p>Drag and drop here</p>
                                                </span>
                                                <span>or</span>
                                                <span className="browse-btn">Select file</span>
                                                </div>
                                                
                                                </>
                                        )}
                                    </div>
                                </section>
                            )}
                        </Dropzone>
                        {/* {file && (
                            <div className="file-preview">
                                <p>File: {file.name}</p>
                                <p>Type: {file.type}</p>
                                <div className="progress-bar">
                                    <div className="progress" style={{ width: `${uploadProgress}%` }}>
                                        {uploadProgress}%
                                    </div>
                                </div>
                            </div>
                        )} */}
                    </div>
                    <span onClick={handleNext} className="next-btn btn7">Next</span>
                </div>
            </div>
        </div>
    );
};

export default Q7;
