import React from 'react';
import useDarkMode from 'use-dark-mode';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { useMediaQuery } from 'react-responsive';
import { Link } from '@material-ui/core';

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
  fontSize: "4vw",
};

const link_688_992 = {
  fontSize: "4.9vw",
};

function ShowDarkLogos() {
  const bp992 = useMediaQuery({
      query: '(min-device-width: 992px)'
  });
  const bp688_992 = useMediaQuery({
      query: '(min-device-width: 688px) and (max-device-width: 992px)'
  });
  if (bp992) {
    return (
      <>
        <a href="https://www.linkedin.com/in/shervan-gheidi/">
          <LinkedInIcon color="secondary" style={link_992}/>
        </a>
        <a href="https://www.github.com/sgheidi">
          <GitHubIcon color="secondary" style={git_992}/>
        </a>
      </>
    );
  }
  else if (bp688_992) {
    return (
      <>
        <a href="https://www.linkedin.com/in/shervan-gheidi/">
          <LinkedInIcon color="secondary" style={link_688_992}/>
        </a>
        <a href="https://www.github.com/sgheidi">
          <GitHubIcon color="secondary" style={git_688_992}/>
        </a>
      </>
    );
  }
  else {
    return (
        <>
          <a href="https://www.linkedin.com/in/shervan-gheidi/">
            <LinkedInIcon color="secondary" style={link_icon}/>
          </a>
          <a href="https://www.github.com/sgheidi">
            <GitHubIcon color="secondary" style={git_icon}/>
          </a>
        </>
    );
  }
}

function ShowLightLogos() {
  const bp992 = useMediaQuery({
      query: '(min-device-width: 992px)'
  });
  const bp688_992 = useMediaQuery({
      query: '(min-device-width: 688px) and (max-device-width: 992px)'
  });
  if (bp992) {
    return (
      <>
        <a href="https://www.linkedin.com/in/shervan-gheidi/">
          <LinkedInIcon color="action" style={link_992}/>
        </a>
        <a href="https://www.github.com/sgheidi">
          <GitHubIcon color="action" style={git_992}/>
        </a>
      </>
    );
  }
  else if (bp688_992) {
    return (
      <>
        <a href="https://www.linkedin.com/in/shervan-gheidi/">
          <LinkedInIcon color="action" style={link_688_992}/>
        </a>
        <a href="https://www.github.com/sgheidi">
          <GitHubIcon color="action" style={git_688_992}/>
        </a>
      </>
    );
  }
  else {
    return (
        <>
          <a href="https://www.linkedin.com/in/shervan-gheidi/">
            <LinkedInIcon color="action" style={link_icon}/>
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
