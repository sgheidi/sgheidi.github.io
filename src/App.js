import React from 'react';
import Blog from './components/Blog';
import Pychess from './components/proj/Pychess';
import UnityFPS from './components/proj/UnityFPS';
import TetrisFriends from './components/proj/TetrisFriends';
import ChessProgramming from './components/blogs/ChessProgramming';
import AI_MAB from './components/blogs/AI_MAB';
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
          <Route path="/AI_MAB" exact component={AI_MAB} />
          <Route path="/" exact component={Main} />
        </Switch>
      </Router>
    </>
  );
}
