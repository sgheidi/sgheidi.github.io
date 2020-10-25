import React from 'react';
import useDarkMode from 'use-dark-mode';
import Resume from '../media/resume.pdf';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import { useMediaQuery } from 'react-responsive';
import {Link} from 'react-router-dom';

export default function BottomNav() {
  const darkMode = useDarkMode(false);
  return (
    <div className="bottom-nav">
      <Button href={Resume} variant={darkMode.value ? "dark" : "light"}>
      CV 💼
      </Button> <div className="bottom-nav-divider"/>
      <Dropdown>
        <Dropdown.Toggle variant={darkMode.value ? "dark" : "light"}>
          Projects 📝
        </Dropdown.Toggle>
        <Dropdown.Menu className={darkMode.value ? "dropdown-dark" : "dropdown-light"}>
          <Dropdown.Item as={Link} to="/pychess"
          className="dropdown-item">PyChess</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown> <div className="bottom-nav-divider"/>
      <Button variant={darkMode.value ? "dark" : "light"}>
        Blog 💻
      </Button>
    </div>
  );
}
