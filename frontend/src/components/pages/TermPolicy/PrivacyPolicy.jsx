import React from 'react';
import './pageStyles.css'; // Make sure this CSS file contains the improved .page-container styles

const PrivacyPolicy = () => {
  return (
    <div className="page-container">
      <h1>Privacy Policy</h1>
      <p>
        At **Course Progress Tracker**, your privacy is of utmost importance to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform.
        By accessing or using Course Progress Tracker, you agree to this Privacy Policy.
      </p>

      <p className="note">Last updated: July 3, 2025</p> {/* Updated date to current */}

      <h2>1. Information We Collect</h2>
      <p>We collect various types of information to provide and improve our service to you:</p>
      <ul>
        <li>
          <strong>Personal Identifiable Information (PII):</strong>
          <ul>
            <li><strong>Account Data:</strong> Your name, email address, password (encrypted), and organization/institution details (if applicable) when you register.</li>
            <li><strong>Contact Information:</strong> If you reach out to us, we may collect your email, phone number, and the content of your messages.</li>
          </ul>
        </li>
        <li>
          <strong>Usage Data:</strong>
          <ul>
            <li><strong>Course Progress Data:</strong> Information related to your interactions with courses, including completion status, quiz scores, time spent on modules, and learning paths.</li>
            <li><strong>Dashboard Activity:</strong> How you navigate and utilize your dashboard, including features accessed and frequency of use.</li>
            <li><strong>Technical Data:</strong> Your IP address, browser type and version, device type (e.g., mobile, desktop), operating system, unique device identifiers, referring URLs, and diagnostic data.</li>
          </ul>
        </li>
        <li>
          <strong>Cookies and Tracking Technologies:</strong> We use cookies and similar tracking technologies to enhance your experience, analyze usage, and remember your preferences. More details below.
        </li>
      </ul>

      <h2>2. How We Use Your Information</h2>
      <p>We use the collected information for various purposes, including:</p>
      <ul>
        <li>To **provide and maintain** the Course Progress Tracker service, including displaying your learning progress and managing your account.</li>
        <li>To **personalize your experience** by understanding how you use our services.</li>
        <li>To enable **administrators/instructors** to generate performance reports, track student engagement, and tailor educational content.</li>
        <li>To **improve, secure, and troubleshoot** our platform, fix bugs, and analyze usage trends.</li>
        <li>To **communicate with you** regarding service updates, security alerts, and support inquiries.</li>
        <li>To **monitor the usage** of the service for compliance with our Terms and Conditions.</li>
        <li>To **detect, prevent, and address** technical issues or fraudulent activity.</li>
      </ul>

      <h2>3. How We Share Your Information</h2>
      <p>We do not sell or rent your Personal Identifiable Information to third parties. We may share information in the following circumstances:</p>
      <ul>
        <li>
          <strong>With Your Institution/Organization:</strong> If you access Course Progress Tracker through an educational institution or organization, your course progress and performance data may be shared with designated administrators or instructors from that entity for educational and administrative purposes.
        </li>
        <li>
          <strong>Service Providers:</strong> We may share data with trusted third-party service providers who assist us in operating our platform, conducting our business, or serving our users (e.g., hosting, analytics, email delivery). These providers are contractually obligated to keep your information confidential and use it only for the purposes for which we disclose it to them.
        </li>
        <li>
          <strong>Legal Requirements:</strong> We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., a court order or government agency).
        </li>
        <li>
          <strong>Business Transfers:</strong> In the event of a merger, acquisition, or asset sale, your personal data may be transferred. We will provide notice before your Personal Data is transferred and becomes subject to a different Privacy Policy.
        </li>
      </ul>

      <h2>4. Cookies and Tracking Technologies</h2>
      <p>
        We use cookies and similar tracking technologies (like local storage) to track activity on our Service and hold certain information. Cookies are small data files placed on your device.
        We use cookies for:
      </p>
      <ul>
        <li><strong>Authentication:</strong> To keep you signed in and remember your preferences.</li>
        <li><strong>Security:</strong> To help detect and prevent malicious activity.</li>
        <li><strong>Analytics:</strong> To understand how users interact with our platform and identify areas for improvement.</li>
      </ul>
      <p>You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.</p>

      <h2>5. Data Security</h2>
      <p>
        The security of your data is paramount to us. We implement a variety of security measures, including encryption, access controls, and regular security audits, to protect your Personal Data from unauthorized access, alteration, disclosure, or destruction.
        However, please remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
      </p>

      <h2>6. Your Data Protection Rights</h2>
      <p>Depending on your location and applicable data protection laws, you may have the following rights regarding your Personal Data:</p>
      <ul>
        <li><strong>Access:</strong> The right to request copies of your Personal Data.</li>
        <li><strong>Rectification:</strong> The right to request that we correct any information you believe is inaccurate or complete information you believe is incomplete.</li>
        <li><strong>Erasure:</strong> The right to request that we erase your Personal Data, under certain conditions.</li>
        <li><strong>Restrict Processing:</strong> The right to request that we restrict the processing of your Personal Data, under certain conditions.</li>
        <li><strong>Object to Processing:</strong> The right to object to our processing of your Personal Data, under certain conditions.</li>
        <li><strong>Data Portability:</strong> The right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</li>
        <li><strong>Withdraw Consent:</strong> If we are relying on your consent to process your personal data, you have the right to withdraw that consent at any time.</li>
      </ul>
      <p>To exercise any of these rights, please contact us using the details below.</p>

      <h2>7. Children's Privacy</h2>
      <p>
        Our Service is not intended for use by children under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If you are a parent or guardian and you are aware that your child has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from children without verification of parental consent, we take steps to remove that information from our servers.
      </p>

      <h2>8. Changes to This Privacy Policy</h2>
      <p>
        We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the top. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
      </p>

      <h2>9. Contact Us</h2>
      <p>If you have any questions about this Privacy Policy, please contact us:</p>
      <ul>
        <li>By email: <a href="mailto:support@courseprogress.com">support@courseprogress.com</a></li>
        <li>By visiting our Contact Us page: <a href="/contact">Contact Us</a> (You might need to adjust this path based on your routing setup)</li>
        <li>By phone: +91-9876543210 (Mon–Fri, 10 AM – 6 PM IST)</li>
        <li>By mail: VINSYS Learning Pvt Ltd, Pune, Maharashtra, India – 411014.</li>
      </ul>
    </div>
  );
};

export default PrivacyPolicy;