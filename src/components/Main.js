import React from 'react';
import DarkModeToggle from './DarkModeToggle';
import Card1 from './Card1';
import BottomNav from './BottomNav';
import Test from './Test';
import useDarkMode from 'use-dark-mode';
import {Link} from 'react-router-dom';
import '../css/styles.scss';
import '../css/breakpoints/mobile.scss';
import '../css/breakpoints/tablet.scss';
import '../css/breakpoints/smallscreen.scss';
import '../css/breakpoints/bigscreen.scss';
import '../css/scroller.scss';
import '../css/theme.scss';

export default function Main()  {
  return (
    <>
      <BottomNav />
      <Card1 />
    </>
  );
}
