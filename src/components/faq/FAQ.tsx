import React, { useState } from 'react';
import './FAQ.css';
import faqDown from '../../assets/FaqDown.svg';
import faqUp from '../../assets/FaqUp.svg';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: 'What can I expect during the initial consultation?',
      answer: 'During the initial consultation, our experts will conduct a detailed analysis, including a hair scan and blood tests, to understand the root cause of your hair issues and recommend the best treatment options.',
    },
    {
      question: 'Are the treatments suitable for all hair types?',
      answer: 'Yes, our treatments are tailored to suit all hair types, ensuring personalized care for every patient.',
    },
    {
      question: 'How long does it take to see hair growth?',
      answer: 'It typically takes about 3 to 6 months to see initial hair growth, with full results visible within 12 to 18 months post treatment',
    },
    {
      question: 'What if I don’t see any results?',
      answer: 'We are committed to your satisfaction and will work with you to adjust your treatment plan if needed. It`s important to follow the recommended post-treatment care and give the treatment time to show results. If you`re not seeing progress, we offer follow-up free consultations to reassess and refine your approach.',
    },
    {
      question: 'Are all these procedures scientifically proven?',
      answer: 'Yes, all our procedures are backed by scientific research and are performed using methods that are proven to be effective. Our treatments are conducted by experienced professionals, ensuring the highest standards of care and safety.',
    },
    {
      question: 'Are there any side effects to these treatments?',
      answer: 'Most of our treatments have minimal to no side effects. Our team will provide you with detailed information on what to expect and how to care for your scalp post-treatment. ',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq">
      <h2>Common Questions</h2>
      {faqs.map((faq, index) => (
        <div key={index} className={`faq-item ${openIndex === index ? 'open' : ''}`}>
          <div className="faq-question" onClick={() => toggleFAQ(index)}>
            {faq.question}
            <img src={openIndex === index ? faqUp : faqDown} alt="faq-toggle" className="faq-toggle" />
            {/* <span className="faq-toggle">{openIndex === index ? '../../assets/FaqDown.svg' : '../../assets/FaqUp.svg'}</span> */}
          </div>
          {openIndex === index && <div className="faq-answer">{faq.answer}</div>}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
