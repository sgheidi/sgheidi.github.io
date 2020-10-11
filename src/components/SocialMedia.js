import React, { Component } from 'react';
import useDarkMode from 'use-dark-mode';
import linkedin_light from './linkedin_light.png';
import github_light from './github_light.png';

import github_dark from './github_light.png';
import linkedin_dark from './linkedin_light.png';

function ShowDarkLogos() {
  return (
    <>
      <a href="https://www.linkedin.com/in/shervan-gheidi/">
        <div className="img-white">
        <img src={linkedin_dark} alt="LinkedIn" width="25" />
        </div>
      </a>
      <div class="divider4"/>
      <a href="https://www.github.com/sgheidi">
      <div className="img-white">
        <img src={github_dark} alt="GitHub" width="24" />
        </div>
      </a>
      <div class="divider3"/>
    </>
  );
}

function ShowLightLogos() {
  return (
    <>
    <a href="https://www.linkedin.com/in/shervan-gheidi/">
      <img src={linkedin_light} alt="LinkedIn" width="25" />
    </a>
    <div class="divider4"/>
    <a href="https://www.github.com/sgheidi">
      <img src={github_light} alt="GitHub" width="24" />
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
