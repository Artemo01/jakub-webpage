import React from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

interface INavBar {
  onResume(): void;
}

const Navbar = ({ onResume }: INavBar) => {
  return (
    <div className="navbar-wrapper">
      <Link
        activeClass="active"
        to="About"
        spy={true}
        smooth={true}
        offset={-350}
        duration={500}
      >
        <button className="navbar-button">About</button>
      </Link>
      <Link
        activeClass="active"
        to="Skills"
        spy={true}
        smooth={true}
        offset={-200}
        duration={500}
      >
        <button className="navbar-button">My Skills</button>
      </Link>
      <Link
        activeClass="active"
        to="Portfolio"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
      >
        <button className="navbar-button">Portfolio</button>
      </Link>
      <Link
        activeClass="active"
        to="Contact"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
      >
        <button className="navbar-button">Contact</button>
      </Link>
      <button className="navbar-button-resume" onClick={onResume}>
        Resume
      </button>
    </div>
  );
};

export default Navbar;
