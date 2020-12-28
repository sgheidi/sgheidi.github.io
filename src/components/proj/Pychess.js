import React from 'react';
import {Link} from 'react-router-dom';
import DarkModeToggle from '../DarkModeToggle';
import useDarkMode from 'use-dark-mode';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import Typography from '@material-ui/core/Typography';
import gif from '../../media/out.gif';
import gif2 from '../../media/game2.gif';
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
        <p className="project-header"> ♚ PyChess </p>
          <p className="date"> March 18, 2020 &nbsp; • &nbsp; 3 min read
            <p className="github-tag"> <a href="https://www.github.com/sgheidi/pychess">
            View on GitHub </a> </p>
          </p>
          <p className="project-body-text">
          PyChess has probably been the most fulfilling project I've completed up to date. It
combined almost every programming paradigm, coding concept, software engineering 'best practice'
and even some math skills I had learned until now, into one project. After finishing the project,
I not only felt my programming skills had increased dramatically, I also became more and more
interested about a topic I knew virtually nothing about: chess as a game itself. I realized that
the game is quite complicated, and that in terms of skill level, the AI I had programmed was
nothing compared to contemporary, state-of-the-art engines such as
<a href="https://stockfishchess.org/"> Stockfish</a> and <a href="https://komodochess.com/">
Komodo</a>.
However, I am still in the process of strengthening the AI's <a href=
"https://en.wikipedia.org/wiki/Evaluation_function">
evaluation function</a> so that it makes better decisions on the moves it makes. <br /><br />

<div className="image-background">
<img
src={gif}
alt="Chess AI playing against itself"
/> </div>
<p className="caption"><i>  Watch my AI play against itself! </i></p>

The coolest thing about the AI is that it can constantly be updated with new code, anytime I want
it to, or with any new idea I come up with. I wrote every line in this codebase and can apply any new
concept or idea and see the difference immediately. <br /><br />

Some lessons I learned along the way are: good code organization practices, Python PEP-8 style
docstrings (for classes and functions), and applying
<a href="https://en.wikipedia.org/wiki/Object-oriented_programming#"> OOP </a> in
a real project. Before this, I, among
many developers, only heard about OOP in school, theory, and in 'interview' type questions.
I have rarely used OOP in my code for work or school. However, for a project with a large codebase
like this, applying OOP concepts <b> signficantly </b> increased code organization which in turn
lead to a much more understandable and less bug-prone codebase. <br /> <br />

Perhaps the greatest lesson I learned from this project is the process of building and designing a
relatively large system from the ground up. When building something like this, one is faced with
many design decisions such as the program's flow of logic, which functions to encapsulate into
classes and keeping the code as least bug-prone as possible. I designed the codebase so that it
is as organized and encapsulated as it can be, and made the program flow of logic as simple as
possible, for the long term. <br /><br />

<div className="image-background">
<img
src={gif2}
alt="Chess AI playing against itself"
/> </div>
<p className="caption"><i>  Round 2: Black checkmates White. </i></p>
          </p>
      </div>
    </>
  );
}
