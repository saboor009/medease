import React, {  useState } from 'react';
import './Navbar.css';
//import searchIcon from './icons/search.svg'; // Path to search icon
import userIcon from './icons/usericon.png'; // Path to user icon
import cross from './icons/cross.png'; 
import { Link } from 'react-router-dom';
import logo from './icons/logo.svg';

const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMenu = () => {
        setMobileMenuOpen(false);
    };

    return (
        <nav className="navbar">
            <div className="top-row">
                <div className="logo">
                    <img
                    src={logo}
                    alt="Company Logo"
                    />
             </div>

          
             <div className="header">
      <Link to="/login" style={{ textDecoration: "none" }}>
        <div className="login">
          <img src={userIcon} alt="User Icon" className="usericon" />
          <div className="login-text">
            <span className="login-prompt">login or register</span>
            <span className="account-type">Patient Account</span>
          </div>
        </div>
      </Link>
    </div> 

               


            </div>

            <hr className="divider desktop-divider" />

            <div className="bottom-row">
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/appointments">Appointments</Link></li>
                    <li><Link to="/FindDoctor">Find a Doctor</Link></li>
                    <li><Link to="/talktoai">Talk to AI </Link></li>
                    <li><Link to="/contactus">Contact Us</Link></li>
                    <li><Link to="/aboutus">About Us</Link></li>
                </ul>
            </div>

            {/* Mobile Navigation */}
            <div style={{width:'100%',display:'flex',justifyContent:'space-evenly'}}>
            <div className="mobile-nav">
                <div className="logo"><img
                    src={logo}
                    alt="Company Logo"
                    /></div>
                <div className="hamburger" onClick={toggleMenu} style={{ fontSize: '24px', fontWeight: 'bold' }}>
                    &#9776;
                </div>
            </div>
                 {/* Mobile Search Bar */}
               
              
                

            {/* Mobile Menu */}
            <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
                {/* Logo and Close Button in Mobile Menu */}
                <div className="mobile-menu-header">
                    <div className="menu-logo">MEDEASE</div>
                    <div className="close-btn-div" >
                    
                        <img src={cross}  alt='cross' onClick={closeMenu} />
                      

                    </div>
                    
                </div>

           
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/appointments">Appointments</Link></li>
                    <li><Link to='/FindDoctor'>Find a Doctor</Link></li>
                    <li><Link to="/talktoai">Talk to AI </Link></li>
                    <li><Link to="/contactus">Contact Us</Link></li>
                    <li><Link to="/aboutus">About Us</Link></li>
                </ul>
            </div>
            </div>
        </nav>
    );
};

export default Navbar;


