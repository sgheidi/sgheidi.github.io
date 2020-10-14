import React from 'react';
import useDarkMode from 'use-dark-mode';
import SocialMedia from './SocialMedia';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import NightsStayIcon from '@material-ui/icons/NightsStay';
import { useMediaQuery } from 'react-responsive'

const sun_small = {
  fontSize: "25"
};

const moon_small = {
  fontSize: "25"
};

const sun_small2 = {
  fontSize: "19"
};

const moon_small2 = {
  fontSize: "19"
};

const DarkModeToggle = () => {
  const darkMode = useDarkMode(false);
  const sz430 = useMediaQuery({
      query: '(max-device-width: 430px)'
  });
  const sz365 = useMediaQuery({
      query: '(max-device-width: 365px)'
  });
  if (sz365) {
    return (
      <div className="dark-mode-toggle">
        <SocialMedia />
        &nbsp;&nbsp;
        <button type="button" onClick={darkMode.disable}>
          <WbSunnyIcon style={sun_small2}/>
        </button>
        <button type="button" onClick={darkMode.enable}>
          <NightsStayIcon style={moon_small2}/>&nbsp;
        </button>
      </div>
    );
  }
  else if (sz430) {
    return (
      <div className="dark-mode-toggle">
        <SocialMedia />
        &nbsp;&nbsp;
        <button type="button" onClick={darkMode.disable}>
          <WbSunnyIcon style={sun_small}/> &nbsp;
        </button>
        <button type="button" onClick={darkMode.enable}>
          <NightsStayIcon style={moon_small}/>&nbsp;
        </button>
      </div>
    );
  }
  else {
    return (
      <div className="dark-mode-toggle">
        <SocialMedia />
        &nbsp;&nbsp;
        <button type="button" onClick={darkMode.disable}>
          <WbSunnyIcon/> &nbsp;
        </button>
        <button type="button" onClick={darkMode.enable}>
          <NightsStayIcon />&nbsp;
        </button>
      </div>
    );
  }
};

export default DarkModeToggle;
