import React, { useState } from 'react'
import * as validation from './validation'

export default function Register(props) {

  const [Fname, setFname] = useState('');
  const [FisValid, setFIsValid] = useState(true);

  const handleFnameChange = (event) => {
    const value = event.target.value;
    setFname(value);
    setFIsValid(validation.validateAlphabets(value));
  };

  const [Lname, setLname] = useState('');
  const [LisValid, setLIsValid] = useState(true);
  const handleLnameChange = (event) => {
    const value = event.target.value;
    setLname(value);
    setLIsValid(validation.validateAlphabets(value));
  };

  const [email, setEmail] = useState('');
  const [eisValid, seteIsValid] = useState(true);

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
    seteIsValid(validation.validateEmail(value));
  };

  const [contactNumber, setContactNumber] = useState('');
  const [misValid, setmIsValid] = useState(true);

  const handleContactNumberChange = (event) => {
    const value = event.target.value;
    setContactNumber(value);
    setmIsValid(validation.validateContactNumber(value));
  };
  
  const [ZIP, setzipNumber] = useState('');
  const [zisValid, setzIsValid] = useState(true);

  const handleZipNumberChange = (event) => {
    const value = event.target.value;
    setzipNumber(value);
    setzIsValid(validation.validateZipCode(value));
  };
  return (
    <div className="container card p-3 mt-2 register-container">
      <h2 className="text-center">Registration Form</h2><br></br>
      <form onSubmit={props.submit}>
        <div className="form-group">
            <label htmlFor="fname">First Name :</label>
            <input type="text" name="fname" required className="form-control" autoComplete="off" onChange={handleFnameChange}></input>
            {!FisValid && <p>Please enter a valid username with only alphabets.</p>}
        </div>

        <div className="form-group">
            <label htmlFor="lname">Last Name :</label>
            <input type="text" name="lname" required className="form-control" autoComplete="off" onChange={handleLnameChange}></input>
            {!LisValid && <p>Please enter a valid username with only alphabets.</p>}
        </div>
        
        <div className="form-group">
            <label htmlFor="email">Email :</label>
            <input type="email" name="email" required className="form-control" autoComplete="off" onChange={handleEmailChange}></input>
            {!eisValid && <p>Please enter a valid email address.</p>}
        </div>

        <div className="form-group">
            <label htmlFor="gproof">Government Proof :</label>
            <input type="text" name="gproof" required className="form-control" autoComplete="off"></input>
        </div>

        <div className="form-group">
            <label htmlFor="gender" required>Gender :</label>
            <input type="radio" name="gender" value="0"/>   Male<br></br> 
            <input type="radio" name="gender" value="1"/>   Female
        </div>

        <div className="form-group">
            <label>Contact No. :</label>
            <input type="text" name="contact" required className="form-control" autoComplete="off" onChange={handleContactNumberChange}></input>
            {!misValid && <p>Please enter a valid Contact Number.</p>}
        </div>

        <div className="form-group">
            <label>Address :</label>
            <input type="text" name="address" required className="form-control" autoComplete="off"></input>
        </div>

        <div className="form-group">
            <label>ZIP Code :</label>
            <input type="text" name="zipcode" required className="form-control"  autoComplete="off" onChange={handleZipNumberChange}></input>
            {!zisValid && <p>Please enter a valid ZIP Code.</p>}
        </div>

        <button type="submit">Register</button>

      </form>
    </div>
    )
}
