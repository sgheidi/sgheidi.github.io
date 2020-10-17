import React from 'react';
import useDarkMode from 'use-dark-mode';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Resume from '../resume.pdf';
import { useMediaQuery } from 'react-responsive';

const useStyles = makeStyles({
  button_white: {
    color: 'white',
    boxShadow: '0 3px 5px 2px rgba(90, 90, 90, .3)',
    textTransform: 'none',
    borderRadius: '25px',
    width: '25vw',
    height: '8vw',
    fontSize: '3vw',
    "&:hover": {
      background: "#184033",
      color: "white",
    },
  },
  button_black: {
    color: 'black',
    boxShadow: '0 3px 5px 2px rgba(90, 90, 90, .3)',
    textTransform: 'none',
    borderRadius: '25px',
    width: '25vw',
    height: '8vw',
    fontSize: '3vw',
    "&:hover": {
      background: "#d5e3de",
      color: "black",
      boxShadow: '0 4px 4px 4px rgba(45, 45, 45, .3)'
    },
  },
});

const mid_button = {
  width: '30vw',
  height: '8vw',
  fontSize: '3vw'
};

const button_style_688_992 = {
  width: '20vw',
  height: '8vw',
  fontSize: '2.5vw'
};
const mid_button_688_992 = {
  width: '25vw',
  height: '8vw',
  fontSize: '2.5vw'
};

const button_style_992 = {
  width: '150px',
  height: '35px',
  fontSize: '15px'
};

export default function BottomNav() {
  const darkMode = useDarkMode(false);
  const classes = useStyles();
  const bp992 = useMediaQuery({
      query: '(min-device-width: 992px)'
  });
  const bp688_992 = useMediaQuery({
      query: '(min-device-width: 688px) and (max-device-width: 992px)'
  });
  if (bp992) {
    return (
      <div className="bottom-nav">
        <Button href={Resume} variant="outlined" className={(darkMode.value == true) ? classes.button_white :
        classes.button_black} style={button_style_992}>
        CV 💼
        </Button> <div className="bottom-nav-divider"/>
        <Button variant="outlined" className={(darkMode.value == true) ? classes.button_white :
        classes.button_black} style={button_style_992}>
          Projects 📝
        </Button> <div className="bottom-nav-divider"/>
        <Button variant="outlined" className={(darkMode.value == true) ? classes.button_white :
        classes.button_black} style={button_style_992}>
          Blog 💻
        </Button>
      </div>
    );
  }
  else if (bp688_992) {
    return (
      <div className="bottom-nav">
        <Button href={Resume} variant="outlined" className={(darkMode.value == true) ? classes.button_white :
        classes.button_black} style={button_style_688_992}>
        CV 💼
        </Button> <div className="bottom-nav-divider"/>
        <Button variant="outlined" className={(darkMode.value == true) ? classes.button_white :
        classes.button_black} style={mid_button_688_992}>
          Projects 📝
        </Button> <div className="bottom-nav-divider"/>
        <Button variant="outlined" className={(darkMode.value == true) ? classes.button_white :
        classes.button_black} style={button_style_688_992}>
          Blog 💻
        </Button>
      </div>
    );
  }
  else {
    return (
      <div className="bottom-nav">
        <Button href={Resume} variant="outlined" className={(darkMode.value == true) ? classes.button_white :
        classes.button_black}>
        CV 💼
        </Button> <div className="bottom-nav-divider"/>
        <Button variant="outlined" className={(darkMode.value == true) ? classes.button_white :
        classes.button_black} style={mid_button}>
          Projects 📝
        </Button> <div className="bottom-nav-divider"/>
        <Button variant="outlined" className={(darkMode.value == true) ? classes.button_white :
        classes.button_black}>
          Blog 💻
        </Button>
      </div>
    );
  }
}
