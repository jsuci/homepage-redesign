import navLogo from '../assets/white-logo.png'
import React, { useState } from 'react';


export default function Header() {
    const [showNav, setShowNav] = useState(false);

    const toggleNav = () => {
        setShowNav(!showNav);
    };

    return (
        <>
            <div className="header--main">
                <div className="hamburger" onClick={toggleNav}>
                    &#9776;
                </div>
                <nav>
                    <img src={navLogo} className='header--logo'/>
                    <ul className="header--navlinks">
                        <li>About</li>
                        <li>Communities</li>
                        <li>Home Valuation</li>
                        <li>Services</li>
                        <li>Listings</li>
                        <li>Testimonials</li>
                    </ul>
                </nav>
            </div>
            
        </>
    )
}