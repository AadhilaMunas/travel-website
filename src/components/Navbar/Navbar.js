import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompass } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button/Button';


function Navbar() {
  const [button, setButton] = useState(true);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', showButton);
    return () => {
      window.removeEventListener('resize', showButton);
    };
  }, []);

  return (
    <div className='navbar'>
      <div className='navbar-container'>
        <Link className='navbar-logo' to="/components/Pages/Home.js">bOn|VYG<FontAwesomeIcon icon={faCompass} spin /></Link>
        <ul className='nav-menu'>
          <li className='nav-item'>
            <Link to="/home" className='nav-links'>Home</Link>
          </li>
          <li className='nav-item'>
            <Link to="/services" className='nav-links'>Services</Link>
          </li>
          <li className='nav-item'>
            <Link to="/products" className='nav-links'>Products</Link>
          </li>
          <li className='nav-item'>
            <Link to="/signup" className='nav-links-mobile'>Sign Up</Link>
          </li>
        </ul>
        {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
      </div>
    </div>
  );
}

export default Navbar;
