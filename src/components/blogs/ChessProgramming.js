import React from 'react';
import {Link} from 'react-router-dom';
import DarkModeToggle from '../DarkModeToggle';
import useDarkMode from 'use-dark-mode';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import Typography from '@material-ui/core/Typography';
import img from '../../media/ChessProgramming.jpg';
import pin from '../../media/pin.png';
import '../../css/projects.scss';

export default function ChessProgramming() {
  return (
    <>
      <div className="back">
        <Link to="../">
          <ArrowBackIosRoundedIcon color="secondary" />
        </Link>
      </div>
      <div className="project-body">
        <p className="project-header"> ♟️ Chess Programming: A Reflection </p>
          <p className="date"> Nov. 6, 2020 &nbsp; • &nbsp; 4 min read
          </p>
          <p className="project-body-text">
Chess programming has single-handedly resulted in my skills in algorithm design, program flow and
implementation to be signficantly stronger. It has not only forced me to think analytically about
something that seems relatively straight-forward, it made me use important concepts
such as stacks, queues, trees, recursion, maps, threads, OOP, inheritance, scoping and
namespaces (i.e in C++) and other good coding practices. The most fun part of chess programming is
building your own chess AI that does exactly what you code it to do (this is done using
<a href="https://en.wikipedia.org/wiki/Evaluation_function"> evaluation functions</a>).
The process of building a large system from scratch can at first seem daunting,
but once you really get into it, it can become quite fun, especially strengthening
the AI. <br /><br/>

<div className="image-background">
<img
src={img}
alt="Computer chess"
/> </div>
<p className="caption"><i>  The chess board. </i></p>

An example of a crucial design choice I had to make for implementing the full game rules of chess was
coding a
<a href="https://en.wikipedia.org/wiki/Pin_(chess)"> pin</a>.
From Wikipedia, a pin in chess '<i>is a situation brought on by an attacking piece in which a
defending piece cannot move without exposing a more valuable defending piece on its other side to
capture by the attacking piece.</i>' The following image describes the situation quite well: <br/><br/>

<div className="image-background">
<img
src={pin}
alt="Chess pin"
/> </div>
<p className="caption"><i>  The black queen is about to be pinned by the white bishop. </i></p>

Pins are a fundamental game rule in chess. My approach, in pseudocode, is the following: <br/><br/>

<div class="pseudocode">
  {"/* this function should be called anytime Piece moves */\n"}
  {"void Piece::check_pin() { /* note that Piece can be any of B, R, Q */\n"}
  {"  for (i=0;i<piece_count;i++) {\n"}
  {"    if (alive[i]) {\n"}
  {"      if (king_in_path(i) and num_pieces_between(i) == 1)\n"}
  {"        pin(i, get_pinned_piece(i))\n"}
  {"    }\n"}
  {"  }\n"}
  {"}\n"}
</div>

<br/>
The algorithm is very simple, and literally translates to plain English as, for say, a bishop:
if it is alive and the king is in its path and the number of (opposite-colored) pieces between
the king and itself is 1, pin that piece. The sub-functions are also pretty self-explanatory, and all
the <div className="code">pin</div> function really does is just filter the pinned piece's movelist with
the pinner's (the bishop in this case) movelist spanning from the pinner's position to the opposing
king's position.<br/><br/>

I am sure there are better and more efficient ways for this implementation (as with everything),
but my approach works well in all situations I've tested. The actual implementation of the above
can be found
<a href="https://github.com/sgheidi/FastChess/blob/master/src/core/black/bishop.cc#L33"> here</a>.

<p className="inner-header"> Notable challenges </p>
By far the most challenging problem in chess programming has been debugging the AI. The AI, even at
a mere depth of 2, can search thousands of positions for a single move, and if something goes wrong
in the search, be it a bug with enpassant or some weird corner case I've forgetten about, I would have
to search the logs (i.e the positions it has searched for) and see where the bug occured. This can
be a very tedious process. <br/> <br/>

To make this a bit easier for myself, I made different flags for testing purposes
(i.e <div className="code">#define DEBUGAI</div> in C++) and saved all the moves that the AI searched for
in a file named <div className="code">debug.log</div>. Here, I could see every move that the AI
considered, and I would see the last set of moves that it made before a segmentation fault happened.
<br/><br/>

Another challenge was checking whether the AI would make the correct decisions in certain circumstances.
To avoid playing it from the beginning every time, I built several different testing environments
with specific board orientations to see how the AI would play. This is still a work in progress.


</p>
      </div>
    </>
  );
}
