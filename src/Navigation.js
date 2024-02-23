// src/components/Navigation.js

import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="navigation-list">
        <li className="navigation-item">
          <Link to="/" className="navigation-link">
            Home
          </Link>
        </li>
        <li className="navigation-item">
          <Link to="/notes" className="navigation-link">
            Notes
          </Link>
        </li>
        <li className="navigation-item">
          <Link to="/gallery" className="navigation-link">
            Gallery
          </Link>
        </li>
        <li className="navigation-item">
          <Link to="/favorites" className="navigation-link">
            Favorites
          </Link>
        </li>
        <li className="navigation-item">
          <Link to="/contact" className="navigation-link">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;