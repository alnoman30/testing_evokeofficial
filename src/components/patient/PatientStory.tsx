import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './PatientStory.css';
import storyImg from '../../assets/PatientStory.svg';
import useWindowSize from '../../hooks/useWindowSize';

interface PatientStoriesProps {
  text: string;
  name: string;
}

const stories: PatientStoriesProps[] = [
  { text: 'Lorem ipsum afaf.', name: 'Name' },
  { text: 'Lorem ipsum afaf.', name: 'Name' },
  { text: 'Lorem ipsum afaf.', name: 'Name' },
];

const PatientStory: React.FC = () => {
  const size = useWindowSize();
  const isMobile = size.width <= 768;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="patient-stories">
      <div className="patient-stories-header">
        <h2>Our Patients' Journeys</h2>
        <p>Discover how Evoke has transformed the lives of our patients. Watch their stories and see the results of our personalized hair health solutions.</p>
      </div>
      <div className="stories">
        {isMobile ? (
          <Slider {...settings}>
            {stories.map((story, index) => (
              <div className="story" key={index}>
                <img src={storyImg} alt="Patient" />
                <div className="overlay">
                  <p>"{story.text}"</p>
                  <p>-{story.name}</p>
                </div>
              </div>
            ))}
          </Slider>
        ) : (
          stories.map((story, index) => (
            <div className="story" key={index}>
              <img src={storyImg} alt="Patient" />
              <div className="overlay">
                <p>"{story.text}"</p>
                <p>-{story.name}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default PatientStory;
