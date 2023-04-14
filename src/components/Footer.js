import React from "react";

import LogoVertical from "./images/logo-vertical.png";

const Footer = () => {
    return (
        <footer>
            <img 
                src={LogoVertical}
                alt="Little Lemon Restaurant logo"
            />
            <div className="linklist">
                <p>Navigation</p>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Menu</a></li>
                    <li><a href="#">Reservations</a></li>
                    <li><a href="#">Order online</a></li>
                    <li><a href="#">Login</a></li>
                </ul>
            </div>
            <div className="linklist">
                <p>Contact</p>
                <ul>
                    <li><a href="#">Address</a></li>
                    <li><a href="#">Phone Number</a></li>
                    <li><a href="#">Email</a></li>
                </ul>
            </div>
            <div className="linklist">
                <p>Social Media Links</p>
                <ul>
                    <li><a href="#">Facebook</a></li>
                    <li><a href="#">Instagram</a></li>
                    <li><a href="#">YouTube</a></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
