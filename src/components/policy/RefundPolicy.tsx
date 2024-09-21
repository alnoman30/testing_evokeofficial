import React from "react";
import locationImg from '../../assets/location.svg'
// import callIcon from '../../assets/CallNow.svg'
import logo from '../../assets/HeaderLogo.svg';
import { useNavigate } from "react-router-dom";
import './RefundPolicy.css'
import MainFooter from "../footer/MainFooter";
import callIcon from '../../assets/CallNow.svg'

const RefundPolicy: React.FC = () => {

    const navigate = useNavigate();

    const logoClick = () => {
        // Improved approach using useNavigate hook
        // navigate to the Home page
        //with smooth scroll
        window.scrollTo(0, 0);
        navigate('/');
    };
    const callnow = () => {
      // Improved approach using window.location.href
      window.location.href = `tel:+919870588044`; // Replace with your actual phone number in E.164 format (e.g., +1234567890)
    };
    const bookAppointment = () => {
        // Improved approach using useNavigate hook
        // navigate to the booking page
        navigate('/booking-page');
      }

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
                    <span onClick={bookAppointment} className="btn">Book Appointment</span>
                </div>
            </header>

            <div className="refund-policy-data">

                <div className="refund-policy-heading">
                <h1>Refund and Return Policy</h1>
      <p> <strong>Effective Date: 1st July 2024</strong></p>
      
      <p>
        Thank you for choosing Evoke for your Haircare needs. We strive to provide the best possible care and services to our patients. Please read our Cancellation and Refund Policy carefully to understand our procedures.
      </p>

      <h2>Appointment Cancellation:</h2>
      <ul>
        <li>
          <strong>Consultation:</strong>
          <ul>
            <li>Consultation fees are non-refundable unless otherwise decided by the clinic management.</li>
            <li>Appointments can be cancelled up to 2 hours before the scheduled time. Cancellations made within this timeframe will be eligible for a partial refund.</li>
            <li>Cancellations made before the second session will be eligible for a partial refund.</li>
          </ul>
        </li>
      </ul>

      <h2>Refund Process:</h2>
      <ul>
        <li>Refunds for full advance payments or partial payments will be processed within 4 - 5 business days after the cancellation request is approved.</li>
        <li>
          <strong>Refund Method:</strong> All approved refunds will be processed in the original form of payment. For example, if the payment was made online, the refund will be issued back to the source account used for the transaction. Cash refunds will not be provided.
        </li>
      </ul>

      <h2>Exceptions:</h2>
      <p>
        In cases of medical emergencies or unforeseen circumstances, the Evoke management reserves the right to make exceptions to the cancellation and refund policy. Patients are encouraged to communicate with the clinic staff promptly to discuss any exceptional situations.
      </p>

      <h2>Changes to Appointments:</h2>
      <p>
        Patients are allowed to reschedule appointments up to 2 hours before the scheduled time without any additional charges. Rescheduling made within this timeframe is subject to availability.
      </p>

      <h2>No Show Policy:</h2>
      <p>
        If a patient fails to show up for a scheduled appointment without prior notice, the clinic reserves the right to charge the full consultation or treatment fee.
      </p>

      <h2>Online Return Time:</h2>
      <p>
        For online transactions, the return time for any eligible refunds will be subject to the policy of your bank and our financial gateway provider. Please refer to the terms and conditions of your financial institution for more information on their refund processing times. This addition to the policy emphasizes that medicines once purchased cannot be returned or refunded. Additionally, it clarifies that the return time for online transactions is beyond the clinic's control and is subject to the policies of the patient's bank and the financial gateway provider used for the transaction.
      </p>

      <h2>Fraudulent Claims Disclaimer:</h2>
      <p>
        Evoke strongly advises patients to exercise caution and verify the authenticity of calls or emails claiming to be from the clinic before making any payments. In the event that someone falsely claims to represent Evoke and a patient pays money without proper verification, Evoke will not be liable for any financial losses incurred. Patients are urged to confirm the legitimacy of such communication through official channels before taking any action. This disclaimer underscores the importance of verifying the authenticity of communications purportedly from the clinic, especially when involving financial transactions. It makes it clear that the clinic is not responsible for losses incurred due to fraudulent claims if proper verification measures are not taken by the patient.
      </p>

      <h2>Treatment Success Disclaimer:</h2>
      <p>
        The success of a treatment is contingent upon the proper adherence to session duration, dietary guidelines, and prescribed meals and medications. After the completion of the full treatment course, if the patient does not experience the desired success, Evoke will not be liable to refund the payment made either fully or partially. The patient acknowledges and accepts that individual responses to treatments may vary. This disclaimer clarifies that the clinic does not provide a guarantee of success for treatments and highlights that the patient's commitment to following prescribed guidelines is crucial. Furthermore, it makes it clear that the lack of success after the completion of the full treatment does not entitle the patient to a refund, emphasizing the inherent variability in individual responses to treatments.
      </p>

      <h2>Confidentiality & Payment Information:</h2>
      <p>
        The patient acknowledges that any payment-related information shared for personalized treatment is strictly confidential. The patient agrees not to use any payment information shared for their treatment to hold Evoke responsible for unauthorized charges or liabilities incurred by others. Neither the patient nor any clinic employee is authorized to make any payment or discount-related promises to any third party on behalf of Evoke. This section emphasizes the confidentiality of payment information and establishes the patient's responsibility to safeguard such information. It also prohibits the patient and clinic employees from making payment or discount-related promises to third parties on behalf of the clinic, ensuring the integrity of financial transactions and preventing unauthorized use of payment information.
      </p>

      <h2>Right to Modify:</h2>
      <p>
        Evoke reserves the right to modify or amend this Cancellation and Refund Policy at any time. Any changes will be effective immediately upon posting on our website or through other means of communication.
      </p>

      <p>
        By scheduling an appointment and making a payment with Evoke, you acknowledge that you have read, understood, and agreed to the terms and conditions outlined in this Cancellation and Refund Policy. If you have any questions or concerns regarding this policy, please feel free to contact us on <a href="mailto:contact@evokehair.com">contact@evokehair.com</a> for assistance. Thank you for choosing Evoke. We appreciate the opportunity to serve you.
      </p>
                </div>



            </div>

            <MainFooter />

        </div>
    );
};

export default RefundPolicy;