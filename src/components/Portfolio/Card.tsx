import React from 'react';
import { FaGithub } from 'react-icons/fa';

import './Card.css';

interface ICard {
  title: string;
  text: string;
  photo: string;
  link: string;
}

const Card = (props: ICard) => {
  return (
    <div className="portfolio-card-wrapper">
      <div className="portfolio-card-photo">
        <img className="portfolio-card-photo-content" src={props.photo} />
      </div>
      <div className="portfolio-card-content">
        <h3 className="portfolio-card-title">{props.title}</h3>
        <p className="portfolio-card-text">{props.text}</p>
        <p className="portfolio-card-link">
          <FaGithub />
          <a className="portfolio-link" href={props.link}>
            Check project on GitHub
          </a>
        </p>
      </div>
    </div>
  );
};

export default Card;
