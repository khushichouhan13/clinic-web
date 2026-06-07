import React from 'react';
import { Award, CheckCircle, ArrowRight } from 'lucide-react';
import clinicRoomImg from '../assets/clinic_room.png';
import doctorProfileImg from '../assets/doctor_profile.png';
import './About.css';

const About = () => {
  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="about-section">
      <div className="about-container container">
        
        {/* Left Side: Doctor Card & Clinic Room Image */}
        <div className="about-visuals">
          <div className="clinic-bg-img-wrapper">
            <img src={clinicRoomImg} alt="Clinic Room" className="clinic-bg-img" />
            <div className="experience-badge animate-float">
              <h3>4+</h3>
              <p>Years of Clinical Experience</p>
            </div>
          </div>
          
          {/* Doctor Profile Card */}
          <div className="doctor-card glass animate-fade-in-up">
            <div className="doctor-card-header">
              <img src={doctorProfileImg} alt="Dr. Shubham Jaiswal" className="doctor-avatar" />
              <div className="doctor-info">
                <h4>Dr. Shubham Jaiswal</h4>
                <p className="doctor-title">General Physician</p>
                <div className="doctor-meta">
                  <span>Male</span> • <span>Exp: 4+ Years</span>
                </div>
              </div>
            </div>
            <button className="btn btn-secondary-card" onClick={scrollToBooking}>
              Book Now
              <ArrowRight size={14} />
            </button>
          </div>
        </div>

        {/* Right Side: Philosophy Text */}
        <div className="about-text-content">
          <span className="section-tagline">About Our Clinic</span>
          <h2 className="about-title">A Patient-Centric Philosophy</h2>
          
          <p className="about-desc">
            Dr. Shubham Jaiswal believes that true healing begins with listening. With a foundation built on academic excellence and years of hands-on clinical experience, his approach combines the latest medical advancements with a deeply personalized human touch.
          </p>
          
          <p className="about-desc">
            Every patient journey is unique. Whether it's a routine checkup or managing complex health concerns, Dr. Jaiswal ensures that you are an active partner in your health decisions, providing clear communication and expert guidance at every step.
          </p>

          <ul className="credentials-list">
            <li>
              <CheckCircle size={20} className="check-icon" />
              <span>Board Certified Specialist</span>
            </li>
            <li>
              <CheckCircle size={20} className="check-icon" />
              <span>Modern Diagnostic Equipment</span>
            </li>
            <li>
              <CheckCircle size={20} className="check-icon" />
              <span>Comprehensive Patient Advocacy</span>
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default About;
