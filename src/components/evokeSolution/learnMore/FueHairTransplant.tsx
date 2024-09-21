import React from "react";
import locationImg from '../../../assets/location.svg'
// import callIcon from '../../assets/CallNow.svg'
import logo from '../../../assets/HeaderLogo.svg';
import { useNavigate } from "react-router-dom";
import '../../policy/Privacy.css';
import './PersonalizedMed.css';
import FueImg from '../../../assets/Treatment/FueHairTrnasplant.jpeg';
import MainFooter from "../../footer/MainFooter";
import callIcon from '../../../assets/CallNow.svg'

const FueHairTransplant: React.FC = () => {


    const navigate = useNavigate();

    const logoClick = () => {
        // Improved approach using useNavigate hook
        // navigate to the Home page
        //with smooth scroll
        window.scrollTo(0, 0);
        navigate('/');
    };
    const bookAppointment = () => {
        // Improved approach using useNavigate hook
        // navigate to the booking page
        navigate('/booking-page');
    }
    const callnow = () => {
        // Improved approach using window.location.href
        window.location.href = `tel:+919870588044`; // Replace with your actual phone number in E.164 format (e.g., +1234567890)
      };



    return (
        <div>
            <div className='hea-der'>
                Inaugural Offers: Limited Time Only! ⏳
            </div>
            <div className='hea-der1'>
                <span>evoke</span>
                <div> <div onClick={callnow} className='call-now'> <img src={callIcon} />Call Now</div></div>
            </div>
            <header className="aboutus-header">
                <div onClick={logoClick} className="logo"><img src={logo} /></div>
                <div className="nav">
                    <span className="btn1"> <span className='location-img'><img src={locationImg} /> Delhi</span> </span>
                    {/* <span onClick={bookAppointment} className="btn">Book Appointment</span> */}
                </div>
            </header>

            <div className="service-page-container">
                <h1>FUE Hair Transplant at Evoke</h1>

                <h4>Personalized Solutions for Hair Restoration</h4>

                <p>
                    At Evoke, we understand that restoring your hair isn't just about the procedure—it's about helping
                    you regain your confidence, youth, and sense of self. Our Follicular Unit Extraction (FUE) Hair
                    Transplant service is carefully designed to offer a cutting-edge, minimally invasive solution to hair
                    loss.
                    Whether you’re searching for the best hair transplant clinic in Delhi or just exploring ways to
                    improve your hair health, we're here to support you every step of the way.
                </p>

                <img className="fue-img-web" src={FueImg} alt="" />



                <div className="service-page-content-div non-surgical">
                    <h4>What is Follicular Unit Extraction (FUE)?</h4>
                    <p>
                        Follicular Unit Extraction (FUE) is a modern hair transplant technique that involves removing
                        individual hair follicles from one part of your scalp (usually where hair is thicker) and transplanting
                        them to areas where hair is thinning or absent. This precise and minimally invasive method has
                        quickly become more popular than the older Follicular Unit Transplantation (FUT) procedure, which
                        often left patients with a noticeable "hair plugs" appearance. <br></br>
                        During the FUE procedure, surgeons use advanced micropunch tools to carefully extract single hair
                        follicles. This approach ensures that the extraction process leaves virtually no visible scars or marks,
                        providing natural-looking results with minimal downtime. <br></br>
                        At Evoke, we are proud to be recognized as the best FUE hair transplant clinic in Delhi. Our skilled
                        dermatologists and hair specialists are experts in performing FUE hair transplants, ensuring that you
                        receive the highest standard of care in a comfortable, state-of-the-art environment.
                    </p>

                </div>
                <div className="service-page-content-div non-surgical">
                    <h4>The Step-by-Step Process of FUE Hair Transplant at Evoke</h4>
                    <p>
                        At Evoke, we follow a meticulous process to ensure that every FUE hair transplant delivers
                        exceptional results. Each step of the procedure is carefully designed to provide the highest level of
                        precision, comfort, and success. Here's a detailed breakdown of how the Follicular Unit Extraction
                        (FUE) procedure is performed:
                    </p>
                    <h4>1. Extraction of Follicular Units from the Donor Area</h4>
                    <p>
                        The first step of the FUE hair transplant process involves the extraction of healthy hair follicles from
                        the donor area, typically located at the back or sides of the scalp. This area is chosen because it
                        contains hair that is genetically resistant to hair loss. At Evoke, our dermatologists use advanced
                        tools and techniques to ensure the extraction process is smooth and minimally invasive.
                    </p>
                    <ul>
                        <li>Each follicle is carefully removed using a specialized micro-punch tool, which ensures
                        precision while avoiding damage to surrounding tissues.</li>
                        <li>The extracted follicular units or follicles are placed in a specialized holding solution to
                        maintain their viability and ensure optimal survival when implanted.</li>
                    </ul>
                    <p>
                        This precise technique allows us to extract individual hair follicles without causing noticeable
                        scarring, one of the major benefits of choosing an FUE hair transplant over traditional methods.
                    </p>
                    <h4>2. Creating Slits on the Recipient Site</h4>
                    <p>Once the required number of follicles has been extracted, our experts move on to the next step:
                        preparing the recipient site. The recipient site is the area of the scalp where the transplanted
                        follicles will be implanted, typically the areas experiencing thinning or balding.
                    </p>
                    <ul>
                        <li>Tiny incisions, or slits, are made in the recipient area using specialized tools. The placement
                        of these slits is crucial for ensuring that the transplanted hair grows in a natural pattern.</li>
                        <li>Our dermatologists pay close attention to factors such as the angle, depth, and direction of
                        each slit, ensuring that the new hairline and density appear natural and blend seamlessly
                        with the existing hair.</li>
                    </ul>
                    <p>This step is a key differentiator for Evoke, where we pride ourselves on providing highly personalized
                    and customized treatments. Whether you are seeking a subtle enhancement or a complete
                    restoration, our team designs your hair transplant to suit your unique goals and facial structure,
                    which is why we are known as the best FUE hair transplant clinic in Delhi.
                    </p>
                    <h4>3. Implantation of the Grafts in the Recipient Area</h4>
                    <p>
                        The final and most critical step of the Follicular Unit Extraction procedure is the implantation of the
                        grafts. During this phase, the previously extracted follicles are carefully implanted into the slits
                        created on the recipient site.
                    </p>
                    <ul>
                        <li>Using precision tools such as implanters or forceps, our specialists ensure that each follicle is
                        placed with the utmost care. This careful placement helps to achieve natural-looking results
                        with the appropriate hair density and coverage.</li>
                        <li>The use of advanced implanters allows for greater control and accuracy, which reduces the
                        risk of follicle damage during the implantation process. Our expertise in this technique
                        ensures that each hair grows in the desired direction and thickness, providing you with
                        results that are virtually undetectable.
                      </li>
                    </ul>
                    <p>
                    Once the grafts are implanted, they will begin to establish themselves in the scalp and gradually start
                    growing over time. This process requires patience, but the outcome is well worth the wait—your
                    hair will look thicker, fuller, and completely natural.
                    </p>

                </div>
                <div className="service-page-content-div non-surgical">
                    <h4>Why Choose FUE Hair Transplant at Evoke?</h4>
                    <ul>
                        <li>
                        <strong>Personalized Treatment Plans :</strong> We understand that every person’s hair loss pattern is
                        unique. Our team of dermatologists and hair specialists will carefully assess your condition
                        and customize a treatment plan tailored to your specific needs. Whether you are
                        experiencing early-stage thinning or more advanced hair loss, we will create a solution that
                        fits you perfectly.
                        </li>


                        <li>
                        <strong>Expert Dermatologists :</strong> Our FUE hair transplant in Delhi is performed by some of the top
                        dermatologists in the country. With years of experience and a commitment to using the
                        latest advancements in hair restoration technology, we guarantee the best possible results.
                        </li>


                        <li>
                        <strong>Minimally Invasive :</strong> FUE is known for its minimal downtime and quick recovery. Unlike other
                        methods, the procedure involves tiny incisions, reducing the risk of scarring and allowing for
                        a quicker return to your normal activities
                        </li>


                        <li>
                        <strong>Natural Results :</strong> The precision of FUE allows for the careful placement of individual follicles,
                        ensuring natural hair growth patterns. Your newly transplanted hair will blend seamlessly
                        with your existing hair, providing a fuller, more youthful look.
                        </li>


                        <li>
                        <strong>High Success Rate :</strong>  With our advanced technology and expert team, Evoke boasts a high
                        success rate for hair transplants, giving our clients renewed confidence and satisfaction.
                        </li>


                    </ul>

                </div>

                <div className="service-page-content-div non-surgical">
                    <h4>Follicular Unit Extraction Price</h4>
                    <p>
                    We believe that everyone deserves access to top-quality hair care, which is why we strive to offer
                    competitive Follicular Unit Extraction prices without compromising on the quality of care. The
                    Follicular Unit Extraction price in Delhi can vary depending on the extent of the treatment, the
                    number of grafts required, and the overall complexity of the procedure.<br></br>
                    At Evoke, we offer transparent pricing with no hidden fees. Our team will provide you with a
                    detailed cost estimate during your consultation, ensuring you understand all aspects of the
                    procedure and the investment involved in your hair restoration journey.
                    </p>

                </div>

                <div className="service-page-content-div non-surgical">
                    <h4>FUE Hair Transplant in Delhi: Why Evoke is the Best Choice</h4>
                    <p>
                    When searching for the best hair transplant clinic in Delhi, you want to choose a facility that
                    combines expertise, advanced technology, and personalized care. Evoke is proud to be a leader in
                    the field of hair restoration. Our clinic is equipped with the latest technology in hair transplant
                    procedures, ensuring that each treatment is performed with the utmost precision and care. <br></br>
                    Our reputation as the best FUE hair transplant clinic in Delhi is built on our commitment to patient
                    satisfaction. From the moment you step into our clinic, you will be greeted by a team of caring
                    professionals dedicated to making your experience as comfortable and successful as possible.
                    </p>

                </div>

                <div className="service-page-content-div non-surgical">
                    <h4>Understanding Follicular Unit Extraction Cost</h4>
                    <p>
                    When considering a hair transplant, understanding the Follicular Unit Extraction cost is essential. At
                    Evoke, we pride ourselves on offering competitive prices without compromising on quality. The cost
                    of FUE hair transplant in Delhi is influenced by several factors, including:
                    </p>
                    <ul>
                        <li>
                            <strong>Number of Grafts : </strong>The cost significantly depends upon the number of grafts required. Our
                            team will determine the ideal number of grafts required to achieve your desired results
                        </li>
                        <li>
                            <strong>Donor Area Condition : </strong>The quality and density of the donor area can also affect the cost. We
                            carefully evaluate your scalp to ensure the best results.
                        </li>
                        <li>
                            <strong>Clinic Expertise and Technology : </strong>At Evoke, we use the latest technology and employ highly
                            experienced dermatologists, which ensures premium results at a competitive price.
                        </li>
                        
                    </ul>
                    <p>We offer flexible payment options and financing plans to make the procedure accessible to as many
                        people as possible. During your consultation, we will discuss all available options to help you find a
                        plan that works for you.
                    </p>

                </div>



                <div className="service-page-content-div non-surgical">
                    <h4>The Evoke Experience: What to Expect</h4>
                    <p>
                    When you choose Evoke for your FUE hair transplant in Delhi, you can expect a seamless experience
                    from start to finish. Here’s a step-by-step overview of what you can expect during the process:
                    </p>
                    <ul>
                        <li>
                            <strong>Initial Consultation : </strong>Your journey begins with a thorough consultation with one of our
                            experts. During this meeting, we will assess your hair loss, discuss your goals, and determine
                            the best treatment plan for you. We will also explain the Follicular Unit Extraction cost and
                            answer any questions you may have.
                        </li>
                        <li>
                            <strong>Personalized Treatment Plan : </strong>Based on your consultation, we will create a personalized
                            treatment plan that outlines the number of grafts needed and the expected results. We take
                            the time to ensure that you are comfortable with the plan before moving forward.
                        </li>
                        <li>
                            <strong>Procedure Day : </strong> On the day of your FUE hair transplant, our team will guide you through
                            each step of the process. The procedure is performed under local anesthesia, ensuring that
                            you remain comfortable throughout. The extraction and implantation process takes several
                            hours, depending on the number of grafts.

                        </li>
                        <li>
                            <strong>Recovery and Aftercare : </strong>Recovery from FUE is quick, with most patients resuming their daily
                            activities within a few days. We provide detailed aftercare instructions to promote optimal
                            healing and hair growth.
                        </li>
                        <li>
                            <strong>Follow-Up :</strong> At Evoke, we are committed to your long-term success. After your transplant, we
                            will schedule follow-up appointments to monitor your progress and ensure that you are
                            delighted with your results.
                        </li>
                        
                    </ul>
                    <p>We offer flexible payment options and financing plans to make the procedure accessible to as many
                        people as possible. During your consultation, we will discuss all available options to help you find a
                        plan that works for you.
                    </p>

                </div>


                <div className="service-page-content-div non-surgical">
                    <h4>Start Your Hair Restoration Journey Today</h4>
                    <p>
                    Are you ready to take the first step toward a fuller, more confident you? Contact Evoke today to
                    schedule your consultation. Let us show you why we’re the best FUE hair transplant clinic in Delhi.
                    With our expert team, personalized care, and advanced technology, we’re confident you’ll love your
                    results.
                    </p>

                </div>

               

                <div className="treatment-div">
                    <div className="book-clinic-visit-p">
                        <p>
                            Our team of experts is here to help you find the right treatment plan tailored to your needs. </p>
                        <p>
                            To schedule an appointment, please click and schedule the Appointment.
                        </p>
                        <button onClick={bookAppointment}>Book Clinic Visit</button>
                    </div>
                </div>


            </div>

            <MainFooter />

        </div>
    );
};

export default FueHairTransplant;