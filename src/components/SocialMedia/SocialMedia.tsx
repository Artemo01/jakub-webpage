import React from 'react';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

import './SocialMedia.css';

const SocialMedia = () => {
  return (
    <div className="social-wrapper">
      <ul className="social-ul">
        <a
          className="social-item"
          href="https://www.instagram.com/kuba_budzinski_/"
        >
          <FaInstagram />
        </a>
        <a
          className="social-item"
          href="https://www.linkedin.com/in/jakub-budziński-061257239/"
        >
          <FaLinkedin />
        </a>
        <a className="social-item" href="https://github.com/Artemo01">
          <FaGithub />
        </a>
        <div className="social-stand" />
      </ul>
    </div>
  );
};

export default SocialMedia;
