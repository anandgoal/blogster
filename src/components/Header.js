import React from 'react';
import "./Header.css";

const Header = () => {
  return (
    <header className="bg-dark text-white py-3">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <a className="navbar-brand" href="/">My Blog</a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
