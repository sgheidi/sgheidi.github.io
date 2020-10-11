import React from 'react';
import Toggle from './Toggle';
import useDarkMode from 'use-dark-mode';
import SocialMedia from './SocialMedia';

const DarkModeToggle = () => {
  const darkMode = useDarkMode(false);

  return (
    <div className="dark-mode-toggle">
      <SocialMedia />
      <button type="button" onClick={darkMode.disable}>
        ☀
      </button>
      <div class="divider"/>
      <button type="button" onClick={darkMode.enable}>
        ☾
      </button>
    </div>
  );
};

export default DarkModeToggle;
