import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container container">
        
        {/* Left Column: Contact details & Hours */}
        <div className="contact-info-panel">
          <span className="section-tagline">Get In Touch</span>
          <h2 className="contact-title">Contact Information</h2>
          <p className="contact-subtitle">We are here to help you. Reach out via any channel below.</p>

          <div className="contact-details-list">
            
            {/* Address */}
            <div className="contact-item">
              <div className="contact-icon-box">
                <MapPin size={20} />
              </div>
              <div className="contact-item-text">
                <h4>Clinic Address</h4>
                <p>Sanawad Road, near District Hospital, Khargone, Madhya Pradesh 451001</p>
              </div>
            </div>

            {/* Phone */}
            <div className="contact-item">
              <div className="contact-icon-box">
                <Phone size={20} />
              </div>
              <div className="contact-item-text">
                <h4>Phone Number</h4>
                <p>+91 81205 74895</p>
              </div>
            </div>

            {/* Email */}
            <div className="contact-item">
              <div className="contact-icon-box">
                <Mail size={20} />
              </div>
              <div className="contact-item-text">
                <h4>Email Support</h4>
                <p>contact@drshubhamclinic.com</p>
              </div>
            </div>

            {/* Hours */}
            <div className="contact-item">
              <div className="contact-icon-box">
                <Clock size={20} />
              </div>
              <div className="contact-item-text">
                <h4>Clinic Hours</h4>
                <div className="clinic-hours-grid">
                  <div className="hour-row"><span>Mon - Fri</span> <span>09:00 AM - 05:00 PM</span></div>
                  <div className="hour-row"><span>Saturday</span> <span>10:00 AM - 02:00 PM</span></div>
                  <div className="hour-row Sunday"><span>Sunday</span> <span>Closed</span></div>
                </div>
              </div>
            </div>

          </div>


        </div>

        {/* Right Column: Google Maps Embed */}
        <div className="contact-map-panel">
          <div className="map-frame-wrapper">
            <iframe
              title="Dr Shubham Jaiswal Clinic Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118228.69238382346!2d75.54924765668612!3d21.823439401768407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962635957d383b1%3A0xe960bf764f69966d!2sKhargone%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
