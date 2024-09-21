import React from 'react';
import Slider from 'react-slick';
import TestimonialCard from './TestimonialCard';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './TestimonialSlider.css';
import { useMediaQuery } from 'react-responsive';

const testimonials = [
  {
    name: 'Ankur',
    age: 35,
    location: 'Delhi',
    date: '9 June 2024',
    rating: 5,
    review: "Exceptional Service",
    reviewContent: 'The expert team at Evoke provided excellent care and continuous support throughout my treatment. The results exceeded my expectations, and I feel more confident than ever.',
    tags: ['Excellent Care', 'Fast Recovery'],
    treatment: 'Hair loss'
  },
  {
    name: 'Prakhar',
    age: 28,
    location: 'Delhi',
    date: '9 June 2024',
    rating: 5,
    review: "Fantastic Analysis",
    reviewContent: 'I was truly wowed by Evoke`s comprehensive approach to understanding the root cause of my hair loss. The detailed analysis revealed that my issue was due to DHT. The team’s expertise and the personalized treatment plan they crafted for me made all the difference. I’m now seeing significant improvement and couldn’t be happier with the results.',
    tags: ['Excellent Care', 'Fast Recovery'],
    treatment: 'Hair loss'
  },
  {
    name: 'Ananya',
    age: 32,
    location: 'Delhi',
    date: '9 June 2024',
    rating: 5,
    review: "Experienced and Understanding   Doctors",
    reviewContent: 'I was extremely impressed with the level of expertise and understanding shown by the doctors at Evoke. From the moment I walked in, they made me feel comfortable and listened to all my concerns. Their deep knowledge and compassionate approach ensured that I received the best possible care.',
    tags: ['Excellent Care', 'Fast Recovery'],
    treatment: 'Hair loss'
  },
  // {
  //   name: 'Arvin',
  //   age: 22,
  //   location: 'Delhi',
  //   date: '9 June 2024',
  //   rating: 4.5,
  //   review: 'An amazing service',
  //   tags: ['Excellent Care', 'Fast Recovery'],
  //   treatment: 'Hair loss'
  // },
  // {
  //   name: 'Amit',
  //   age: 22,
  //   location: 'Delhi',
  //   date: '9 June 2024',
  //   rating: 2.5,
  //   review: 'An amazing service',
  //   tags: ['Excellent Care', 'Fast Recovery'],
  //   treatment: 'Hair loss'
  // },
  // {
  //   name: 'Sujeet',
  //   age: 22,
  //   location: 'Delhi',
  //   date: '9 June 2024',
  //   rating: 3,
  //   review: 'An amazing service',
  //   tags: ['Excellent Care', 'Fast Recovery'],
  //   treatment: 'Hair loss'
  // },
  // Add more testimonials as needed...
];



const TestimonialSlider: React.FC = () => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
  const settings = {
    dots: isMobile ? false : true,
    infinite: true,
    speed: 500,
    arrows: isMobile ? false : true,
    slidesToShow: isMobile ? 1 : 3,
    slidesToScroll: isMobile ? 1 : 3,
  };

  return (
    <div className="testimonial-slider">
        <div className='testimonial-head'>
      <h2>Hear from Our Patients</h2>
      <p>
      Discover what our patients have to say about their journey with Evoke. Their experiences highlight the quality of care and exceptional results that set us apart.
      </p>
        </div>
      <div className='card-div'>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </Slider>

      </div>
    </div>
  );
};

export default TestimonialSlider;
