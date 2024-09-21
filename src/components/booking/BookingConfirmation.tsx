
import React from "react";
import bookingConfirmation from '../../assets/booking/BookingConfirm.svg';
import logo from '../../assets/HeaderLogo.svg';
import { useNavigate } from "react-router-dom";


const BookingConfirmation: React.FC = () => {


    const navigate = useNavigate();

    const logoClick = () => {
        window.scrollTo(0, 0);
        navigate('/');
      };
    
    const handleBackHome = () => {
        navigate('/');
      };
  return (

    <><header className="booking-header confirmation-page">
          {/* <div className='mobile-backArrow'>
              <img src={backArrowImg} alt="Back Arrow" />
          </div> */}
          <div onClick={logoClick} className="booking-logo ">
              <img src={logo} alt="Logo" />
          </div>
      </header><div className='booking-form2'>
              <div className='form2-content'>
                  <img src={bookingConfirmation} alt="Booking Confirmation" />
                  <div className='form2-heading'>
                      <span>Your appointment is confirmed.</span>
                      <span>Thank you.</span>
                  </div>
                  <div className='backhome-button' onClick={handleBackHome}>
                      <span>Back To Home Page</span>
                  </div>
              </div>
          </div></>
  );
};

export default BookingConfirmation;