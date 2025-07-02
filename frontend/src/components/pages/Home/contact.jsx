import React, { useState } from 'react';
// import '../../../App.css'; 
import './homePage.css'
const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { name, email, message });
    
    alert('Thank you for your message! We will get back to you soon.');
    
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    // The main container for the two-column layout
    <div className="contact-page-layout">
      {/* Left Column: Contact Information */}
      <div className="contact-info-section">
        <h2>Get in Touch</h2>
        <p className="contact-info-description">
          We'd love to hear from you. Send us a message or connect with us through our contact details.
        </p>
        <div className="info-item">
          <span className="info-icon">📍</span>
          <p>Pune, Maharashtra, India</p>
        </div>
        <div className="info-item">
          <span className="info-icon">📞</span>
          <p>+91 98765 43210</p>
        </div>
        <div className="info-item">
          <span className="info-icon">✉️</span>
          <p>contact@vinsys.com</p>
        </div>
        {/* The social media icons have been removed from here */}
      </div>

      {/* Right Column: The Contact Form */}
      <div className="contact-form-section">
        <form onSubmit={handleSubmit} className="contact-form-container">
          <h3>Send us a message</h3>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" required value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" rows="6" required value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
          </div>
          <button type="submit" className="submit-button">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;