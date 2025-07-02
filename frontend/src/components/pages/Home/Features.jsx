import React from 'react';
import { FaChartLine, FaTasks, FaBullseye } from 'react-icons/fa';
// import '../../../App.css';
import './homePage.css'
const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="feature-card">
      <div className="feature-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

const Features = () => {
  const featuresData = [
    {
      icon: <FaChartLine size={40} />,
      title: 'Track Progress',
      description: 'Monitor your course completion with ease and accuracy.',
    },
    {
      icon: <FaTasks size={40} />,
      title: 'Manage Courses',
      description: 'Organize and manage all your courses in one place.',
    },
    {
      icon: <FaBullseye size={40} />,
      title: 'Set Goals',
      description: 'Set and achieve your learning goals effectively.',
    },
  ];

  return (
    <section className="features-section">
      {featuresData.map((feature, index) => (
        <FeatureCard
          key={index}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </section>
  );
};

export default Features;