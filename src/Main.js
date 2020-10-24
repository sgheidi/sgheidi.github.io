import React from 'react';
import DarkModeToggle from './components/DarkModeToggle';
import Card from './components/Card';
import BottomNav from './components/BottomNav';
import Test from './components/Test';
import useDarkMode from 'use-dark-mode';
import {Link} from 'react-router-dom';
import './css/styles.scss';
import './css/breakpoints/mobile.scss';
import './css/breakpoints/tablet.scss';
import './css/breakpoints/smallscreen.scss';
import './css/breakpoints/bigscreen.scss';
import './css/scroller.scss';
import './css/theme.scss';

export default function Main()  {
  return (
    <>
      <BottomNav />
    </>
  );
}
