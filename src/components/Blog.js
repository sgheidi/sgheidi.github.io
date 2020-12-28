import React from 'react';
import DarkModeToggle from './DarkModeToggle';
import useDarkMode from 'use-dark-mode';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import Card1 from './Card1';
import Card2 from './Card2';
import Card3 from './Card3';
import {Link} from 'react-router-dom';

export default function Blog() {
  return (
    <>
    <div className="back-blog">
      <Link to="../">
        <ArrowBackIosRoundedIcon color="secondary" />
      </Link>
    </div>
    <div className="cards">
      <Card3 />
      <div className="card-divider"/>
      <Card2 />
      <div className="card-divider-bigscreen"/>
      <Card1 />
    </div>
    </>
  );
}
