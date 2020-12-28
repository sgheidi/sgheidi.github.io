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
FastChess is my second attempt at building a chess client with an AI which you can play with.
I used this project not only to build a stronger, more competent AI but also to level up my C++ skills.
Here I wrote less redundent comments (i.e on functions/classes where it is clear from the
name), encapsulated the classes further into (i) namespaces and wrote the code so that it is more
clean and modular.

Most modern chess engines also...
Enough details, here is a demo of the AI!

img
The AI here again uses a tree searching algorithm (minimx + AB pruning) to search for the best
evaluated move.

          </p>
      </div>
    </>
  );
}
