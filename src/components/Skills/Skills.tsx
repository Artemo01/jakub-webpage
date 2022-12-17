import React from 'react';
import { Card } from './Card';
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaPython,
  FaGitAlt,
} from 'react-icons/fa';
import { SiTypescript, SiCplusplus, SiMysql } from 'react-icons/si';

import './Skills.css';

const Skills = () => {
  const skills = [
    { language: 'HTML', icon: <FaHtml5 /> },
    { language: 'CSS', icon: <FaCss3 /> },
    { language: 'JavaScript', icon: <FaJs /> },
    { language: 'TypeScript', icon: <SiTypescript /> },
    { language: 'React', icon: <FaReact /> },
    { language: 'Python', icon: <FaPython /> },
    { language: 'C++', icon: <SiCplusplus /> },
    { language: 'SQL', icon: <SiMysql /> },
    { language: 'Git', icon: <FaGitAlt /> },
  ];
  return (
    <div className="skills-wrapper">
      <h2 className="skills-header">My Skills</h2>
      <div className="skills-container">
        {skills.map((element) => {
          return <Card language={element.language} icon={element.icon} />;
        })}
      </div>
    </div>
  );
};

export default Skills;
