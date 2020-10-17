import React from 'react';
import useDarkMode from 'use-dark-mode';
import SocialMedia from './SocialMedia';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import NightsStayIcon from '@material-ui/icons/NightsStay';
import { useMediaQuery } from 'react-responsive'

const sun = {
  fontSize: "5.5vw",
};
const moon = {
  fontSize: "5.5vw",
};
const sun_688 = {
  fontSize: "7vw",
};
const moon_688 = {
  fontSize: "7vw",
};
const sun_688_992 = {
  fontSize: "4.5vw",
};
const moon_688_992 = {
  fontSize: "4.5vw",
};

export default function DarkModeToggle() {
  const bp992 = useMediaQuery({
      query: '(min-device-width: 992px)'
  });
  const bp688_992 = useMediaQuery({
      query: '(min-device-width: 688px) and (max-device-width: 992px)'
  });
  const darkMode = useDarkMode(false);
  if (bp992) {
    return (
      <div className="dark-mode-toggle">
        <SocialMedia />
        <button type="button" onClick={darkMode.disable}>
          <WbSunnyIcon />
        </button>
        <button type="button" onClick={darkMode.enable}>
          <NightsStayIcon />
        </button>
      </div>
    );
  }
  else if (bp688_992) {
    return (
      <div className="dark-mode-toggle">
        <SocialMedia />
        <button type="button" onClick={darkMode.disable}>
          <WbSunnyIcon style={sun_688_992} />
        </button>
        <button type="button" onClick={darkMode.enable}>
          <NightsStayIcon style={moon_688_992} />
        </button>
      </div>
    );
  }
  else {
    return (
      <div className="dark-mode-toggle">
        <SocialMedia />
        <button type="button" onClick={darkMode.disable}>
          <WbSunnyIcon style={sun} />
        </button>
        <button type="button" onClick={darkMode.enable}>
          <NightsStayIcon style={moon} />
        </button>
      </div>
    );
  }
}
