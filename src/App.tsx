import React, { useState } from 'react';
import HomePage from './Screens/HomePage';
import Resume from './Screens/Resume/Resume';

import './App.css';

function App() {
  const [pageState, setPageState] = useState<'home' | 'resume'>('home');

  const openResumePage = () => {
    setPageState('resume');
  };

  const openHomePage = () => {
    setPageState('home');
  };

  return (
    <div className="App">
      {pageState === 'home' && <HomePage onResume={openResumePage} />}
      {pageState === 'resume' && <Resume onHome={openHomePage} />}
    </div>
  );
}

export default App;
