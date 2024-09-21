import React, { useState } from 'react';
import './AssessmentDetails.css';
import bar from '../../assets/Assessment/BarCircle.svg';
import barMob from '../../assets/Assessment/BarCircleMob.svg';
import logo from '../../assets/HeaderLogo.svg';
import { useNavigate } from 'react-router-dom';
import backArrowImg from '../../assets/booking/MobileBackArrow.svg';

const AssessmentDetails: React.FC = () => {
    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [errors, setErrors] = useState<{ fullName?: string, phoneNumber?: string }>({});
    const navigate = useNavigate();

    const validateForm = () => {
        const newErrors: { fullName?: string, phoneNumber?: string } = {};

        if (!fullName.trim()) {
            newErrors.fullName = 'Full name is required';
        }

        if (!phoneNumber.trim()) {
            newErrors.phoneNumber = 'Phone number is required';
        } else if (!/^\d{10}$/.test(phoneNumber)) {
            newErrors.phoneNumber = 'Phone number must be 10 digits';
        }

        return newErrors;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const formErrors = validateForm();

        if (Object.keys(formErrors).length === 0) {
            //alert(`Full Name: ${fullName}\nPhone Number: ${phoneNumber}`);
            // Handle form submission logic here
            console.log(fullName, phoneNumber);
            navigate('/q1');

        } else {
            setErrors(formErrors);
        }
    };

    const handleFullNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFullName(e.target.value);
        if (errors.fullName) {
            setErrors({ ...errors, fullName: '' });
        }
    };

    const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPhoneNumber(e.target.value);
        if (errors.phoneNumber) {
            setErrors({ ...errors, phoneNumber: '' });
        }
    };

    const logoClick = () => {
        window.scrollTo(0, 0);
        navigate('/assessment-page');
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
          <span>Step 1/2</span>
        </div>

            <div className='bar'>
                <span className='step12'>Step 1/2 <span >: Personal Information</span></span>
                <span className='web-bar'>
                    <img src={bar} alt="Progress bar" />
                </span>

                <span className='mob-bar'>
                    <img src={barMob} alt="Progress bar" />
                </span>
            </div>

            <div className='assessment-details'>
                <form className='assessment-booking' onSubmit={handleSubmit}>
                    <div className='form-data'>
                        <label htmlFor="fullName">Full name<span>*</span></label>
                        <input
                            type="text"
                            id="fullName"
                            value={fullName}
                            onChange={handleFullNameChange}
                            placeholder="Enter your full name"
                        />
                        {errors.fullName && <span className="error">{errors.fullName}</span>}
                    </div>
                    <div className='form-data'>
                        <label htmlFor="phoneNumber">Phone Number<span>*</span></label>
                        <input
                            type="tel"
                            id="phoneNumber"
                            value={phoneNumber}
                            onChange={handlePhoneNumberChange}
                            placeholder="Enter your phone number"
                        />
                        {errors.phoneNumber && <span className="error">{errors.phoneNumber}</span>}
                    </div>
                    <button className='assessment-form-button' type="submit">Start Assessment</button>
                </form>
            </div>
        </div>
    );
};

export default AssessmentDetails;
