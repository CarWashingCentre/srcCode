import React, { useState } from 'react'
import * as validation from './validation'

export default function Customer(props) {
  
  const [fname, setfname] = useState('');
  const [fisValid, setfIsValid] = useState(true);

  const handleFnameChange = (event) => {
    const value = event.target.value;
    setfname(value);
    setfIsValid(validation.validateAlphabets(value));
  };

  const [lname, setlname] = useState('');
  const [lisValid, setlIsValid] = useState(true);
  const handleLnameChange = (event) => {
    const value = event.target.value;
    setlname(value);
    setlIsValid(validation.validateAlphabets(value));
  };

  const [email, setEmail] = useState('');
  const [EisValid, setEIsValid] = useState(true);

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
    setEIsValid(validation.validateEmail(value));
  };

  const [contactNumber, setContactNumber] = useState('');
  const [CisValid, setCIsValid] = useState(true);

  const handleContactNumberChange = (event) => {
    const value = event.target.value;
    setContactNumber(value);
    setCIsValid(validation.validateContactNumber(value));
  };
  
    return (
    <div className="container card p-3 mt-2 register-container">
      <h2 className="text-center">Customer Registration Form</h2><br></br>
      <form onSubmit={props.submit}>
        <div className="form-group">
            <label htmlFor="fname">First Name :</label>
            <input type="text" name="cfname" required className="form-control" onChange={handleFnameChange}></input>
            {!fisValid && <p>Please enter a valid Name with only alphabets.</p>}
        </div>
        <div className="form-group">
            <label htmlFor="lname">Last Name :</label>
            <input type="text" name="clname" required className="form-control" onChange={handleLnameChange}></input>
            {!lisValid && <p>Please enter a valid Name with only alphabets.</p>}
        </div>
        <div className="form-group">
            <label htmlFor="email">Email :</label>
            <input type="email" name="cemail" required className="form-control" onChange={handleEmailChange}></input>
            {!EisValid && <p>Please enter a valid Email Address.</p>}
        </div>
        <div className="form-group">
            <label>Contact No. :</label>
            <input type="text" name="ccontact" required className="form-control" onChange={handleContactNumberChange}></input>
            {!CisValid && <p>Please enter a valid Contact Number</p>}
        </div>
        <div className="form-group">
            <label>Date of Birth :</label>
            <input type="date" name="cdob" required className="form-control"></input>
        </div>
        <div className="form-group">
            <label htmlFor="gender" required>Gender :</label>
            <input type="radio" name="gender"/>   Male<br></br> 
            <input type="radio" name="gender"/>   Female
        </div>

        <button type="submit">Register</button>

      </form>
    </div>
    )
}