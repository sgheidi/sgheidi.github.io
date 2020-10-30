import React from 'react';
import Blog1 from './components/Blog1';
import Pychess from './components/proj/Pychess';
import UnityFPS from './components/proj/UnityFPS';
import DarkModeToggle from './components/DarkModeToggle';
import Main from './Main';
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
          <Route path="/blog" exact component={Blog1} />
          <Route path="/pychess" exact component={Pychess} />
          <Route path="/unityfps" exact component={UnityFPS} />
          <Route path="/" exact component={Main} />
        </Switch>
      </Router>
    </>
  );
}
