import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Adminlogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("./usernames_passwords.json")
      .then((response) => response.json())
      .then((usernames_passwords) => {
        console.log("Fetched users from JSON:", usernames_passwords); 
        setUsers(usernames_passwords);
      })
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedUsername = username.trim();
    const trimmedPassword = password.trim();

    console.log("Entered username:", trimmedUsername);
    console.log("Entered password:", trimmedPassword);

    if (users.length === 0) {
      console.log(
        "No users fetched. Check if usernames_passwords.json exists and is accessible."
      );
      setError("Error fetching users.");
      return;
    }

    const user = users.find(
      (user) =>
        user.username.trim() === trimmedUsername &&
        user.password.trim() === trimmedPassword
    );

    console.log("Matched user:", user);

    if (user) {
      console.log("Login successful");
      setError("");
      navigate("/admin-page");
    } else {
      console.log("Login failed");
      setError("Invalid username or password");
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login Admin</h2>

        {error && <p className="error-message">{error}</p>}

        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-button">
        Login as Admin
        </button>
      </form>
    </div>
  );
};

export default Adminlogin;
