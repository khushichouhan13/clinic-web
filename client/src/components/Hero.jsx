import React from 'react';
import { ArrowRight } from 'lucide-react';
import doctorProfile from '../assets/doctor_profile.png';
import './Hero.css';

const Hero = () => {
  const handleScrollToBooking = () => {
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero-section">
      <div className="hero-container container">
        <div className="hero-content animate-fade-in-up">
          <h1 className="hero-title">
            Excellence in <br />
            <span className="gradient-text">Personalized</span> Care
          </h1>
          <p className="hero-description">
            Providing compassionate medical expertise for you and your family. Your health journey is guided by professional integrity and modern clinical excellence.
          </p>
          <button className="btn btn-primary hero-btn" onClick={handleScrollToBooking}>
            Book Appointment
            <ArrowRight size={18} />
          </button>
        </div>
        <div className="hero-image-container">
          <div className="hero-image-wrapper animate-float">
            <img src={doctorProfile} alt="Dr. Shubham Jaiswal" className="hero-image" />
            <div className="hero-badge">
              <span className="badge-dot"></span>
              Dr. Shubham Jaiswal
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
