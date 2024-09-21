import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Address.css'; // Assuming you have some custom styles
import ADImg1 from '../../../assets/Clinic-Img.png';
import ADImg2 from '../../../assets/Clinic-Img-1.png';
import ADImg3 from '../../../assets/Clinic-Img-2.png';
import ADImg4 from '../../../assets/Clinic-Img-3.png';
import location from '../../../assets/ContactLocation.svg';
// import ADImg5 from '../../../assets/AD5.svg';

const images = [
  // Replace these with the actual paths to your images
    ADImg1,
    ADImg2,
    ADImg3,
    ADImg4,

];

const Address: React.FC = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false, // Hide the arrows
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };

  return (
    <div className="clinic-container">
      <div className="clinic-header">
        <h2>Visit Our Clinic for Expert Hair Care</h2>
        <p> <span className='locationIMg'><img src={location}/> 17A Ring Road, Lajpat Nagar, New Delhi</span> </p>
      </div>
      <Slider {...settings} className="clinic-slider">
        {images.map((image, index) => (
          <div key={index} className="clinic-image-wrapper">
            <img src={image} alt={`Clinic ${index + 1}`} className="clinic-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Address;
