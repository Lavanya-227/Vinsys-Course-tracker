import React from 'react';
import './pageStyles.css'; // This will contain the styling for .page-container and other elements

const ContactUs = () => {
  return (
    <div className="page-container">
      <h1>Contact Us</h1>
      <p>We're here to help you! Whether you have a question about your progress, need technical assistance, or just want to provide feedback, please don't hesitate to reach out. We aim to respond within 24-48 business hours.</p>

      <div className="contact-details-section">
        <h2>How to Reach Us</h2>

        <div className="contact-item">
          <h3>Email Support</h3>
          <p className="contact-info">
            <span className="icon">📧</span>
            For general inquiries, technical support, or feedback, email us at:<br />
            <a href="mailto:support@courseprogress.com" className="contact-link">support@courseprogress.com</a>
          </p>
        </div>

        <div className="contact-item">
          <h3>Phone Support</h3>
          <p className="contact-info">
            <span className="icon">📞</span>
            Speak directly with our support team during business hours:<br />
            <strong>+91-9876543210</strong> (Mon–Fri, 10 AM – 6 PM IST)
          </p>
        </div>

        <div className="contact-item">
          <h3>Our Office Address</h3>
          <p className="contact-info">
            You can find us at our headquarters in Pune:<br />
            VINSYS Learning Pvt Ltd<br />
            Pune, Maharashtra, India – 411014
          </p>
        </div>
      </div>

      <div className="common-issues-section">
        <h2>Quick Help for Common Issues</h2>
        <p>Before contacting us, check if your issue is listed below. We might have a quicker solution for you!</p>
        <ul>
          <li>
            <strong>Can't log in to the dashboard?</strong><br />
            Ensure your internet connection is stable and try clearing your browser's cache. If the issue persists, please use the "Forgot Password" link on the login page.
          </li>
          <li>
            <strong>My progress report isn't saving/updating correctly.</strong><br />
            Verify you've completed all required sections of the course. Sometimes, a simple page refresh or logging out and logging back in can resolve this.
          </li>
          <li>
            <strong>Forgot your password?</strong><br />
            Use the "Forgot Password" link on the login page to reset it. A reset link will be sent to your registered email address.
          </li>
          <li>
            <strong>Having trouble with a specific course module?</strong><br />
            First, check the course's FAQ or discussion forum if available. For technical issues within a module, please describe the problem and mention the course name and module number when contacting us.
          </li>
        </ul>
      </div>

      <p className="note">
        When contacting support via email or phone, please mention your **User ID** (found in your profile settings) and a detailed description of your issue for faster and more efficient assistance. Screenshots are also very helpful!
      </p>
    </div>
  );
};

export default ContactUs;