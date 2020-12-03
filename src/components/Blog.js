import React from 'react';
import DarkModeToggle from './DarkModeToggle';
import useDarkMode from 'use-dark-mode';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import Card1 from './Card1';
import Card2 from './Card2';
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
      <Card2 />
      <div className="card-divider"/>
      <Card1 />
    </div>
    </>
  );
}
