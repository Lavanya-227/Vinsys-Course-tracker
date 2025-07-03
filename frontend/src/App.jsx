import React from 'react';
import Contact from './components/pages/Home/contact.jsx';
import Header from './components/pages/Home/Header.jsx';
import Hero from './components/pages/Home/Hero.jsx';
import Features from './components/pages/Home/Features.jsx';
import Footer from './components/pages/Home/Footer.jsx';
import UserLogin from './components/pages/User/UserLogin.jsx';
import AdminLogin from './components/pages/Admin/AdminLogin.jsx';
import CreateAccount from './components/pages/CreateAccount/CreateAccount.jsx';
//import CreateAccount from './components/pages/CreateAccount'
import ProgressEntryPage from './components/pages/User/UserProgress.jsx';
import UserDashboard from './components/pages/User/UserDashbord.jsx';
import AdminDashboard from "./components/pages/Admin/AdminDashbord.jsx";
import UpdateProgress from "./components/pages/UpdateProgress/UpdateProgress.jsx";
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import PrivacyPolicy from './components/pages/TermPolicy/PrivacyPolicy';
import TermsConditions from './components/pages/TermPolicy/TermsConditions';
import ContactUs from './components/pages/TermPolicy/ContactUs';

// import './App.css';

function AppContent() {
  const location = useLocation();

  // Hide header/footer on login, create-account, and CONTACT pages
  const hideLayoutPaths = ['/user-login', '/admin-login', '/create-account', '/contact']; // <-- ADDED '/contact' HERE
  const hideLayout = hideLayoutPaths.includes(location.pathname);

  // --- ADDED A CLASS NAME HERE TO DYNAMICALLY CHANGE STYLES ---
  const mainContentClassName = hideLayout ? 'main-content no-layout' : 'main-content';

  return (
    <div className="app-container">
      {!hideLayout && <Header />}
      <main className={mainContentClassName}>
        <Routes>
  <Route
    path="/"
    element={
      <>
        <Hero />
        <Features />
      </>
    }
  />
  <Route path="/user-login" element={<UserLogin />} />
  <Route path="/admin-login" element={<AdminLogin />} />
  <Route path="/create-account" element={<CreateAccount />} />
  <Route path="/progress-entry" element={<ProgressEntryPage />} />
  <Route path="/user-dashboard" element={<UserDashboard />} />
  <Route path="/admin-dashboard" element={<AdminDashboard />} />
  <Route path="/progress-update" element={<UpdateProgress />} />
  <Route path="/contact" element={<Contact />} /> 
  <Route path="/privacy" element={<PrivacyPolicy />} />
  <Route path="/terms" element={<TermsConditions />} />
  <Route path="/contact-us" element={<ContactUs />} />
  <Route path="/contact-us" element={<ContactUs />} />

  

</Routes>

      </main>
      {!hideLayout && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;