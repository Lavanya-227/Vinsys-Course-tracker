import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './UserDashboard.css';

const UserDashboard = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [user, setUser] = useState(null);
    const [myCourses, setMyCourses] = useState([]);
    const [overallProgress, setOverallProgress] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const storedUser = localStorage.getItem("currentUser");
        let currentUser = null;
        try {
            if (storedUser) {
                currentUser = JSON.parse(storedUser);
            }
        } catch (err) {
            console.error("Error parsing currentUser from localStorage:", err);
            // Optionally clear bad data or redirect
            localStorage.removeItem("currentUser");
        }

        if (currentUser) {
            setUser(currentUser);

            if (currentUser.progress && typeof currentUser.progress === 'object') {
                const coursesArray = [];
                let totalPercentage = 0;
                let courseCount = 0;

                for (const courseName in currentUser.progress) {
                    if (currentUser.progress.hasOwnProperty(courseName)) {
                        const courseData = currentUser.progress[courseName];
                        const percentage = parseInt(courseData.percentage?.N || 0); // Convert 'N' string to number
                        const hoursSpent = parseFloat(courseData['Hour spend']?.N || 0); // Convert 'N' string to float

                        // Determine status based on percentage
                        let status = 'Not Started';
                        if (percentage === 100) {
                            status = 'Completed';
                        } else if (percentage > 0) {
                            status = 'In Progress';
                        }

                        coursesArray.push({
                            name: courseName,
                            status: status,
                            progress: percentage,
                            description: courseData.note?.S || 'No description available.',
                            currentModule: courseData['current module']?.S || 'N/A',
                            hoursSpent: hoursSpent,
                            lastUpdated: courseData.lastUpdated?.S || 'N/A'
                        });

                        totalPercentage += percentage;
                        courseCount++;
                    }
                }

                setMyCourses(coursesArray);

                if (courseCount > 0) {
                    setOverallProgress(Math.round(totalPercentage / courseCount));
                } else {
                    setOverallProgress(0);
                }
            } else {
                setMyCourses([]);
                setOverallProgress(0);
            }
        } else {
            navigate('/user-login');
        }
    }, [navigate]); // navigate is a stable function reference from react-router-dom, safe to include

    const handleLogout = () => {
        localStorage.removeItem('currentUser');
        navigate('/');
    };

    const getUserInitials = (userName) => {
        // Ensure user?.username is used as per your localStorage sample, or user?.name if that's what you intend
        if (!userName) return 'U';
        const parts = userName.split(' ');
        if (parts.length > 1) {
            return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
        }
        return userName[0].toUpperCase();
    };

    // New handler for updating course progress
    const handleUpdateProgress = (courseName) => {
        // This will navigate to a form where the user can update the specific course's progress
        navigate(`/update-progress/${encodeURIComponent(courseName)}`);
    };

    return (
        <div className="dashboard-layout">
            <aside className={`dashboard-sidebar ${isSidebarOpen ? 'open' : ''}`}>
                <div className="sidebar-header">
                    <h1 className="app-title">VINSYS Tracker</h1>
                    <button className="close-sidebar-btn" onClick={() => setIsSidebarOpen(false)} aria-label="Close sidebar">
                        &times;
                    </button>
                </div>
                <nav className="sidebar-nav">
                    <ul>
                        <li><a href="#" className="nav-item active"><span className="nav-icon">🏠</span>Home</a></li>
                        <li><a href="#" className="nav-item"><span className="nav-icon">📚</span>My Courses</a></li>
                        <li><a href="#" className="nav-item"><span className="nav-icon">👤</span>Profile</a></li>
                        <li>
                            <button onClick={handleLogout} className="nav-item logout-btn">
                                <span className="nav-icon">🚪</span>Logout
                            </button>
                        </li>
                    </ul>
                </nav>
            </aside>

            <div className="dashboard-main-content">
                <header className="main-header">
                    <button
                        onClick={() => setIsSidebarOpen(true)}
                        className="menu-toggle-btn"
                        aria-label="Open sidebar menu"
                    >
                        ☰
                    </button>
                    <div className="user-info-header">
                        {/* Using user?.username for welcome message as per your sample data */}
                        <span className="user-name">Welcome back, {user?.username || 'Learner'}!</span>
                        {/* Using user?.username for avatar initials */}
                        <div className="user-avatar" title={user?.username || 'User Profile'}>
                            {getUserInitials(user?.username)}
                        </div>
                    </div>
                </header>

                <main className="main-area-content">
                    <section className="dashboard-section welcome-banner">
                        <h2 className="section-title">Your Learning Dashboard</h2>
                        <p className="section-description">
                            Track your progress, explore new courses, and continue your journey!
                        </p>
                    </section>

                    <section className="dashboard-section progress-summary">
                        <h3 className="section-subtitle">Overall Progress</h3>
                        <div className="progress-card overall">
                            <div className="progress-header">
                                <span className="progress-label">Your Cumulative Progress</span>
                                <span className="progress-percentage">{overallProgress}%</span>
                            </div>
                            <div className="progress-bar-container large">
                                <div className="progress-bar-fill" style={{ width: `${overallProgress}%` }}></div>
                            </div>
                            <p className="progress-comment">You're doing great! Keep pushing forward.</p>
                        </div>
                    </section>

                    <section className="dashboard-section my-courses-section">
                        <h3 className="section-subtitle">My Courses</h3>
                        <div className="courses-grid">
                            {myCourses.length > 0 ? (
                                myCourses.map((course, index) => (
                                    <div key={index} className="course-card">
                                        <h4 className="course-title">{course.name}</h4>
                                        <p className="course-description">{course.description}</p>
                                        <div className="course-details">
                                            <p><strong>Current Module:</strong> {course.currentModule}</p>
                                            <p><strong>Hours Spent:</strong> {course.hoursSpent} hours</p>
                                            <p><strong>Last Updated:</strong> {new Date(course.lastUpdated).toLocaleDateString()}</p>
                                        </div>
                                        <div className="course-meta">
                                            <span className={`course-status-badge status-${course.status.toLowerCase().replace(' ', '-')}`}>
                                                {course.status}
                                            </span>
                                            <div className="course-progress-indicator">
                                                <div className="progress-bar-container small">
                                                    <div
                                                        className="progress-bar-fill"
                                                        style={{ width: `${course.progress}%` }}
                                                    ></div>
                                                </div>
                                                <span className="progress-percentage-small">{course.progress}%</span>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => handleUpdateProgress(course.name)}
                                            className="action-button secondary" // New button style
                                        >
                                            Update Progress
                                        </button>
                                        {/* Optional: Add the "Continue Learning/Start Course/View Certificate" button if desired */}
                                        {/* <button className="action-button primary">
                                            {course.status === 'Completed' ? 'View Certificate' :
                                             course.status === 'Not Started' ? 'Start Course' : 'Continue Learning'}
                                        </button> */}
                                    </div>
                                ))
                            ) : (
                                <div className="no-courses-message">
                                    <p>You haven't enrolled in any courses yet.</p>
                                    <button className="action-button primary">Explore Courses</button>
                                </div>
                            )}
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default UserDashboard;