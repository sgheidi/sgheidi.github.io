import React from 'react';
import DarkModeToggle from './components/DarkModeToggle';
import Card from './components/Card';
import BottomNav from './components/BottomNav';
import './styles.scss';
import './media.scss';

export default function App() {
  return (
    <>
      <div className="navbar">
        <div className="name">
          <b>shervan gheidi ☕ </b>
        </div>
        <DarkModeToggle />
      </div>
      <BottomNav />
    </>
  );
}
