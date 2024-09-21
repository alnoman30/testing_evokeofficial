import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import './index.css'
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import MainLayout from './components/homepage/mainLayout/MainLayout';
import AboutUs from './components/aboutUs/AboutUs';
import WhyEvoke from './components/whyEvoke/WhyEvoke';
import Privacy from './components/policy/Privacy';
import TnC from './components/policy/TnC';
import RefundPolicy from './components/policy/RefundPolicy';
import BookingPage from './components/booking/BookingPage';
import Assessment from './components/assessment/Assessment';
import Q1 from './components/assessment/question/Q1';
import Q2 from './components/assessment/question/Q2';
import Q3 from './components/assessment/question/Q3';
import Q4 from './components/assessment/question/Q4';
import Q5 from './components/assessment/question/Q5';
import Q6 from './components/assessment/question/Q6';
import Q7 from './components/assessment/question/Q7';
import AssessmentDetails from './components/assessment/AssessmentDetails';
import AssessmentCompletion from './components/assessment/AssessmentCompletion';
import BookingConfirmation from './components/booking/BookingConfirmation';
import BookingPage2 from './components/booking/BookingPage2';
import PersonalizedMed from './components/evokeSolution/learnMore/PersonalizedMed';
import MinimallyInvasive from './components/evokeSolution/learnMore/MinimallyInvasive';
import FueHairTransplant from './components/evokeSolution/learnMore/FueHairTransplant';
import NonSurgical from './components/evokeSolution/learnMore/NonSurgical';
import HairTransPlant from './components/evokeSolution/learnMore/HairTransplant';
import Sunakshi from './components/doctorSection/Sunakshi';
import Poonam from './components/doctorSection/Poonam';
import Shastiya from './components/doctorSection/Shastiya';
import Iftekhar from './components/doctorSection/Iftar';
import Prashant from './components/doctorSection/Prashant';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path=''>
      <Route>
        <Route path='' element={<MainLayout />} />
        <Route path='/about-us' element={<AboutUs/>} />
        <Route path='/why-evoke' element={<WhyEvoke />} />
        <Route path='/privacy-policy' element={<Privacy />} />
        <Route path='/tnc-policy' element={<TnC />} />
        <Route path='/cancellation-refund-policy' element={<RefundPolicy />} />
        <Route path='/booking-page' element={<BookingPage />} />
        <Route path='/booking-page2' element={<BookingPage2 />} />
        <Route path='/booking-confirmation' element={<BookingConfirmation />} />
        <Route path='/assessment-page' element={<Assessment />} />
        <Route path='/q1' element={<Q1 />} />
        <Route path='/q2' element={<Q2 />} />
        <Route path='/q3' element={<Q3 />} />
        <Route path='/q4' element={<Q4 />} />
        <Route path='/q5' element={<Q5 />} />
        <Route path='/q6' element={<Q6 />} />
        <Route path='/q7' element={<Q7 />} />
        <Route path='/assessment-details' element={<AssessmentDetails />} />
        <Route path='/assessment-completion' element={<AssessmentCompletion />} />
        <Route path='/personalized-medications' element={<PersonalizedMed />} />
        <Route path='/minimally-invasive-procedures' element={<MinimallyInvasive />} />
        <Route path='/fue-hair-transplant' element={<FueHairTransplant />} />
        <Route path='/non-surgical-options' element={<NonSurgical />} />
        <Route path='/hair-transplant' element={<HairTransPlant />} />
        <Route path='/sunakshi' element={<Sunakshi />} />
        <Route path='/poonam' element={<Poonam />} />
        <Route path='/shayista' element={<Shastiya />} />
        <Route path='/Iftekhar' element={<Iftekhar />} />
        <Route path='/prashant' element={<Prashant />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
