import React from 'react';
import './ComparisonTable.css';
import ComparisonCard from './ComparisonCard';
import plusImg1 from '../../assets/comparisonTable/method1.svg';
import plusImg2 from '../../assets/comparisonTable/method2.svg';
import plusImg3 from '../../assets/comparisonTable/method3.svg';
import plusImg4 from '../../assets/comparisonTable/method4.svg';
import plusImg5 from '../../assets/comparisonTable/method5.svg';



const factors = ['Comprehensive Hair Solutions', 'Expert doctors from AIIMS & other top institutions', 'Personalized Treatment Plans', 'Scientifically Backed Methods only', 'Detailed Root Cause Analysis with scans & blood tests'];
const evoke = [true, true, true, true, true];
const others = [false, false, false, true, false];
const ComparisonTable: React.FC = () => {
  return (
    <div className="comparison-table">
      <h2 className="disorder-title">How Is Evoke Different?</h2>
      <p className="disorder-description">
        Experience personalized care, expert treatments, and cutting-edge technology with Evoke. Discover what sets us apart.
      </p>
      <div>
        <ComparisonCard factors={factors} evoke={evoke} others={others} />
      </div>
      <div className="benefits">
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: '1rem',
        }}>

          <h1>5</h1>
          <h3>The Evoke Advantage</h3>
        </div>
        <div className='benefit-div'>
          <span className='benefit-span'>
            <span className='image-span'> <img src={plusImg2} /> Comprehensive Solutions <br /></span>

            <p>
              Offering a complete range of treatments, from non-invasive options to advanced surgical procedures, all under one roof.</p>
          </span>
          <span className='benefit-span'>
            <span className='image-span'> <img src={plusImg3} /> Personalized Solutions <br /></span>

            <p>
            Providing tailored treatments based on detailed root cause analysis, utilizing advanced scans and comprehensive tests.</p>
          </span>
          <span className='benefit-span'>
            <span className='image-span'> <img src={plusImg1} /> Experienced Team <br /></span>

            <p>
            Consisting of highly skilled professionals from AIIMS and other top institutions, ensuring you receive the best care.</p>
          </span>
          <span className='benefit-span'>
            <span className='image-span'> <img src={plusImg4} /> Scientifically Backed Methods <br /></span>

            <p>
            Employing proven techniques and methodologies to ensure reliable and effective outcomes.</p>
          </span>
          <span className='benefit-span'>
            <span className='image-span'> <img src={plusImg5} /> Cutting-Edge Technology <br /></span>

            <p>
            Leveraging the latest advancements in hair health technology to deliver superior results</p>
          </span>

        </div>
        {/* <ul>
          <li> <img src={plusImg} /> Comprehensive Solutions 
          <p>Offering a complete range of treatments, from non-invasive options to advanced surgical procedures, all under one roof.</p>
          </li>
          <li> <img src={plusImg} /> Efficient Process</li>
          <li> <img src={plusImg} /> Experienced Team</li>
          <li> <img src={plusImg} /> Efficient Process</li>
          <li> <img src={plusImg} /> Experienced Team</li>
        </ul> */}
      </div>
    </div>
  );
};

export default ComparisonTable;
