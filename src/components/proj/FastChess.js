import React from 'react';
import {Link} from 'react-router-dom';
import DarkModeToggle from '../DarkModeToggle';
import useDarkMode from 'use-dark-mode';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import Typography from '@material-ui/core/Typography';
import gif from '../../media/out.gif'
import '../../css/projects.scss';

export default function Pychess() {
  return (
    <>
      <div className="back">
        <Link to="../">
          <ArrowBackIosRoundedIcon color="secondary" />
        </Link>
      </div>
      <div className="project-body">
        <p className="project-header"> ♛ FastChess </p>
          <p className="date"> Nov. xx, 2020 &nbsp; • &nbsp; 3 min read
            <p className="github-tag"> <a href="https://www.github.com/sgheidi/pychess">
            View on GitHub </a> </p>
          </p>
          <p className="project-body-text">
FastChess is my second, upgraded version of developing a chess GUI with AI, where I attempt to build
a stronger AI with better evaluations, so it can make better moves. I also used this project as a way
to improve my C++ skills and to write cleaner, more elegant code.

          </p>
      </div>
    </>
  );
}
