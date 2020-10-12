import React from 'react';
import Toggle from './Toggle';
import useDarkMode from 'use-dark-mode';
import SocialMedia from './SocialMedia';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import NightsStayIcon from '@material-ui/icons/NightsStay';

const DarkModeToggle = () => {
  const darkMode = useDarkMode(false);

  return (
    <div className="dark-mode-toggle">
      <SocialMedia />
      &nbsp;&nbsp;
      <button type="button" onClick={darkMode.disable}>
        <WbSunnyIcon/>
        &nbsp;
      </button>
      <button type="button" onClick={darkMode.enable}>
        <NightsStayIcon />&nbsp;
      </button>
    </div>
  );
};

export default DarkModeToggle;
