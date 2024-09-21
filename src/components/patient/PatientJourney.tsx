import React from 'react';
import './PatientJourney.css'; // Assuming you have some custom styles
import treatMentImg1 from '../../assets/Treatment1.svg';
import treatMentImg2 from '../../assets/Treatment2.svg';
import treatMentImg3 from '../../assets/Treatment3.svg';
import treatMentImg4 from '../../assets/Treatment4.svg';

const treatments = [
  {
    title: 'Comprehensive Diagnosis',
    duration: 'Duration',
    description: 'Utilizing our proprietary hair scan and blood tests, we identify the root causes of your hair issues.',
    image: treatMentImg1, // Replace with actual image paths
  },
  {
    title: 'Professional Consultation',
    duration: 'Duration',
    description: 'Our experienced dermatologists assess your diagnosis and recommend the most effective treatments tailored to your needs.',
    image: treatMentImg2,
  },
  {
    title: 'Customized Treatment Plan',
    duration: 'Duration',
    description: 'Our expert team implements the recommended treatment plan, ensuring all procedures are conducted by our dermatologists for optimal results.',
    image: treatMentImg3,
  },
  {
    title: 'Continuous Care and Support',
    duration: 'Duration',
    description: 'Hair health requires ongoing care. Our digital platform is available for your queries anytime, and we provide free video follow-up consultations to help you achieve your hair goals.',
    image: treatMentImg4,
  },
];

const PatientJourney: React.FC = () => {
  return (
    <div className="patient-journey-container">
      <div className="patient-journey-header">
        <h2>Your journey at Evoke</h2>
        <p>
        Embark on a personalized journey to hair health with Evoke. Our step-by-step process ensures that you receive tailored
         treatments and continuous support for optimal results.
        </p>
      </div>
      <div className="patient-journey-timeline">
        {treatments.map((treatment, index) => (
          <div className="treatment" key={index}>
            <div className="treatment-line">
              <div className="treatment-dot"></div>
            </div>
            <div className="treatment-info">
              <span>{treatment.title}</span>
              {/* <p style={{
                color: 'black',
                fontSize: '1.2rem',
                fontWeight: '600',
              
              }}>{treatment.duration}</p> */}
              <p>{treatment.description}</p>
            </div>
            <div className="treatment-image">
              <img src={treatment.image} alt={treatment.title} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PatientJourney;
