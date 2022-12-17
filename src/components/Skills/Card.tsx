import React from 'react';
import './Card.css';

interface ICard {
  language: string;
  icon: any;
}

export const Card = (props: ICard) => {
  return (
    <div className="card-wrapper">
      <div className="card-text">{props.language}</div>
      <div className="card-icon">{props.icon}</div>
    </div>
  );
};
