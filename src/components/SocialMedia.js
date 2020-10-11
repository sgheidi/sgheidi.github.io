import React, { Component } from 'react';
import useDarkMode from 'use-dark-mode';
import linkedin_light from './linkedin_light.png';
import github_light from './github_light.png';

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function ShowDarkLogos() {
  return (
    <>
      <a href="https://www.linkedin.com/in/shervan-gheidi/">
      <LinkedInIcon color="secondary" style={{ fontSize: 27 }}/>
      </a>
      <div class="linkedin-divider"/>
      <a href="https://www.github.com/sgheidi">
        <GitHubIcon color="secondary" style={{ fontSize: 23 }}/>
      </a>
      <div class="divider3"/>
    </>
  );
}

function ShowLightLogos() {
  return (
    <>
    <a href="https://www.linkedin.com/in/shervan-gheidi/">
    <LinkedInIcon color="action" style={{ fontSize: 27 }}/>
    </a>
    <div class="linkedin-divider"/>
    <a href="https://www.github.com/sgheidi">
      <GitHubIcon color="action" style={{ fontSize: 23 }}/>
    </a>
    <div class="divider3"/>
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
