import React from 'react';
import useDarkMode from 'use-dark-mode';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { useMediaQuery } from 'react-responsive';
import { Link } from '@material-ui/core';
import Tooltip from '@material-ui/core/Tooltip';
import { withStyles, makeStyles } from '@material-ui/core/styles';

const link_icon = {
  fontSize: "5.5vw",

};
const git_icon = {
  fontSize: "4.5vw",

};

const git_992 = {
  fontSize: "22",
};

const link_992 = {
  fontSize: "27",
};

const git_688_992 = {
  fontSize: "3.5vw",
};

const link_688_992 = {
  fontSize: "4.4vw",
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
    margin: "5px 0px",
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

export default function SocialMedia() {
  const darkMode = useDarkMode(false);
  const bp992 = useMediaQuery({
      query: '(min-device-width: 992px)'
  });
  const bp688_992 = useMediaQuery({
      query: '(min-device-width: 688px) and (max-width: 992px)'
  });
  if (bp992) {
    var Component = darkMode.value ? DarkToolTip : LightTooltip;
    return (
      <>
        <Component title="LinkedIn">
          <a href="https://www.linkedin.com/in/shervan-gheidi/">
            <LinkedInIcon color={darkMode.value ? "secondary" : "action"} style={link_992}/>
          </a>
        </Component>
        <Component title="GitHub">
          <a href="https://www.github.com/sgheidi">
            <GitHubIcon color={darkMode.value ? "secondary" : "action"} style={git_992}/>
          </a>
        </Component>
      </>
    );
  }
  else if (bp688_992) {
    return (
      <>
        <a href="https://www.linkedin.com/in/shervan-gheidi/">
          <LinkedInIcon color={darkMode.value ? "secondary" : "action"} style={link_688_992}/>
        </a>
        <a href="https://www.github.com/sgheidi">
          <GitHubIcon color={darkMode.value ? "secondary" : "action"} style={git_688_992}/>
        </a>
      </>
    );
  }
  else {
    return (
        <>
          <a href="https://www.linkedin.com/in/shervan-gheidi/">
            <LinkedInIcon color={darkMode.value ? "secondary" : "action"} style={link_icon}/>
          </a>
          <a href="https://www.github.com/sgheidi">
            <GitHubIcon color={darkMode.value ? "secondary" : "action"} style={git_icon}/>
          </a>
        </>
    );
  }
}
