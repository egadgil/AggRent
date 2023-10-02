import React, { useState } from 'react';
import './LoginPage.css'; // Import your CSS file for styling

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here, e.g., send a request to a server
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <input
            type="text"
            className="input-field"
            placeholder="Username"
            required
            value={username}
            onChange={handleUsernameChange}
          />
          <input
            type="password"
            className="input-field"
            placeholder="Password"
            required
            value={password}
            onChange={handlePasswordChange}
          />
          <button type="submit" className="submit-btn">
            Log In
          </button>
        </form>
        <p className="forgot-password">Forgot your password?</p>
      </div>
    </div>
  );
}

export default LoginPage;