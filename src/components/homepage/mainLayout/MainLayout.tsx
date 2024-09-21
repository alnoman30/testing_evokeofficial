import React from 'react';
import HomePage from '../HomePage';
import EvokeSolutions from '../../evokeSolution/EvokeSolutions';
 import './MainLayout.css';
import Disorder from '../../disorder/Disorder';
import Address from '../../disorder/address/Address';
// import PatientJourney from '../../patient/PatientJourney';
import PatientStory from '../../patient/PatientStory';
import ContactUS from '../../contact/ContactUs';
import DoctorsSection from '../../doctorSection/DoctorsSection';
import TestimonialSlider from '../../testimonials/TestimonialSlider';
import Footer from '../../footer/Footer';
import FAQ from '../../faq/FAQ';
import MainFooter from '../../footer/MainFooter';
import ComparisonTable from '../../disorder/ComparisonTable';
const MainLayout: React.FC = () => {
    return (
        <>
        <HomePage />
        <br />
        <div className='border-btm'></div>
        <EvokeSolutions />
        <div className='border-btm'></div>
        <Disorder />
        <div className='border-btm'></div>
        <ComparisonTable />
        <Address />
        {/* <PatientJourney /> */}
        <div className='border-btm'></div>
        <PatientStory />
        <div className='border-btm'></div>
        <TestimonialSlider />
        <ContactUS />
        <DoctorsSection />
        <Footer />
        <FAQ />
        <MainFooter />
        </>
    );
};

export default MainLayout;

