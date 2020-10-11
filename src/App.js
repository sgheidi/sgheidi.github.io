import React from 'react';
import DarkModeToggle from './components/DarkModeToggle';
import Content from './components/Content';
import Card from './components/Card';
import './styles.scss';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import useDarkMode from 'use-dark-mode';

const useStyles = makeStyles({
  button_white: {
    color: 'white',
    boxShadow: '0 3px 5px 2px rgba(90, 90, 90, .3)',
  },
  button_black: {
    color: 'black',
    boxShadow: '0 3px 5px 2px rgba(90, 90, 90, .3)',
  },
});

export default function App() {
  const darkMode = useDarkMode(false);
  const classes = useStyles();
  return (
    <>
      <div className="navbar">
        <div className="name"><b>shervan gheidi <div class="divider2"/> ☕ </b></div>
        <div className="dark-mode-button"><DarkModeToggle /></div>
      </div>
      <div className="links">
        <div className="menu-items">
          <Button variant="outlined" className={(darkMode.value == true) ? classes.button_white :
          classes.button_black}>
          CV <div class="divider"/> 💼
          </Button>
          <div class="divider"/>
          <Button variant="outlined" className={(darkMode.value == true) ? classes.button_white :
          classes.button_black}>
            Projects <div class="divider"/>  📝
          </Button>
          <div class="divider"/>
          <Button variant="outlined" className={(darkMode.value == true) ? classes.button_white :
          classes.button_black}>
            Blog <div class="divider"/> 💻
          </Button>
        </div>
      </div>
      <div className="card">
        <Card />
      </div>
    </>
  );
}
