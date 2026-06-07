import React from 'react';
import { Quote, Star } from 'lucide-react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote: "Dr. Chouhan's attention to detail is remarkable. He took the time to explain everything clearly and made me feel completely at ease throughout my treatment.",
      name: "Sarah Miller",
      type: "Patient since 2022",
    },
    {
      id: 2,
      quote: "Finding a doctor who actually listens can be tough, but Dr. Ritik is exceptional. The clinic environment is professional, clean, and very welcoming.",
      name: "James Wilson",
      type: "General Wellness Patient",
    },
  ];

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="testimonials-container container">
        <div className="section-header">
          <span className="section-tagline">Testimonials</span>
          <h2 className="section-title">Patient Experiences</h2>
          <p className="section-subtitle">Trusted by the community for consistent care and professional results.</p>
          <div className="title-bar"></div>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t) => (
            <div key={t.id} className="testimonial-card">
              <div className="card-top">
                <Quote size={32} className="quote-icon" />
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" className="star-icon" />
                  ))}
                </div>
              </div>
              <p className="testimonial-quote">"{t.quote}"</p>
              <div className="testimonial-author">
                <h4 className="author-name">{t.name}</h4>
                <p className="author-role">{t.type}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
