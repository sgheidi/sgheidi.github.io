import React from 'react';
import DarkModeToggle from './components/DarkModeToggle';
import Content from './components/Content';
import './styles.scss';

function App() {
  return (
    <>
      <div className="navbar">
        <div className="name">shervan gheidi</div>
          <div className="dark-mode-button"><DarkModeToggle /></div>
      </div>
      <Content />
    </>
  );
}

export default App;
