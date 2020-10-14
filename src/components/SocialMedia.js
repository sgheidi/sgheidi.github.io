import React from 'react';
import useDarkMode from 'use-dark-mode';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { useMediaQuery } from 'react-responsive';
import { Link } from '@material-ui/core';

const link_icon = {
  fontSize: "28",
  marginTop: "4"
};
const git_icon = {
  fontSize: "23",
  marginTop: "4"
};
const link_icon_small = {
  fontSize: "25",
  marginTop: "4"
};
const git_icon_small = {
  fontSize: "20",
  marginTop: "4"
};
const link_icon_small2 = {
  fontSize: "21",
  marginTop: "4"
};
const git_icon_small2 = {
  fontSize: "16",
  marginTop: "4"
};

function ShowDarkLogos() {
  const sz430 = useMediaQuery({
      query: '(max-device-width: 430px)'
    });
  const sz365 = useMediaQuery({
      query: '(max-device-width: 365px)'
    });
  if (sz365) {
    return (
      <>
        <a href="https://www.linkedin.com/in/shervan-gheidi/">
          <LinkedInIcon color="secondary" style={link_icon_small2}/> &nbsp;&nbsp;
        </a>
        <a href="https://www.github.com/sgheidi">
          <GitHubIcon color="secondary" style={git_icon_small2}/>
        </a>
      </>
    );
  }
  else if (sz430) {
    return (
      <>
        <a href="https://www.linkedin.com/in/shervan-gheidi/">
          <LinkedInIcon color="secondary" style={link_icon_small}/> &nbsp;&nbsp;
        </a>
        <a href="https://www.github.com/sgheidi">
          <GitHubIcon color="secondary" style={git_icon_small}/>
        </a>
      </>
    );
  }
  else {
    return (
      <>
        <Link href="https://www.linkedin.com/in/shervan-gheidi/">
          <LinkedInIcon color="secondary" style={link_icon}/> &nbsp;&nbsp;
        </Link>
        <a href="https://www.github.com/sgheidi">
          <GitHubIcon color="secondary" style={git_icon}/>
        </a>
      </>
    );
  }
}

function ShowLightLogos() {
  const sz430 = useMediaQuery({
      query: '(max-device-width: 430px)'
    });
  const sz365 = useMediaQuery({
      query: '(max-device-width: 365px)'
    });
  if (sz365) {
    return (
      <>
        <a href="https://www.linkedin.com/in/shervan-gheidi/">
          <LinkedInIcon color="action" style={link_icon_small2}/> &nbsp;&nbsp;
        </a>
        <a href="https://www.github.com/sgheidi">
          <GitHubIcon color="action" style={git_icon_small2}/>
        </a>
      </>
    );
  }
  else if (sz430) {
    return (
      <>
        <a href="https://www.linkedin.com/in/shervan-gheidi/">
          <LinkedInIcon color="action" style={link_icon_small}/> &nbsp;&nbsp;
        </a>
        <a href="https://www.github.com/sgheidi">
          <GitHubIcon color="action" style={git_icon_small}/>
        </a>
      </>
    );
  }
  else {
    return (
      <>
        <a href="https://www.linkedin.com/in/shervan-gheidi/">
          <LinkedInIcon color="action" style={link_icon}/> &nbsp;&nbsp;
        </a>
        <a href="https://www.github.com/sgheidi">
          <GitHubIcon color="action" style={git_icon}/>
        </a>
      </>
    );
  }
}

export default function SocialMedia() {
  const darkMode = useDarkMode(false);
  if (darkMode.value == true) {
    return <ShowDarkLogos />
  }
  else if (darkMode.value == false) {
    return <ShowLightLogos />
  }
}
