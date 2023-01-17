import React from 'react';
import Card from './Card';

import photo_2048 from '../../assets/2048.jpg';
import photo_kanban from '../../assets/kanban.jpg';
import photo_weather from '../../assets/weatherapp.jpg';
import photo_todo from '../../assets/todo.jpg';

import './Portfolio.css';

const Portfolio = () => {
  const projects = [
    {
      title: '2048',
      text: '2048 is a puzzle game whose goal is to move and connect the blocks appearing on the board so as to create a block with the number 2048. I wrote the project using React and TypeScript. The goal of the project is to write a self-generating 4x4 board based on a matrix and to write logic making the game work.',
      image: photo_2048,
      link: 'https://github.com/Artemo01/2048/tree/main/src',
    },
    {
      title: 'Kanban',
      text: 'Kanban is a production control method. The project was written using React, TypeScript and the beautifull dnd library. The application allows you to manually add new tasks, move existing tasks between columns and delete completed tasks. Moving blocks is done by dragging and dropping them.',
      image: photo_kanban,
      link: 'https://github.com/Artemo01/Kanban/tree/main/src',
    },
    {
      title: 'Weather app',
      text: 'The weather app was written in React with TypeScript. The app uses the Fetch API which makes it very easy to send HTTP requests using JavaScript Promises. I use the Weather API to get the weather forecast.',
      image: photo_weather,
      link: 'https://github.com/Artemo01/weather-app/tree/main/src',
    },
    {
      title: 'Todo',
      text: 'Todo application is one of the first applications created in React with Typescript. It allows you to add tasks to the list and then remove the ones you choose. Tasks can be deleted individually or several at a time.',
      image: photo_todo,
      link: 'https://github.com/Artemo01/todo-list/tree/master/src',
    },
  ];

  return (
    <div className="portfolio-wrapper">
      <h2 className="portfolio-header">Portfolio</h2>
      {projects.map((element) => {
        return (
          <Card
            title={element.title}
            text={element.text}
            photo={element.image}
            link={element.link}
          />
        );
      })}
    </div>
  );
};

export default Portfolio;
