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
    textTransform: 'none'
  },
  button_black: {
    color: 'black',
    boxShadow: '0 3px 5px 2px rgba(90, 90, 90, .3)',
    textTransform: 'none'
  },
});

const styles430 = {
  width: '100px',
  height: '35px',
  fontSize: '12px'
};
const styles365 = {
  width: '90px',
  height: '30px',
  fontSize: '9px'
};

function openPdf() {
  return (<embed src={Resume} width="100%" height="100%" />);
}

export default function BottomNav() {
  const sz365 = useMediaQuery({
      query: '(max-device-width: 365px)'
  });
  const sz600 = useMediaQuery({
      query: '(max-device-width: 600px)'
  });
  const sz430 = useMediaQuery({
      query: '(max-device-width: 430px)'
  });
  const darkMode = useDarkMode(false);
  const classes = useStyles();
  if (sz365) {
    return (
      <div className="bottom-nav">
        <Button variant="outlined" className={(darkMode.value == true) ? classes.button_white :
        classes.button_black} onClick={() => { openPdf(); }} style={styles365}>
        CV 💼
        </Button>
        <Button variant="outlined" className={(darkMode.value == true) ? classes.button_white :
        classes.button_black} style={styles365}>
          Projects 📝
        </Button>
        <Button variant="outlined" className={(darkMode.value == true) ? classes.button_white :
        classes.button_black} style={styles365}>
          Blog 💻
        </Button>
      </div>
    );
  }
  else if (sz430) {
    return (
      <div className="bottom-nav">
        <Button variant="outlined" className={(darkMode.value == true) ? classes.button_white :
        classes.button_black} onClick={() => { openPdf(); }} style={styles430}>
        CV 💼
        </Button> <div className="bottom-nav-divider"/>
        <Button variant="outlined" className={(darkMode.value == true) ? classes.button_white :
        classes.button_black} style={styles430}>
          Projects 📝
        </Button> <div className="bottom-nav-divider"/>
        <Button variant="outlined" className={(darkMode.value == true) ? classes.button_white :
        classes.button_black} style={styles430}>
          Blog 💻
        </Button>
      </div>
    );
  }
  else if (sz600) {
    return (
      <div className="bottom-nav">
        <Button variant="outlined" className={(darkMode.value == true) ? classes.button_white :
        classes.button_black} onClick={() => { openPdf(); }} size="small">
        CV 💼
        </Button> <div className="bottom-nav-divider"/>
        <Button variant="outlined" className={(darkMode.value == true) ? classes.button_white :
        classes.button_black} size="small">
          Projects 📝
        </Button> <div className="bottom-nav-divider"/>
        <Button variant="outlined" className={(darkMode.value == true) ? classes.button_white :
        classes.button_black} size="small">
          Blog 💻
        </Button>
      </div>
    );
  }
  else {
    return (
      <div className="bottom-nav">
        <Button variant="outlined" className={(darkMode.value == true) ? classes.button_white :
        classes.button_black} onClick={() => { openPdf(); }}>
        CV 💼
        </Button> <div className="bottom-nav-divider"/>
        <Button variant="outlined" className={(darkMode.value == true) ? classes.button_white :
        classes.button_black}>
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
