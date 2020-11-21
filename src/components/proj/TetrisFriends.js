import React from 'react';
import {Link} from 'react-router-dom';
import DarkModeToggle from '../DarkModeToggle';
import useDarkMode from 'use-dark-mode';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import Typography from '@material-ui/core/Typography';
import gif from '../../media/tetris.gif'
import '../../css/projects.scss';

export default function TetrisFriends() {
  return (
    <>
      <div className="back">
        <Link to="../">
          <ArrowBackIosRoundedIcon color="secondary" />
        </Link>
      </div>
      <div className="project-body">
        <p className="project-header"> 🕹️&nbsp;Tetris Friends </p>
          <p className="date"> Feb. 10, 2020 &nbsp; • &nbsp; 4 min read
            <p className="github-tag"> <a href="https://www.github.com/sgheidi/tetrisfriends">
            View on GitHub </a> </p>
          </p>
          <p className="project-body-text">
Developing a tetris friends clone was one of my first projects in game development and gave me the
the gist of how games work such as the usual flow of logic, the event loop for drawing elements
onto the window, and how the coding is done behind all of this. The frameworks used were OpenGL and
GLFW. There are many debates on whether a beginner should start with a lower level API (such as
OpenGL) or a higher level library such as SFML or Pygame. My stance on this is that a beginner should
start with a higher-level one since it gives them a better understanding of how everything works,
and then they can transition to learning lower-level API's to further their understanding.


<br /><br />
<div className="image-background">
<img
src={gif}
alt="Tetris Friends"
/> </div>
<p className="caption"><i>  Tetris Friends demo. </i></p>

However, with the debate on frameworks aside, this was actually originally a school project
meant to be a mixture of tetris and falling fruits, which I later decided to transform into a game I
often used to play: tetris friends.
<p className="inner-header"> Game Features </p>

The features of the game, similar to the original, include:
<li>
'Holding pieces'. Press shift to 'hold' a piece to use later. Press again to activate held
piece.
</li>
<li>
Ability to see the next 4 pieces. This makes it much faster to play with, as you know what's coming up
next.
</li>
<li>
Hard-dropping by using 'space' key.
</li>
<li>
Seeing a shaded outline of where the piece would fall if hard-dropped.
</li>
<li>
Clearing lines. Standard line-clearing algorithm.
</li>
<li>
Resetting, pausing, quitting the game (keys R, P, Q). Easy and instant.
</li>
<li>
Difficulty increases as you clear more lines!
</li> <br/>
As a retrospective, this game was very difficult to develop at first for 2 big reasons:<br/><br/> 1)
It was my very first
game and I had no clue how games actually worked, what event loops were and how they're coded.
I had to wrap my head around using functions effectively and how the game should be structured.
<br/> 2) Using a low-level API for a first-time project. I highly recommend against this because of the steep
learning curve for beginners. I didn't know the basics and was getting overwhelmed by OpenGL's low-level
syntax. <br/> <br/>

For anyone wanting to get started with a project such as this, I would recommend using a library such
as SFML (C++) or Pygame (Python), in order to understand the basics, and create a simple game with
those instead before learning OpenGL.

          </p>
      </div>
    </>
  );
}
