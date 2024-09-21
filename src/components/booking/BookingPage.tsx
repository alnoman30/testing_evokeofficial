import React, { useState } from 'react';
import './BookingPage.css';
import logo from '../../assets/HeaderLogo.svg';
import { useNavigate } from 'react-router-dom';
import backArrowImg from '../../assets/booking/MobileBackArrow.svg';
import bookingArrow from '../../assets/booking/BookingArrow.svg';
import bookingArrowMob from '../../assets/booking/BookingArrowMob.svg';

const BookingPage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    // reason: '',
  });
  const [errors, setErrors] = useState({
    fullName: false,
    phoneNumber: false,
    // reason: false,
  });

  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    setErrors({ ...errors, [id]: false });
  };

  const validateForm = () => {
    const newErrors = {
      fullName: !formData.fullName,
      phoneNumber: !formData.phoneNumber.match(/^\d{10}$/),
      // reason: !formData.reason,
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error);
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log(formData);
      localStorage.setItem('bookingFormData', JSON.stringify(formData));

      navigate('/booking-page2');
    }
  };

  const logoClick = () => {
    window.scrollTo(0, 0);
    navigate('/');
  };

  

  return (
    <div className='booking-container'>
      <header className="booking-header">
        <div className='mobile-backArrow'>
          <img onClick={logoClick} src={backArrowImg} alt="Back Arrow" />
        </div>
        <div onClick={logoClick} className="booking-logo">
          <img src={logo} alt="Logo" />
        </div>

        <div>
          
        </div>
      </header>

      <div className='booking-form' >
        <div className='booking-form-heading'>
          <img className='booking-Arrow' src={bookingArrow} alt="Booking Arrow" />
          <img className='booking-Arrow-Mob' src={bookingArrowMob} alt="Booking Arrow" />
        </div>

        <div className='booking'>
          <div className='form-data'>
            <label htmlFor="fullName">Full name<span>*</span></label>
            <input type="text" id="fullName" placeholder="Enter your full name" value={formData.fullName} onChange={handleInputChange} />
            {errors.fullName && <span className='error'>Full name is required</span>}
          </div>
          <div className='form-data'>
            <label htmlFor="phoneNumber">Phone Number<span>*</span></label>
            <input type="tel" id="phoneNumber" placeholder="Enter your phone number" value={formData.phoneNumber} onChange={handleInputChange} />
            {errors.phoneNumber && <span className='error'>Phone number must be a 10-digit number</span>}
          </div>
        </div>

        <div className='form-data'>
          {/* <div className='form-data-select'>
            <label htmlFor="reason">Select Reason for the Appointment<span>*</span></label>
            <select id="reason" value={formData.reason} onChange={handleInputChange}>
              <option value="">Select one...</option>
              <option value="consultation">Consultation</option>
              <option value="follow-up">Follow-up</option>
              <option value="new-issue">New Issue</option>
            </select>
            {errors.reason && <span className='error'>Reason is required</span>}
          </div> */}
          <div className='next-button' onClick={handleSubmit}>
            Next
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
