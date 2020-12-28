import React from 'react';
import useDarkMode from 'use-dark-mode';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { useMediaQuery } from 'react-responsive';
import { Link } from '@material-ui/core';
import Tooltip from '@material-ui/core/Tooltip';
import { withStyles, makeStyles } from '@material-ui/core/styles';

const DarkToolTip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: "#121212",
    color: "white",
    boxShadow: theme.shadows[1],
    fontSize: 13,
    marginBottom: "10px",
  },
  tooltipPlacementBottom: {
    margin: "5px 0px",
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
    margin: "5px 0px",
  },
}))(Tooltip);

export default function SocialMedia() {
  const darkMode = useDarkMode(false);
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 992px)'
  })
  if (isDesktopOrLaptop) {
    var Component = darkMode.value ? DarkToolTip : LightTooltip;
    return (
      <>
        <Component title="LinkedIn">
          <a href="https://www.linkedin.com/in/shervan-gheidi/">
            <LinkedInIcon color={darkMode.value ? "secondary" : "action"}/>
          </a>
        </Component>
        <Component title="GitHub">
          <a href="https://www.github.com/sgheidi">
            <GitHubIcon color={darkMode.value ? "secondary" : "action"}
            className="git"
            />
          </a>
        </Component>
      </>
    );
  }
  else {
    return (
      <>
      <a href="https://www.linkedin.com/in/shervan-gheidi/">
        <LinkedInIcon color={darkMode.value ? "secondary" : "action"}/>
      </a>
      <a href="https://www.github.com/sgheidi">
        <GitHubIcon color={darkMode.value ? "secondary" : "action"}
        className="git"
        />
      </a>
      </>
    );
  }
}
