import React from 'react';
import image from '../../assets/jakub-budzinski.png';

import './Resume.css';

interface IResume {
  onHome(): void;
}

const Resume = ({ onHome }: IResume) => {
  return (
    <>
      <div className="resume-navigation"></div>
      <button className="resume-back" onClick={onHome}>
        Back
      </button>
      <div className="resume-wrapper">
        <div className="resume-left">
          <img className="resume-image" src={image} alt="image" />
          <div className="resume-container-left">
            <h3 className="resume-header-left">CONTACT</h3>
            <button className="resume-button" onClick={onHome}>
              Contact
            </button>
          </div>
          <div className="resume-container-left">
            <h3 className="resume-header-left">LANGUAGES</h3>
            <p>Python</p>
            <p>JavaScript</p>
            <p>TypeScript</p>
            <p>HTML / CSS</p>
            <p>React</p>
            <p>MySQL</p>
            <p>GIT</p>
          </div>
          <div className="resume-container-left">
            <h3 className="resume-header-left">FOREIGN LANGUAGES</h3>
            <p>Polish - native</p>
            <p>English - communicative</p>
          </div>
        </div>
        <div className="resume-main">
          <h1 className="resume-name">JAKUB BUDZIŃSKI</h1>
          <h2 className="resume-worksite">SOFTWARE DEVELOPER</h2>
          <div className="resume-container-main">
            <h3 className="resume-header-main">ABOUT ME</h3>
            <p>
              I am programmer with above 1.5 years work experience. Currently I
              work with using Python and React languages. I have also experience
              as exhibitor and robot supervisor at events. I finished six-year
              art high school with a diploma in compuer graphic.
            </p>
          </div>
          <div className="resume-container-main">
            <h3 className="resume-header-main">EXPERIENCE</h3>
            <p>
              <b>Junior IT Officer</b>
            </p>
            <p>Weegree, Opole | September 2021 - current</p>
            <ul className="resume-education-list">
              <li>Work with the React famework</li>
              <li>Reception software development</li>
              <li>Mobile app development</li>
              <li>Software development for robots: Pepper, Nao</li>
              <li>Writing technical documentation and manuals</li>
            </ul>
          </div>
          <div className="resume-container-main">
            <h3 className="resume-header-main">EDUCATION</h3>
            <p>
              <b>Opole University of Technology</b>
            </p>
            <ul className="resume-education-list">
              <li>September 2020 - current</li>
              <li>
                Major: Faculty of Electrical Engineering Automatic Control and
                Informatics
              </li>
              <li>Engineer</li>
            </ul>
            <p>
              <b>Art school in Opole</b>
            </p>
            <ul className="resume-education-list">
              <li>September 2014 - April 2020</li>
              <li>Specialization: Computer Graphics</li>
            </ul>
          </div>
          <div className="resume-container-main">
            <h3 className="resume-header-main">SKILS</h3>
            <ul>
              <li>JIRA</li>
              <li>Knowledge of Bitbucket</li>
              <li>Knowledge of MS Office</li>
              <li>Teamwork</li>
              <li>Open to new solutions</li>
              <li>Desire to develop and learn</li>
              <li>Searching for solutions to problems</li>
            </ul>
          </div>
          <div className="resume-container-main">
            <h3 className="resume-header-main">HOBBYS</h3>
            <p>
              Computer games, Computer graphic 2D and 3D, Film editing, Gym,
              Mountain hiking, Travels.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
