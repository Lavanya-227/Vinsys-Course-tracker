import React from 'react';
// import { useNavigate } from 'react-router-dom';
import './homePage.css'
// import '../../../App.css';
// You can download a similar image from a stock photo website
// or use a placeholder.
import heroImage from '../../../assets/phone.png'; // Make sure to add an image to this path
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="hero-section">
      <h1>Welcome to Course Progress Tracker</h1>
      <p>Track your learning journey effortlessly and stay motivated.</p>
      <img src={heroImage} alt="Person tracking progress on charts" className="hero-image" />
      <div className="hero-buttons">
        <button className="btn" onClick={() => navigate('/user-login')}>User Login</button>
        <button className="btn" onClick={() => navigate('/admin-login')}>Admin Login</button>
        <button className="btn" onClick={() => navigate('/create-account')} >Create New Account</button>
      </div>
    </section>
  );
};

export default Hero;