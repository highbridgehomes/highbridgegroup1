import React, { useState } from "react";
import "./FAQ.css"; // Import the CSS file for styling

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq-section">
      <div className="container">
        <div className="faq-header">
          <h5 className="subtitle">FAQ</h5>
          <h2 className="title">Frequently Asked Questions</h2>
        </div>
        <div className="faq-list">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
            >
              <div
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <button className="toggle-btn">
                  {activeIndex === index ? "-" : "+"}
                </button>
              </div>
              {activeIndex === index && (
                <div className="faq-answer">
                  <p>{faq.description}</p>
                  <ul>
                    {faq.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                  <p>
                    {faq.additionalText} <br />
                    For more details,{" "}
                    <a href="#!">Contact us</a> and our team will assist you
                    promptly.
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// FAQ data for a real estate business
const faqData = [
  {
    question: "What is the process for buying a property?",
    description:
      "Buying a property involves several steps, including understanding your budget, finding the right property, and completing the paperwork.",
    points: [
      "Determine your budget and financing options.",
      "Search for properties that meet your needs.",
      "Schedule property viewings and inspections.",
      "Finalize the purchase agreement and close the deal.",
    ],
    additionalText: "Our team will guide you through each step to ensure a smooth process.",
  },
  {
    question: "What services do you offer for property sellers?",
    description:
      "We provide comprehensive services for property sellers to maximize their property's value and ensure a quick sale.",
    points: [
      "Property evaluation and pricing.",
      "Professional photography and listing services.",
      "Marketing across various platforms.",
      "Negotiation and closing support.",
    ],
    additionalText: "We aim to help you sell your property at the best possible price.",
  },
  {
    question: "How do I know if I qualify for a mortgage?",
    description:
      "Mortgage qualification depends on factors such as your income, credit score, and existing debt obligations.",
    points: [
      "Check your credit score and financial history.",
      "Understand the debt-to-income ratio requirements.",
      "Get pre-approved by a lender for better clarity.",
    ],
    additionalText: "We can connect you with trusted mortgage advisors to simplify this process.",
  },
  {
    question: "What should I look for during a property inspection?",
    description:
      "A property inspection is crucial for identifying potential issues and understanding the condition of the property.",
    points: [
      "Check the structural integrity of the building.",
      "Inspect plumbing, electrical systems, and HVAC units.",
      "Look for signs of water damage or pest infestation.",
    ],
    additionalText: "A professional inspector can provide a detailed report for your peace of mind.",
  },
  {
    question: "Do you offer property management services?",
    description:
      "Yes, we offer property management services to help landlords manage their investments efficiently.",
    points: [
      "Tenant screening and leasing.",
      "Rent collection and accounting.",
      "Maintenance and repair coordination.",
      "Regular property inspections.",
    ],
    additionalText: "Let us handle the day-to-day tasks while you enjoy passive income.",
  },
];

export default FAQ;