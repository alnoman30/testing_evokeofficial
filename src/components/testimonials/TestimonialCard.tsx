import React from 'react';
import './TestimonialCard.css';

interface TestimonialCardProps {
  name: string;
  age: number;
  location: string;
  date: string;
  rating: number;
  review: string;
  tags: string[];
  treatment: string;
  reviewContent: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  age,
  date,
  rating,
  review,
  treatment,
  reviewContent,
}) => (
  <div className="testimonial-card">
    <p className="subtitle">Recommends Evoke</p>
    <div className='testimonial-card-content'>
        <div className='name-date'>
    <h3>{name}</h3>
    <p>{date}</p>
        </div>
    <p style={{
        color: '#084237',
        fontSize: '1rem',
        fontWeight: '600',
        fontFamily: 'Montserrat',

    }}>{age} Years</p>
    <div className="rating">
      {'★'.repeat(Math.floor(rating)) + '☆'.repeat(5 - Math.floor(rating))}
    </div>
    <p className='review'>“{review}”</p>
    <p className='review-content'>{reviewContent}</p>
    {/* <div className="tags">
      {tags.map((tag, index) => (
        <span key={index} className="tag-button">{tag}</span>
      ))}
    </div> */}
    <p className="treatment">Treated for {treatment}</p>

    </div>
  </div>
);

export default TestimonialCard;
