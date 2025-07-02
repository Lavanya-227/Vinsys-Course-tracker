import React, { useState } from "react";
import './AdminLogin.css';
export default function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent default form submit

    setError(""); // clear any previous errors

    try {
      const response = await fetch("https://ltbpmvnp2b.execute-api.us-west-2.amazonaws.com/prod/adminlogin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username,
          password,
          role : "ADMIN"
        })
      });

      const data = await response.json();

      if (response.ok) {
        // Save JWT to localStorage
        localStorage.setItem("adminToken", data.token);

        // Redirect to admin dashboard
        window.location.href = "/admin-dashboard";
      } else {
        setError(data.message || "Login failed");
      }
    } catch (err) {
      console.error(err);
      setError("Network error");
    }
  };

  const switchToUserLogin = () => {
  window.location.href = "/user-login";
};
  return (
    <div className="app-container">
      <div className="form-container">
        <h2>Admin Login</h2>
        <form onSubmit={handleSubmit}>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        <button className="switch-button" onClick={switchToUserLogin}>
          Switch to User Login
        </button>
      </div>
    </div>
  );
}
