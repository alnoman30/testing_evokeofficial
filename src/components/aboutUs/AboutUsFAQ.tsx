import React, { useState } from 'react';
import './AboutUsFAQ.css';
import faqDown from '../../assets/FaqDown.svg';
import faqUp from '../../assets/FaqUp.svg';

interface FAQItem {
  question: string;
  answer: string;
}

const AboutUsFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: 'Expertise',
      answer: 'Our team of highly qualified dermatologists and specialists ensures that you receive the best possible care and treatment based on years of experience and advanced medical knowledge.'  },
    {
      question: 'Trust',
      answer: 'We prioritize transparency and honesty in all our interactions. You can trust us to provide accurate diagnoses and effective treatments, ensuring your peace of mind.',
    },
    {
      question: 'Innovation ',
      answer: 'We continuously seek and incorporate the latest advancements in hair health technology to provide you with cutting-edge treatments.',
    },
    // {
    //   question: 'What if I don’t see any results?',
    //   answer: 'We are committed to your satisfaction and will work with you to adjust your treatment plan if needed. It`s important to follow the recommended post-treatment care and give the treatment time to show results. If you`re not seeing progress, we offer follow-up free consultations to reassess and refine your approach.',
    // },
    // {
    //   question: 'Are all these procedures scientifically proven?',
    //   answer: 'Yes, all our procedures are backed by scientific research and are performed using methods that are proven to be effective. Our treatments are conducted by experienced professionals, ensuring the highest standards of care and safety.',
    // },
    // {
    //   question: 'Are there any side effects to these treatments?',
    //   answer: 'Most of our treatments have minimal to no side effects. Our team will provide you with detailed information on what to expect and how to care for your scalp post-treatment. ',
    // },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="aboutUs-faq">
        <div className='aboutUs-faq-head'>
      <h2>Key Values We Stand By</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit elementum tempus hac tellus . </p>

        </div>
      <div className='aboutUs-faq-div'>

      {faqs.map((faq, index) => (
        <div key={index} className={`aboutUs-faq-item ${openIndex === index ? 'open' : ''}`}>
          <div className="aboutUs-faq-question" onClick={() => toggleFAQ(index)}>
            {faq.question}
            <img src={openIndex === index ? faqUp : faqDown} alt="faq-toggle" className="aboutUs-faq-toggle" />
            {/* <span className="faq-toggle">{openIndex === index ? '../../assets/FaqDown.svg' : '../../assets/FaqUp.svg'}</span> */}
          </div>
          {openIndex === index && <div className="aboutUs-faq-answer">{faq.answer}</div>}
        </div>
      ))}
      </div>
    </div>
  );
};

export default AboutUsFAQ;
