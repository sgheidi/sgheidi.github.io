import React from 'react';
import {Link} from 'react-router-dom';
import DarkModeToggle from '../DarkModeToggle';
import useDarkMode from 'use-dark-mode';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import Typography from '@material-ui/core/Typography';
import gif from '../../media/out.gif'
import '../../css/projects.scss';

export default function UnityFPS() {
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
            Game development using Unity3D has been a very interesting experience for me, as I have
            never used a game engine in the past and have mainly


            . Coming from a background with
            lower-level languages and frameworks such as C++, OpenGL and Pygame, game development
            with Unity has been enlightening because from a programming perspective,
            it makes a lot of things simpler to work
            with. The whole game does not have to be programmable as like in low-level game
            programming such as Python or OpenGL. You simply create objects in the world and
            attach scripts, tags and properties to them, which makes the whole process significantly
            easier, from debugging, to orgnization, to presentation.

          </p>
      </div>
    </>
  );
}
