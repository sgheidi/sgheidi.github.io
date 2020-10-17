import React from 'react';
import DarkModeToggle from './components/DarkModeToggle';
import Card from './components/Card';
import BottomNav from './components/BottomNav';
import useDarkMode from 'use-dark-mode';
import './css/styles.scss';
import './css/mobile.scss';
import './css/tablet.scss';
import './css/smallscreen.scss';
import './css/bigscreen.scss';

const darkstyle = {
  color: "white",
  textDecoration: "none"
};
const lightstyle = {
  color: "black",
  textDecoration: "none"
};

export default function App() {
  const darkMode = useDarkMode(false);
  return (
    <>
      <div className="navbar">
        <div className="name">
          <a href="/" style={darkMode.value ? darkstyle : lightstyle}><b>shervan gheidi ☕ </b></a>
        </div>
        <DarkModeToggle />
      </div>
      <BottomNav />
    </>
  );
}
