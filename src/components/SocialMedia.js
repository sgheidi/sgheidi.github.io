import React, { Component } from 'react';
import useDarkMode from 'use-dark-mode';
import linkedin_light from './linkedin_light.png';
import github_light from './github_light.png';

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const linkedin_icon_size = 28;
const github_icon_size = 23;

const gitIcon = {
  fontSize: github_icon_size,
  marginTop: "3"
};
const linkedIcon = {
  fontSize: linkedin_icon_size,
  marginTop: "3"
};


function ShowDarkLogos() {
  return (
    <>
      <a href="https://www.linkedin.com/in/shervan-gheidi/">
      <LinkedInIcon color="secondary" style={linkedIcon}/>
      &nbsp;&nbsp;&nbsp;
      </a>
      <a href="https://www.github.com/sgheidi">
        <GitHubIcon color="secondary" style={gitIcon}/>
      </a>
    </>
  );
}

function ShowLightLogos() {
  return (
    <>
    <a href="https://www.linkedin.com/in/shervan-gheidi/">
    <LinkedInIcon color="action" style={linkedIcon}/>
    &nbsp;&nbsp;
    </a>
    <a href="https://www.github.com/sgheidi">
      <GitHubIcon color="action" style={gitIcon}/>
    </a>
    </>
  );
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
