import React from 'react';
import About from '../components/About/About';
import Contact from '../components/Contact/Contact';
import Header from '../components/Header/Header';
import Navbar from '../components/Navbar/Navbar';
import Portfolio from '../components/Portfolio/Portfolio';
import Skills from '../components/Skills/Skills';
import SocialMedia from '../components/SocialMedia/SocialMedia';

interface IHomePage {
  onResume(): void;
}

const HomePage = ({ onResume }: IHomePage) => {
  return (
    <>
      <Navbar onResume={onResume} />
      <SocialMedia />
      <Header />
      <div id="About">
        <About />
      </div>
      <div id="Skills">
        <Skills />
      </div>
      <div id="Portfolio">
        <Portfolio />
      </div>
      <div id="Contact">
        <Contact />
      </div>
    </>
  );
};

export default HomePage;
