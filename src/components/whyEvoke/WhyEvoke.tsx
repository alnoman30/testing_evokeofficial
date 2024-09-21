import React from 'react';

import MainFooter from '../footer/MainFooter';
import WhyEvokeHero from './WhyEvokeHero';
import PatientJourney from '../patient/PatientJourney';
import TestimonialSlider from '../testimonials/TestimonialSlider';
import Footer from '../footer/Footer';
import FAQ from '../faq/FAQ';

const WhyEvoke: React.FC = () => {

    return (

        <>
        <WhyEvokeHero />
        <div className='border-btm'></div>
        <PatientJourney />
        <div className='border-btm'></div>
        <TestimonialSlider />
        <Footer />
        <FAQ />
        <MainFooter />

        </>
    );
};

export default WhyEvoke;