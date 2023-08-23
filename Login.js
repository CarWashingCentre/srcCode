import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('YOUR_LOGIN_API_URL', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        // Successful login logic, e.g., redirect or store token
        console.log('Login successful');
      } else {
        const data = await response.json();
        setErrorMessage(data.message); // Display the error message
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div className='auth-form-container'>
      <h2>Login</h2>
      {errorMessage && <div className="error">{errorMessage}</div>}
      <form onSubmit={handleLogin} className='login-form'>
          <label htmlFor="email" className='lbl'>Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required/>
          <label htmlFor="password" className='lbl'>Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        <button type="submit" className='btn-btn'>Login</button>
      </form>
      <button className='link-button'>Don't have an account? Register here.</button>
    </div>
  );
};

export default Login;
