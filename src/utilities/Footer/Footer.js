import React, { useState } from 'react';

function Footer() {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (!validateEmail(e.target.value)) {
      setEmailError('Please enter a valid email address.');
    } else {
      setEmailError('');
    }
  };

  return (
    <div className="foot">
      <center>
        <p className="join">Join the Newsletter</p>
        <input
          className={`form-control ${emailError ? 'is-invalid' : ''}`}
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleEmailChange}
        />
        {emailError && <div className="invalid-feedback">{emailError}</div>}
        <br /><br />
        <img
          alt=""
          src="https://shamjewellers.com/wp-content/uploads/2018/06/Untitled-1.png"
          width="20%"
          height="20%"
          className="d-inline-block align-top"
        />
      </center>

      <div className="container sunday">
        <center>
          <p>Sunday Open</p>
        </center>
        <div className="icons">
          <center>
            <img
              alt=""
              src="https://shamjewellers.com/wp-content/uploads/2018/07/fb-icon-colour.png"
              className="social-icon"
            />
            <img
              alt=""
              src="https://shamjewellers.com/wp-content/uploads/2018/07/insta-icon-colour.png"
              className="social-icon"
            />
          </center>
        </div>
      </div>
    </div>
  );
}

export default Footer;
