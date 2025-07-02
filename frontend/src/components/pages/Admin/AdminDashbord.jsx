import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminDashbord_css.css';

const AdminDashboard = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [adminUser, setAdminUser] = useState(null); // State to hold admin user data
    const navigate = useNavigate();

    // Mock Data for Admin Dashboard
    const totalUsers = 1250;
    const activeCourses = 85;
    const pendingApprovals = 12;
    const newRegistrationsToday = 7;

    const recentActivities = [
        { id: 1, type: 'User Registered', description: 'rohit signed up', timestamp: '2 hours ago' },
        { id: 2, type: 'Course Updated', description: 'Deep Learning Specialization content updated', timestamp: '5 hours ago' },
        { id: 3, type: 'User Progress', description: 'rohit completed "Intro to Data Science"', timestamp: '1 day ago' },
        { id: 4, type: 'Approval Needed', description: 'New instructor request from vishnu', timestamp: '2 days ago' },
    ];

    const popularCourses = [
        { id: 1, name: 'Machine Learning Fundamentals', enrollments: 890, status: 'Active' },
        { id: 2, name: 'Introduction to Data Science', enrollments: 750, status: 'Active' },
        { id: 3, name: 'Deep Learning Specialization', enrollments: 420, status: 'Active' },
        { id: 4, name: 'Web Development Bootcamp', enrollments: 310, status: 'Active' },
    ];

    useEffect(() => {
        // Retrieve admin user from localStorage
        const currentAdmin = JSON.parse(localStorage.getItem('adminUser'));

        if (currentAdmin && currentAdmin.role === 'admin') {
            setAdminUser(currentAdmin);
        } else {
            navigate('/admin-login');
        }
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('adminUser');
        navigate('/');
    };

    const getUserInitials = (userName) => {
        if (!userName) return 'A';
        const parts = userName.split(' ');
        if (parts.length > 1) {
            return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
        }
        return userName[0].toUpperCase();
    };

    return (
        <div className="admin-dashboard-layout">
            <aside className={`admin-sidebar ${isSidebarOpen ? 'open' : ''}`}>
                <div className="sidebar-header">
                    <h1 className="app-title">Admin Panel</h1>
                    <button className="close-sidebar-btn" onClick={() => setIsSidebarOpen(false)} aria-label="Close sidebar">
                        &times;
                    </button>
                </div>
                <nav className="sidebar-nav">
                    <ul>
                        <li><a href="#" className="nav-item active"><span className="nav-icon">📊</span>Dashboard</a></li>
                        <li><a href="#" className="nav-item"><span className="nav-icon">👥</span>Manage Users</a></li>
                        <li><a href="#" className="nav-item"><span className="nav-icon">📚</span>Manage Courses</a></li>
                        <li><a href="#" className="nav-item"><span className="nav-icon">🔔</span>Approvals</a></li>
                        <li><a href="#" className="nav-item"><span className="nav-icon">⚙️</span>Settings</a></li>
                        <li>
                            <button onClick={handleLogout} className="nav-item logout-btn">
                                <span className="nav-icon">🚪</span>Logout
                            </button>
                        </li>
                    </ul>
                </nav>
            </aside>

            <div className="admin-main-content">
                <header className="main-header">
                    <button
                        onClick={() => setIsSidebarOpen(true)}
                        className="menu-toggle-btn"
                        aria-label="Open sidebar menu"
                    >
                        ☰
                    </button>
                    <div className="admin-info-header">
                        <span className="admin-name">Hi, {adminUser?.name || 'Admin'}!</span>
                        <div className="admin-avatar" title={adminUser?.name || 'Admin Profile'}>
                            {getUserInitials(adminUser?.name)}
                        </div>
                    </div>
                </header>

                <main className="main-area-content">
                    <section className="admin-section welcome-banner">
                        <h2 className="section-title">Admin Overview</h2>
                        <p className="section-description">
                            Manage your platform's users, courses, and settings.
                        </p>
                    </section>

                    <section className="admin-section summary-cards-section">
                        <h3 className="section-subtitle">Platform Statistics</h3>
                        <div className="summary-cards-grid">
                            <div className="summary-card">
                                <div className="card-icon">👥</div>
                                <div className="card-info">
                                    <span className="card-value">{totalUsers}</span>
                                    <span className="card-label">Total Users</span>
                                </div>
                            </div>
                            <div className="summary-card">
                                <div className="card-icon">📚</div>
                                <div className="card-info">
                                    <span className="card-value">{activeCourses}</span>
                                    <span className="card-label">Active Courses</span>
                                </div>
                            </div>
                            <div className="summary-card">
                                <div className="card-icon">🔔</div>
                                <div className="card-info">
                                    <span className="card-value">{pendingApprovals}</span>
                                    <span className="card-label">Pending Approvals</span>
                                </div>
                            </div>
                            <div className="summary-card">
                                <div className="card-icon">✨</div>
                                <div className="card-info">
                                    <span className="card-value">{newRegistrationsToday}</span>
                                    <span className="card-label">New Users Today</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="admin-section recent-activities-section">
                        <h3 className="section-subtitle">Recent Activities</h3>
                        <div className="activity-table-container">
                            <table className="activity-table">
                                <thead>
                                    <tr>
                                        <th>Type</th>
                                        <th>Description</th>
                                        <th>Time</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {recentActivities.map(activity => (
                                        <tr key={activity.id}>
                                            <td>{activity.type}</td>
                                            <td>{activity.description}</td>
                                            <td>{activity.timestamp}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <section className="admin-section popular-courses-section">
                        <h3 className="section-subtitle">Popular Courses</h3>
                        <div className="course-table-container">
                            <table className="course-table">
                                <thead>
                                    <tr>
                                        <th>Course Name</th>
                                        <th>Enrollments</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {popularCourses.map(course => (
                                        <tr key={course.id}>
                                            <td>{course.name}</td>
                                            <td>{course.enrollments}</td>
                                            <td><span className={`status-badge status-${course.status.toLowerCase()}`}>{course.status}</span></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default AdminDashboard;