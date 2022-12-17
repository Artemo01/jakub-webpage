import React from 'react';
import { Link } from 'react-scroll';

import './Header.css';

const Header = () => {
  return (
    <div className="header-wrapper">
      <h2 className="header-text">HI I am</h2>
      <h1 className="header-name">Budziński Jakub</h1>
      <h2 className="header-text">Software Developer</h2>
      <Link
        activeClass="active"
        to="Contact"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
      >
        <button className="header-button">Contact Me!</button>
      </Link>
    </div>
  );
};

export default Header;
