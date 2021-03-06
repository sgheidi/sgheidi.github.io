import React from 'react';
import useDarkMode from 'use-dark-mode';
import SocialMedia from './SocialMedia';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import NightsStayIcon from '@material-ui/icons/NightsStay';
import { useMediaQuery } from 'react-responsive';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';

const DarkToolTip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: "#121212",
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
    backgroundColor: "#e3e3e3",
    color: "black",
    boxShadow: theme.shadows[1],
    fontSize: 13,
    marginBottom: "10px",
  },
  tooltipPlacementBottom: {
    margin: "0px 0px",
  },
}))(Tooltip);

export default function DarkModeToggle() {
  const darkMode = useDarkMode(false);
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 992px)'
  })
  if (isDesktopOrLaptop) {
    var Component = darkMode.value ? DarkToolTip : LightTooltip;
    return (
      <div className="dark-mode-toggle">
        <SocialMedia />
        <Component title="Toggle light theme">
          <button type="button" onClick={darkMode.disable}>
            <WbSunnyIcon className="sun"/>
          </button>
        </Component>
        <Component title="Toggle dark theme">
          <button type="button" onClick={darkMode.enable}>
            <NightsStayIcon clsasName="moon"/>
          </button>
        </Component>
      </div>
    );
  }
  else {
    return (
      <div className="dark-mode-toggle">
        <SocialMedia />
        <button type="button" onClick={darkMode.disable}>
          <WbSunnyIcon className="sun"/>
        </button>
        <button type="button" onClick={darkMode.enable}>
          <NightsStayIcon clsasName="moon"/>
        </button>
      </div>
    );
  }
}
