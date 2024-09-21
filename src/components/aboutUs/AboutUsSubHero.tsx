import React from "react";
import './AboutUsSubHero.css';
// import subheroImg from '../../assets/AboutUS/subhero.svg';
// import subheroMobileImg from '../../assets/AboutUS/SubheroMobile.svg';


const AboutUsSubHero: React.FC = () => {
    return (

        <div className="subhero">
            <h2 className="subhero-title">Here’s Where It All Began!</h2>
     

      <div className="subhero-content">
        <p>
        Evoke was founded with a singular vision: to provide advanced, personalized hair treatment solutions using innovative technology. Our journey started with a small team of dedicated professionals committed to making a difference in the field of hair health.</p>

    <p>We believe in the power of personalized care. Each treatment plan is tailored to meet the unique needs of our patients, ensuring optimal results and satisfaction. Our expert team, led by renowned dermatologists, works tirelessly to stay ahead of the curve, continually adopting the newest innovations in hair health.

        </p>
{/* 
        <img src={subheroImg} alt="Subhero" className="subhero-image" />
        <img src={subheroMobileImg} alt="Subhero" className="subhero-mobile-image" /> */}
      </div>

        </div>
    );
};

export default AboutUsSubHero;