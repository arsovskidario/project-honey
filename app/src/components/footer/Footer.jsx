import { Link } from 'react-router-dom';

import './Footer.css'

export default function Footer() {
    return (
        <footer className="footer-container">
            {/* Your footer content goes here */}
            <div className="footer-content">
                <Link to="/about">About Us</Link>
                <Link to="/contact">Contact Us</Link>
                {/* Add more links or content as needed */}
            </div>
        </footer>
    );
}