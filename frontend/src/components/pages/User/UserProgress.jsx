import React, { useState } from 'react';
import {
  TrendingUp,
  Clock,
  Calendar,
  BarChart3,
  CheckCircle,
  ArrowLeft
} from 'lucide-react';
import './UserProgress.css';
import { useNavigate } from 'react-router-dom';

export default function ProgressEntryPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    courseName: '',
    currentModule: '',
    hoursSpent: '',
    progressPercentage: '',
    date: new Date().toISOString().split('T')[0],
    notes: '',
  });

  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    const { courseName, currentModule, hoursSpent, progressPercentage } = formData;

    if (courseName && currentModule && hoursSpent && progressPercentage) {
      console.log('Progress entry submitted:', formData);
      setShowSuccess(true);
      setShowError(false);
      setFormData({
        courseName: '',
        currentModule: '',
        hoursSpent: '',
        progressPercentage: '',
        date: new Date().toISOString().split('T')[0],
        notes: '',
      });
      setTimeout(() => setShowSuccess(false), 3000);
    } else {
      setShowError(true);
      setShowSuccess(false);
      setTimeout(() => setShowError(false), 3000);
    }
  };

  return (
    <div className="progress-container">
      <div className="progress-header">
        <button className="back-btn" onClick={() => navigate('/user-dashboard')}>
          <ArrowLeft className="icon-small" />
          Return to Dashboard
        </button>
      </div>

      <div className="form-wrapper">
        <div className="form-hero">
          <h1>Log Your Learning Progress</h1>
          <p>Track your learning journey effortlessly and stay motivated.</p>

          <div className="hero-illustration">
            <div className="blob-1"></div>
            <div className="blob-2"></div>
            <div className="hero-content">
              <div className="left-screen">
                <div className="bar-lines" />
                <BarChart3 className="chart-icon" />
              </div>
              <div className="right-screen">
                <TrendingUp className="trend-icon" />
              </div>
              <div className="avatar" />
            </div>
          </div>
        </div>

        <div className="form-card">
          {showSuccess && (
            <div className="success-msg">
              <CheckCircle className="icon-success" />
              <div>
                <h3>Progress Successful!</h3>
                <p>Your learning progress has been logged successfully.</p>
              </div>
            </div>
          )}

          <h2 className="form-title">
            <BarChart3 className="icon-white" />
            Add New Progress Entry
          </h2>

          <div className="form-grid">
            <div>
              <label>Course Name *</label>
              <input
                type="text"
                name="courseName"
                value={formData.courseName}
                onChange={handleInputChange}
                placeholder="e.g., JavaScript Fundamentals"
              />
            </div>

            <div>
              <label>Current Module/Topic *</label>
              <input
                type="text"
                name="currentModule"
                value={formData.currentModule}
                onChange={handleInputChange}
                placeholder="e.g., Arrays and Objects"
              />
            </div>

            <div>
              <label><Clock className="icon-small" /> Hours Spent *</label>
              <input
                type="number"
                step="0.5"
                name="hoursSpent"
                value={formData.hoursSpent}
                onChange={handleInputChange}
                placeholder="2.5"
              />
            </div>

            <div>
              <label><TrendingUp className="icon-small" /> Progress % *</label>
              <input
                type="number"
                min="0"
                max="100"
                name="progressPercentage"
                value={formData.progressPercentage}
                onChange={handleInputChange}
                placeholder="75"
              />
            </div>

            <div>
              <label><Calendar className="icon-small" /> Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div>
            <label>Notes (Optional)</label>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleInputChange}
              rows="4"
              placeholder="Add any notes about your progress..."
            />
          </div>

          <div className="submit-section">
            <button onClick={handleSubmit}>Add Progress Entry</button>
            {showError && (
              <p className="error-msg">⚠️ Please fill all required fields.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}