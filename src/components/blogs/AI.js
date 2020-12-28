import React from 'react';
import {Link} from 'react-router-dom';
import DarkModeToggle from '../DarkModeToggle';
import useDarkMode from 'use-dark-mode';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import Typography from '@material-ui/core/Typography';
import img from '../../media/minimax.png';
import nn from '../../media/nn.png';
import dfs from '../../media/dfs.png'
import '../../css/projects.scss';

export default function AI() {
  return (
    <>
      <div className="back">
        <Link to="../">
          <ArrowBackIosRoundedIcon color="secondary" />
        </Link>
      </div>
      <div className="project-body">
        <p className="project-header"> 🤖&nbsp;AI Algorithms: Minimax and α-β Pruning </p>
          <p className="date"> Nov. 27, 2020 &nbsp; • &nbsp; 7 min read
          </p>
          <p className="project-body-text">
Minimax, combined with the concept of α-β pruning, is at the heart of how an AI generates a
move in perfect, 2 player games such as connect-4, tic-tac-toe and chess. The core idea is very
intuitive, and these algorithms, when used
together are known as 'semi-brute force' methods of traversing the game tree up to a
depth <div className="code"> d</div> and generating a move. The idea is simple and is how top chess
players think about the game: Pick a move at random and see 'what happens' if that move is played.
That is, in human terms, see if a good position comes out of it. In computer terms, this is known
as an <a href="https://en.wikipedia.org/wiki/Evaluation_function"> evaluation function</a>,
which all modern chess engines employ. The computer evaluates how good
the position is via its evaluation function, undoes
that move, and moves on to the next moves until it has traversed all nodes of the game tree up to a
depth <div className="code"> d</div>.
<br/><br/>

<div className="image-background">
<img
src={img}
alt="Minimax"
/> </div>
<p className="caption"><i> Image illustrating the game 'tree' data structure which
the minimax algorithm refers to. The nodes with numbers represent the static evaluation at each
position.
</i></p>

Finally, it chooses the move with the best evaluation as the move to make. Another
slight variation for doing the above is creating a copy of the board at each position and evaluating
the copy, to avoid the undo. This is the pure minimax approach of traversing all nodes, and it would
imply take too long to search all positions, even at a low depth. An optimization of this, which α-β
pruning uses, is to notice that not all nodes of the game tree need to be searched. That is, if you
know a given move leads to a position worse than the current, you do not need to search any further
positions. These entire subtrees can be discarded, which is known as <i>pruning</i>.
Pseudocode for minimax with α-β pruning is shown below: <br/><br/>

<div class="pseudocode">
  {"  initialize best_move dict to {'score': -9999, 'piece': '', 'pos': ''}, depth n to 5  \n"}
  {"  for i in black_moves:\n"}
  {"    for k in ith black piece's moves:\n"}
  {"      move black piece i to position k\n"}
  {"      score = minimax(depth=n, alpha=-10000, beta=10000, player=White)\n"}
  {"      undo the move\n"}
  {"      if score > best_move['score']:\n"}
  {"        best_move['score'] = score\n"}
  {"        best_move['piece'] = piece\n"}
  {"        best_move['pos'] = pos\n"}
  {"  /* the AI move /*\n"}
  {"  move(piece=best_move['piece'], pos=best_move['pos'])\n"}
  {"\n\n"}
  {"/* the main recursive function which returns the static evaluation as the base case. */\n"}
  {"float minimax(depth, alpha, beta, player):\n"}
  {"   if depth == 0: \n"}
  {"     return -eval_pos(): \n"}
  {"  /* the 'minimizing' player. */\n"}
  {"  if player == Black:\n"}
  {"    best_move = -9999\n"}
  {"    for i in black_moves:\n"}
  {"      for k in ith black piece's moves:\n"}
  {"        /* the recursive call */\n"}
  {"        best_move = max(best_move, minimax(n-1, alpha, beta, White))\n"}
  {"        undo the move\n"}
  {"        alpha = max(alpha, best_move)\n"}
  {"        /* pruning */\n"}
  {"        if alpha >= beta:\n"}
  {"          return best_move\n"}
  {"  /* the 'maximizing' player. */\n"}
  {"  else if player == White:\n"}
  {"    best_move = 9999\n"}
  {"    for i in white_moves:\n"}
  {"      for k in ith white piece's moves:\n"}
  {"        /* the recursive call */\n"}
  {"        best_move = min(best_move, minimax(n-1, alpha, beta, Black))\n"}
  {"        undo the move\n"}
  {"        beta = min(beta, best_move)\n"}
  {"        /* pruning */\n"}
  {"        if alpha >= beta:\n"}
  {"          return best_move\n"}
</div>
<p className="caption"><i>
Pseudocode for minimax and alpha-beta pruning tree search for perfect, 2-player games.
For a complete C++ chess implementation
see
<a href="https://github.com/sgheidi/FastChess/blob/master/src/ai/black/search.cc#L4"> here</a>.
</i></p>
<div className="image-background">
<img
src={dfs}
alt="Depth-first"
/> </div>
<p className="caption"><i> It should also be noted that the tree nodes are visited depth-first
(i.e traverses the deepest nodes first), as shown
above.
</i></p>
However, this algorithm has flaws and can lead to problems such as the
<a href="https://en.wikipedia.org/wiki/Horizon_effect"> horizon effect</a>,
and also situations where the next move 'seems' to be worse, but actually becomes better,
after more moves. This is a real problem with traditional AI's, which prune subtrees
that it thinks are bad for it but are actually not (this can be caused by slight inaccuracies in the
evaluation function). Neural network-based AI's seem to avoid
these problems, which brings us to the next section. <br/>

<p className="inner-header"> Neural Network Move Generation </p>
With new advances made to machine learning (specifically, deep reinforcement learning), neural
network chess has been steadily rising since 2018, when the AI company DeepMind released the
neural network chess entity known
as <a href = "https://en.wikipedia.org/wiki/AlphaZero">AlphaZero</a>, which reached a skill level
comparable to Komodo and
Stockfish in just 4 hours of training and was able to beat Stockfish 8 - the then strongest
chess engine - in most of their matches. This is despite the fact that Stockfish searched more than
80 million nodes/s (!!) vs. AlphaZero's 80000 nodes/s.
<a href="https://en.wikipedia.org/wiki/Leela_Chess_Zero"> Leela Chess Zero</a> and
<a href="https://www.chessprogramming.org/Stockfish_NNUE"> Stockfish NNUE </a>
(which uses an <a href="https://en.wikipedia.org/wiki/Efficiently_updatable_neural_network">
efficiently updatable neural network</a>)
are other
examples of neural-network based AI's. <br/> <br/>

<div className="image-background">
<img
src={nn}
alt="Neural network"
/> </div>
<p className="caption"><i> A basic neural network. </i></p>

Instead of a conventional alpha-beta search of the game tree, the neural network AI still
searches the game tree (as humans as and traditional engines do) but instead uses its
trained neural network to evaluate the board positions it encounters
in its search. This neural network
is continuously trained and updated by an unsupervised learning method known as <i>self-play</i>, where
it plays matches against another version
of itself, and the stronger one is updated as the new network.
Doing this causes the search speed and depth to decrease dramatically
(see <a href = "https://www.chessprogramming.org/Stockfish_NNUE">here</a>)
but also leads to substantial increases in skill level. The playing style is completely
transformed from
one of rigid, pure calculative and theory-based to more strategic, positional and 'human-like'.
An interesting characteristic of neural network chess AI's is that they often sacrifice
important pieces in bizarre and seemingly random positions, whereas traditional engines only
seldom do this.
<br/> <br/>
Another popular method for neural network move generation is through a supervised learning pipeline,
where the AI continuously updates its network by analyzing top engine or grandmaster games
from a large database. The AI’s
playing style would be similar to the set of games it is trained on.
<a href="https://chessengines.blogspot.com/2019/11/chess-engine-leelenstein-925.html"> Leelenstein </a>
is an example of this.

          </p>
      </div>
    </>
  );
}
