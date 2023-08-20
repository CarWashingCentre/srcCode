import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; // Import your CSS styles
import Logo from './Logo.jpg';
function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo">
                    <Link to="/">
                        <img src={Logo} id="x1" alt="Doorstep Wash Logo" />
                    </Link>
                    <br></br>


                </div>
                <div> Provides car cleaning services: interior and exterior dusting,<br></br>
                    washing shampooing, detailing and sanitizing<br></br>
                    services of vehicle.
</div>
                <div className="footer-links">
                    <Link to="/">Home</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/about">About Us</Link>
                    <Link to="/contact">Contact</Link>
                    {/* Add more links as needed */}
                </div>
                <div className="footer-contact">
                    <span>Call Us: +91 666666666</span>
                    <span>Email: info@example.com</span>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2023 Vehicle Washing Centre. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
