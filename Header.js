/// <reference path="../admindashboard/admindashboard.js" />
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Import your CSS styles
import Logo from './Logo.jpg';
function Header() {
    return (
        <header className="header">
            <div className="logo">
                <Link to="/">
                    <img src={Logo} alt="Vehicle Washing Centre Management" />
                </Link>
                <strong id="x222"> Anant Vehicle Washing Centre</strong>
            </div>
            <nav className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/services">Services</Link>
                <Link to="/about">About Us</Link>
                <Link to="/contact">Contact</Link>
                {/* Add more links as needed */}
            </nav>
            {/*<div className="contact-info">*/}
            {/*    <span>Call Us: </span>*/}
            {/*    <button className="btn">Book Now</button>*/}
            {/*</div>*/}
        </header>
    );
}

export default Header;
