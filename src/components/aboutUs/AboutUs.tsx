import React from 'react';
import AboutUsHero from './AboutUsHero';
import AboutUsSubHero from './AboutUsSubHero';
import AboutUsFAQ from './AboutUsFAQ';
import AboutUsSlider from './AboutUsSlider';
import DoctorsSection from '../doctorSection/DoctorsSection';
// import AboutUsFoster from './AboutUsFoster';
import MainFooter from '../footer/MainFooter';

const AboutUs: React.FC = () => {

    return (

        <>
        <AboutUsHero />
        <AboutUsSubHero />
        <div className='border-btm'></div>
        <AboutUsFAQ />
        <AboutUsSlider />
        <DoctorsSection />
        {/* <div className='border-btm'></div>
        <AboutUsFoster /> */}
        <MainFooter />

        </>
    );
};

export default AboutUs;