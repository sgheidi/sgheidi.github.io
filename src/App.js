import React from 'react';
import Blog1 from './components/Blog1';
import Pychess from './components/Pychess';
import DarkModeToggle from './components/DarkModeToggle';
import Main from './Main';
import {
  BrowserRouter as Router,
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
            <Link to="/"><b>shervan gheidi ☕ </b></Link>
          </div>
          <DarkModeToggle />
        </div>
        <Switch>
          <Route path="/blog" exact component={Blog1} />
          <Route path="/pychess" exact component={Pychess} />
          <Route path="/" exact component={Main} />
        </Switch>
      </Router>
    </>
  );
}
