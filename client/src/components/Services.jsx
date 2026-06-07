import React from 'react';
import { ClipboardList, BarChart3, ShieldCheck } from 'lucide-react';
import './Services.css';

const Services = () => {
  const servicesList = [
    {
      id: 1,
      title: 'General Consultation',
      description: 'Comprehensive health assessments and primary care solutions tailored to your individual medical history and current wellness needs.',
      icon: <ClipboardList size={24} />,
      colorClass: 'service-blue',
    },
    {
      id: 2,
      title: 'Specialized Care',
      description: 'Advanced diagnostic approaches and targeted treatment plans for chronic conditions, ensuring precise medical management and support.',
      icon: <BarChart3 size={24} />,
      colorClass: 'service-teal',
    },
    {
      id: 3,
      title: 'Wellness Checkups',
      description: 'Proactive preventive screenings and lifestyle guidance to help you maintain peak physical health and long-term vitality.',
      icon: <ShieldCheck size={24} />,
      colorClass: 'service-indigo',
    },
  ];

  return (
    <section id="services" className="services-section">
      <div className="services-container container">
        <div className="section-header">
          <span className="section-tagline">What We Offer</span>
          <h2 className="section-title">Our Clinical Services</h2>
          <div className="title-bar"></div>
        </div>

        <div className="services-grid">
          {servicesList.map((service) => (
            <div key={service.id} className="service-card">
              <div className={`service-icon-wrapper ${service.colorClass}`}>
                {service.icon}
              </div>
              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-desc">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
