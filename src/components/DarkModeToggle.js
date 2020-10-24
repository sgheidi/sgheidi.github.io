import React from 'react';
import useDarkMode from 'use-dark-mode';
import SocialMedia from './SocialMedia';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import NightsStayIcon from '@material-ui/icons/NightsStay';
import { useMediaQuery } from 'react-responsive';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';

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
  fontSize: "4vw",
};
const moon_688_992 = {
  fontSize: "4vw",
};

const DarkToolTip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: "#2e0718",
    color: "white",
    boxShadow: theme.shadows[1],
    fontSize: 13,
    marginBottom: "10px",
  },
  tooltipPlacementBottom: {
    margin: "0px 0px",
  },
}))(Tooltip);

const LightTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: "white",
    color: "black",
    boxShadow: theme.shadows[1],
    fontSize: 13,
    marginBottom: "10px",
  },
}))(Tooltip);

export default function DarkModeToggle() {
  const bp992 = useMediaQuery({
      query: '(min-device-width: 992px)'
  });
  const bp688_992 = useMediaQuery({
      query: '(min-device-width: 688px) and (max-device-width: 992px)'
  });
  const darkMode = useDarkMode(false);
  if (bp992) {
    var Component = darkMode.value ? DarkToolTip : LightTooltip;
    return (
      <div className="dark-mode-toggle">
        <SocialMedia />
        <Component title="Toggle light theme">
          <button type="button" onClick={darkMode.disable}>
            <WbSunnyIcon />
          </button>
        </Component>
        <Component title="Toggle dark theme">
          <button type="button" onClick={darkMode.enable}>
            <NightsStayIcon />
          </button>
        </Component>
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
