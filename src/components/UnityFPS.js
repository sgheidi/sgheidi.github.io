import React from 'react';
import {Link} from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';
import useDarkMode from 'use-dark-mode';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import Typography from '@material-ui/core/Typography';
import gif from '../media/out.gif'
import '../css/projects.scss';

export default function Pychess() {
  return (
    <>
      <div className="back">
        <Link to="../">
          <ArrowBackIosRoundedIcon color="secondary" />
        </Link>
      </div>
      <div className="project-body">
        <p className="project-header"> Single Player FPS Game in Unity3D</p>
          <p className="date"> Oct. 18, 2020
            <p className="github-tag"> <a href="https://www.github.com/sgheidi/pychess" >
            View on GitHub </a> </p>
          </p>
          <p className="project-body-text">

      </div>
    </>
  );
}
