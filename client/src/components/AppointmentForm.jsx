import React, { useState } from 'react';
import axios from 'axios';
import { Calendar, Phone, Mail, User, Clock, MessageSquare, AlertCircle, CheckCircle2 } from 'lucide-react';
import './AppointmentForm.css';

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({ show: false, success: false, message: '' });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Patient name is required';
    if (!formData.phone.trim()) {
      tempErrors.phone = 'Phone number is required';
    } else if (!/^\+?[0-9\s-]{8,15}$/.test(formData.phone)) {
      tempErrors.phone = 'Please enter a valid phone number';
    }
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Please enter a valid email';
    }
    if (!formData.date) tempErrors.date = 'Date is required';
    if (!formData.time) tempErrors.time = 'Time is required';

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear field error as user types
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    try {
      const response = await axios.post(
        import.meta.env.VITE_API_URL || 'http://localhost:5000/api/appointments',
        formData
      );
      
      if (response.data.success) {
        showToast(true, 'Appointment requested successfully! We will contact you soon.');
        setFormData({
          name: '',
          phone: '',
          email: '',
          date: '',
          time: '',
          message: '',
        });
      } else {
        showToast(false, response.data.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      console.error(err);
      showToast(false, err.response?.data?.message || 'Failed to connect to the server. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const showToast = (success, message) => {
    setToast({ show: true, success, message });
    setTimeout(() => {
      setToast({ show: false, success: false, message: '' });
    }, 5000);
  };

  return (
    <section id="booking" className="booking-section">
      <div className="booking-container container">
        <div className="booking-form-card animate-fade-in-up">
          <div className="form-header">
            <span className="section-tagline">Appointment</span>
            <h2 className="gradient-text">Book Your Visit</h2>
            <p>Complete the form below and our team will contact you for confirmation</p>
          </div>

          <form onSubmit={handleSubmit} className="appointment-form">
            <div className="form-grid">
              
              {/* Patient Name */}
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <div className="input-wrapper">
                  <User size={18} className="input-icon" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className={errors.name ? 'input-error' : ''}
                  />
                </div>
                {errors.name && <span className="error-text">{errors.name}</span>}
              </div>

              {/* Email Address */}
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <div className="input-wrapper">
                  <Mail size={18} className="input-icon" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? 'input-error' : ''}
                  />
                </div>
                {errors.email && <span className="error-text">{errors.email}</span>}
              </div>

              {/* Phone Number */}
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <div className="input-wrapper">
                  <Phone size={18} className="input-icon" />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="+1 888 888 8888"
                    value={formData.phone}
                    onChange={handleChange}
                    className={errors.phone ? 'input-error' : ''}
                  />
                </div>
                {errors.phone && <span className="error-text">{errors.phone}</span>}
              </div>

              {/* Preferred Date */}
              <div className="form-group">
                <label htmlFor="date">Preferred Date</label>
                <div className="input-wrapper">
                  <Calendar size={18} className="input-icon" />
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className={errors.date ? 'input-error' : ''}
                  />
                </div>
                {errors.date && <span className="error-text">{errors.date}</span>}
              </div>

              {/* Preferred Time Slot */}
              <div className="form-group">
                <label htmlFor="time">Preferred Time</label>
                <div className="input-wrapper">
                  <Clock size={18} className="input-icon" />
                  <select
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className={errors.time ? 'input-error' : ''}
                  >
                    <option value="">Select Time Slot</option>
                    <option value="09:00 AM - 10:00 AM">09:00 AM - 10:00 AM</option>
                    <option value="10:00 AM - 11:00 AM">10:00 AM - 11:00 AM</option>
                    <option value="11:00 AM - 12:00 PM">11:00 AM - 12:00 PM</option>
                    <option value="01:00 PM - 02:00 PM">01:00 PM - 02:00 PM</option>
                    <option value="02:00 PM - 03:00 PM">02:00 PM - 03:00 PM</option>
                    <option value="03:00 PM - 04:00 PM">03:00 PM - 04:00 PM</option>
                  </select>
                </div>
                {errors.time && <span className="error-text">{errors.time}</span>}
              </div>

              {/* Services Dropdown (Optional representation in message / select) */}
              <div className="form-group">
                <label htmlFor="service">Service Category</label>
                <div className="input-wrapper">
                  <Calendar size={18} className="input-icon" />
                  <select id="service" name="service" onChange={(e) => setFormData({ ...formData, message: `[${e.target.value}] ` + formData.message })}>
                    <option value="General Consultation">General Consultation</option>
                    <option value="Specialized Care">Specialized Care</option>
                    <option value="Wellness Checkup">Wellness Checkup</option>
                  </select>
                </div>
              </div>

            </div>

            {/* Message */}
            <div className="form-group textarea-group">
              <label htmlFor="message">Additional Message</label>
              <div className="input-wrapper align-start">
                <MessageSquare size={18} className="input-icon textarea-icon" />
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Tell us about your medical requirements (optional)..."
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>

            <button type="submit" className="btn btn-submit" disabled={loading}>
              {loading ? (
                <>
                  <span className="spinner"></span>
                  Processing...
                </>
              ) : (
                'Confirm Appointment Request'
              )}
            </button>
          </form>
        </div>
      </div>

      {/* Toast Notification */}
      {toast.show && (
        <div className={`toast-notification ${toast.success ? 'toast-success' : 'toast-error'} glass`}>
          {toast.success ? <CheckCircle2 size={20} /> : <AlertCircle size={20} />}
          <span>{toast.message}</span>
        </div>
      )}
    </section>
  );
};

export default AppointmentForm;
