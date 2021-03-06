import React from 'react';
import Blog from './components/Blog';
import Pychess from './components/proj/Pychess';
import UnityFPS from './components/proj/UnityFPS';
import TetrisFriends from './components/proj/TetrisFriends';
import ChessProgramming from './components/blogs/ChessProgramming';
import primes from './components/blogs/primes';
import lc from './components/blogs/lc';
import AI from './components/blogs/AI';
import DarkModeToggle from './components/DarkModeToggle';
import Main from './components/Main';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <>
      <Router>
        <div className="navbar">
          <div className="name">
            <a href="/"><b>shervan gheidi ☕ </b></a>
          </div>
          <DarkModeToggle />
        </div>
        <Switch>
          <Route path="/blog" exact component={Blog} />
          <Route path="/pychess" exact component={Pychess} />
          <Route path="/unityfps" exact component={UnityFPS} />
          <Route path="/ChessProgramming" exact component={ChessProgramming} />
          <Route path="/TetrisFriends" exact component={TetrisFriends} />
          <Route path="/AI" exact component={AI} />
          <Route path="/" exact component={Main} />
          <Route path="/countPrimes" exact component={primes} />
          <Route path="/lc" exact component={lc} />
        </Switch>
      </Router>
    </>
  );
}
