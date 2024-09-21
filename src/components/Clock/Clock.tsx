import React, { useState, useEffect } from 'react';
import './Clock.css'; // Import the CSS file for styling

const Clock: React.FC = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timerId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(timerId); // Cleanup the interval on component unmount
    }, []);

    const formatTime = (date: Date) => {
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        const formattedHours = hours % 12 || 12;
        return `${formattedHours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} ${ampm}`;
    };

    return (
        <div className="clock">
            <div className="clock-face">
                <div className="hour-hand" style={{ transform: `rotate(${time.getHours() * 30 + time.getMinutes() / 2}deg)` }}></div>
                <div className="minute-hand" style={{ transform: `rotate(${time.getMinutes() * 6}deg)` }}></div>
                <div className="second-hand" style={{ transform: `rotate(${time.getSeconds() * 6}deg)` }}></div>
                <div className="center-dot"></div>
            </div>
            <div className="digital-time">{formatTime(time)}</div>
        </div>
    );
};

export default Clock;
