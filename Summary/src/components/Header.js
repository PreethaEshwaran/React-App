import React, { useEffect, useState } from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Header() {

    const navStyle ={
        color: 'black',
        textDecoration: 'none'
    }
    const navBackground ={
        background: 'lightblue'
    }

  return (
    <nav style={navBackground}>
        <Link style={navStyle} to="/">
            <h3>Logo</h3>
        </Link>
        <ul className="nav-links">
            <Link style={navStyle} to="/about">
                <li>About</li>
            </Link>
            <Link style={navStyle} to="/shop">
                <li>Shop</li>
            </Link>
            <Link style={navStyle} to="/form">
                <li>Get Form</li>
            </Link>
        </ul>
    </nav>
  );
}

export default Header;
