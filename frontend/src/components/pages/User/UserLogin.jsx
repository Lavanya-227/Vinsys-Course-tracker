import React, { useState } from "react";
import './UserLogin.css';

export default function UserLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("https://ltbpmvnp2b.execute-api.us-west-2.amazonaws.com/prod/userlogin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username,
          password,
          role: "USER"
        })
      });

      const data = await response.json();
      console.log("✅ Login API response:", data);

      if (response.ok) {
        console.log("✅ API response:", data);

        // Save the token separately
        localStorage.setItem("token", data.token);

        // Store the user object consistently
        localStorage.setItem("currentUser", JSON.stringify(data.user));

        // Redirect
        window.location.href = "/user-dashboard";
}
      else {
        setError(data.message || "Login failed");
      }
    } catch (err) {
      console.error(err);
      setError("Network error");
    }
  };

  const switchToAdminLogin = () => {
    window.location.href = "/admin-login";
  };

  return (
    <div className="app-container">
      <div className="form-container">
        <h2>User Login</h2>
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
          <div className="forgot-password-link">
            <a href="#">Forgot Password?</a>
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        <p className="switch-text" onClick={switchToAdminLogin}>
          <a href="#">Switch to Admin Login</a>
        </p>
      </div>
    </div>
  );
}
