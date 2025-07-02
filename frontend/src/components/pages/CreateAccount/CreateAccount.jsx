import React, { useState } from "react";
import './CreacteAccount.css';

export default function CreateAccount() {
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("USER");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("https://ltbpmvnp2b.execute-api.us-west-2.amazonaws.com/prod/createaccount", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username,
          email,
          password,
          role
        })
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("adminToken", data.token);

        if (role === "ADMIN") {
          window.location.href = "/admin-login";
        } else {
          window.location.href = "/user-login";
        }
      } else {
        setError(data.message || "Signup failed");
      }
    } catch (err) {
      console.error(err);
      setError("Network error");
    }
  };

  return (
    <div className="app-container">
      <div className="form-container">
        <h2>Create New Account</h2>
        <form onSubmit={handleSubmit}>
          {error && <p style={{ color: "red" }}>{error}</p>}

          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              placeholder="Enter your name"
              value={username}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="role">Account Type</label>
            <select
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="USER">User</option>
              <option value="ADMIN">Admin</option>
            </select>
          </div>

          <button type="submit" className="signup-button">
            Sign Up
          </button>
        </form>

        <p className="terms-text">
          By signing up, you agree to our <a href="#">Terms of Service</a>
        </p>
        <p className="login-text">
          Already have an account? <a href="#">Login here</a>
        </p>
      </div>
    </div>
  );
}
