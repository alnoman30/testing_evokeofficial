import React, { useState } from "react";
import logo from '../../assets/HeaderLogo.svg';
import backArrowImg from '../../assets/booking/MobileBackArrow.svg';
import bookingArrow2 from '../../assets/booking/BookingArrow2.svg';
import bookingArrowMob2 from '../../assets/booking/BookingArrowMob2.svg';
import { useNavigate } from "react-router-dom";
import './BookingPage2.css';
import Clock from "../Clock/Clock";
// import Clock from "../Clock/Clock";

const BookingConfirmation: React.FC = () => {
    const navigate = useNavigate();
    const [selectedDate, setSelectedDate] = useState<string | null>(null);
    const [selectedTime, setSelectedTime] = useState<string | null>(null);
    const [timePeriod, setTimePeriod] = useState<string>('');

    const getNextSevenDays = () => {
        const dates = [];
        const currentDate = new Date();
        
        for (let i = 0; i < 7; i++) {
            const newDate = new Date();
            newDate.setDate(currentDate.getDate() + i);

            const dayName = newDate.toLocaleDateString('en-US', { weekday: 'short' });
            const dayNumber = newDate.getDate().toString();

            dates.push({ date: dayNumber, day: dayName });
        }

        return dates;
    };

    const dates = getNextSevenDays();

    const timeSlots = {
        morning: ['10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM'],
        afternoon: ['12:00 PM', '12:30 PM', '01:00 PM', '01:30 PM', '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM'],
        evening: ['04:00 PM', '04:30 PM', '05:00 PM', '05:30 PM', '06:00 PM', '06:30 PM']
    };

    const logoClick = () => {
        window.scrollTo(0, 0);
        navigate('/');
    };

    const backArrowClick = () => {
        window.scrollTo(0, 0);
        navigate('/booking-page');
    };

    const handleDateClick = (date: string) => {
        setSelectedDate(date);
    };

    const handleTimeClick = (time: string) => {
        setSelectedTime(time);
    };

    const handleTimePeriodClick = (period: string) => {
        setTimePeriod(period);
        setSelectedTime(null);
    };

    const handleSubmit = async () => {
        if (selectedDate && selectedTime) {
            const bookingFormData = localStorage.getItem('bookingFormData');
            const parsedFormData = bookingFormData ? JSON.parse(bookingFormData) : {};

            const { fullName, phoneNumber } = parsedFormData;
            const msg = `<br>Selected Date: ${selectedDate}, <br>Selected Time Slot: ${selectedTime}, <br>Selected Time Period: ${timePeriod}`;

            const data = {
                name: fullName,
                email: 'dummy@gmail.com',
                phone: phoneNumber,
                msg: msg
            };

            try {
                const response = await fetch('https://evokehair.com/backend/api.php', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                });

                const result = await response.json();
                if (result.error) {
                    alert(result.message);
                } else {
                    alert('Your details has been submitted.');
                    localStorage.removeItem('bookingFormData');
                    navigate('/booking-confirmation');
                }
            } catch (error) {
                alert('Submission Failed!.');
            }
        } else {
            alert('Please select both a date and a time.');
        }
    };

    return (
        <div className='booking-container'>
            <header className="booking-header">
                <div className='mobile-backArrow'>
                    <img onClick={backArrowClick} src={backArrowImg} alt="Back Arrow" />
                </div>
                <div onClick={logoClick} className="booking-logo">
                    <img src={logo} alt="Logo" />
                </div>
                <div></div>
            </header>

            <div className='booking-form booking-page2'>
           
                <div className='booking-form-heading'>
                    <img className='booking-Arrow' src={bookingArrow2} alt="Booking Arrow" />
                    <img className='booking-Arrow-Mob2' src={bookingArrowMob2} alt="Booking Arrow" />
                </div>

                <div className="booking-time-container">
                    <span className="booking-time">
                        What date and time would you prefer for your visit?
                    </span>

                    <div className="calendar">
                        <span className="mini_title">Calendar</span>
                    </div>

                    <div className="dates">
                        {dates.map(date => (
                            <span
                                key={date.date}
                                className={`date-button ${selectedDate === date.date ? 'selected' : ''}`}
                                onClick={() => handleDateClick(date.date)}
                            >
                                <span className="date-div">
                                    <span>
                                        {date.date}
                                    </span>
                                    <span className="date-day">
                                        {date.day}
                                    </span>
                                </span>
                            </span>
                        ))}
                        
                    </div>
                    
                    <div className="clock-slots">
                    <span className="mini_title">Current time</span>
                    <div className="clock_area">
                         <Clock /> 
                         </div>
                    </div>


                    <div className="time-slots">
                        <span className="mini_title">Time Slots</span>
                        
                        <div className="time-periods">
                            <button
                                className={`time-period-button ${timePeriod === 'morning' ? 'selected' : ''}`}
                                onClick={() => handleTimePeriodClick('morning')}
                            >
                                Morning
                            </button>
                            <button
                                className={`time-period-button ${timePeriod === 'afternoon' ? 'selected' : ''}`}
                                onClick={() => handleTimePeriodClick('afternoon')}
                            >
                                Afternoon
                            </button>
                            <button
                                className={`time-period-button ${timePeriod === 'evening' ? 'selected' : ''}`}
                                onClick={() => handleTimePeriodClick('evening')}
                            >
                                Evening
                            </button>
                        </div>

                        <div className="time-buttons">
                            {timePeriod && timeSlots[timePeriod as keyof typeof timeSlots].map(time => (
                                <span
                                    key={time}
                                    className={`time-button ${selectedTime === time ? 'selected' : ''}`}
                                    onClick={() => handleTimeClick(time)}
                                >
                                    {time}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="time">
                        <button onClick={handleSubmit} style={{ outline: 'none' }} className="time-submit-button">Submit</button>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default BookingConfirmation;
