import React from 'react';
import {Link} from 'react-router-dom';
import DarkModeToggle from '../DarkModeToggle';
import useDarkMode from 'use-dark-mode';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import Typography from '@material-ui/core/Typography';
import gif from '../../media/out.gif'
import '../../css/projects.scss';

export default function AI_MAB() {
  return (
    <>
      <div className="back">
        <Link to="../">
          <ArrowBackIosRoundedIcon color="secondary" />
        </Link>
      </div>
      <div className="project-body">
        <p className="project-header"> AI Algorithms: Minimax & Alpha-Beta Pruning </p>
          <p className="date"> Nov. 15, 2020 &nbsp; • &nbsp; 3 min read
          </p>
          <p className="project-body-text">
text here
text here
text here
text here
text here
text here

          </p>
      </div>
    </>
  );
}
