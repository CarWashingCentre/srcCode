import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'
import Login from './Login';

function Register(props) {
  const [user, setUser] = useState({
    firstName:'',
    lastName:'',
    email:'',
    mobileNo:'',
    address:'',
    password: '',
    // Add more fields as needed
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://localhost:7148/api/User', user); // Adjust the API endpoint as needed
      if (response.status === 200) {
        console.log('User created successfully');
        window.alert("Data Getting Sucessfully")
        // Reset the form
        setUser({
          firstName:'',
          lastName:'',
          email:'',
          mobileNo:'',
          address:'',
          password: '',
        });
      }
    } catch (error) {
      console.error('Error creating user', error);
      window.alert("Error")
    }
  };

  return (
    <div className='auth-form-container'>
      <h2>Register</h2>
      <form onSubmit={handleSubmit} className='register-form'>
      <div className="form-group">
          <label htmlFor="firstName" className='lbl'>First Name</label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            name="firstName"
            value={user.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName" className='lbl'>Last Name</label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            name="lastName"
            value={user.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className='lbl'>Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="mobileNo" className='lbl'>Mobile No</label>
          <input
            type="text"
            className="form-control"
            id="mobileNo"
            name="mobileNo"
            value={user.mobileNo}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="address" className='lbl'>Address</label>
          <input
            type="text"
            className="form-control"
            id="address"
            name="address"
            value={user.address}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className='lbl'>Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className='btn-btn'>submit</button>
      </form>
      <button className='link-button'>Already have an account? Login here.</button>
    </div>
  );
}

export default Register;
