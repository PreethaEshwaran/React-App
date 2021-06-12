import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Footer() {
    const navStyle ={
        color: 'white',
        textDecoration: 'none'
    }
    const navBackground ={
        background: 'grey'
    }
    const copyrights ={
        paddingBottom: '30px',
        color: 'white'
    }
  return (
    <div style={navBackground}>
    <nav>
        <Link style={navStyle} to="/">
            <h3>Logo</h3>
        </Link>
        <ul className="nav-links">
            <Link style={navStyle} to="/about">
                <li>About</li>
            </Link>
        </ul>
    </nav>
    <h5 style={copyrights}>All rights reserved.ACIA 2021</h5>
    </div>
  );
}

export default Footer;