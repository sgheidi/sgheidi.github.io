import React from 'react';
import useDarkMode from 'use-dark-mode';
import Resume from '../media/resume.pdf';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import { useMediaQuery } from 'react-responsive';
import {Link} from 'react-router-dom';

export default function BottomNav() {
  const darkMode = useDarkMode(false);
  const bp992 = useMediaQuery({
      query: '(min-device-width: 992px)'
  });
  const bp688_992 = useMediaQuery({
      query: '(min-device-width: 688px) and (max-width: 992px)'
  });
  const bp688 = useMediaQuery({
      query: '(max-width: 688px)'
  });
  if (bp688) {
    return (
      <div className="bottom-nav">
      <style type="text/css">
        {`
        .btn-light {
          color: black;
          background-color: #e8e6e1;
          border-radius: 25px;
          box-shadow: 0 3px 5px 2px rgba(90, 90, 90, .3);
          font-size: 3vw;
          width: 26vw;
        }
        .btn-dark {
          color: white;
          background-color: #17302e;
          border-radius: 25px;
          box-shadow: 0 3px 5px 2px rgba(90, 90, 90, .3);
          font-size: 3vw;
          width: 26vw;
        }
        `}
      </style>
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
  else if (bp688_992) {
    return (
      <div className="bottom-nav">
      <style type="text/css">
        {`
        .btn-light {
          color: black;
          background-color: #e8e6e1;
          border-radius: 25px;
          box-shadow: 0 3px 5px 2px rgba(90, 90, 90, .3);
          font-size: 1.7vw;
          width: 20vw;
        }
        .btn-dark {
          color: white;
          background-color: #17302e;
          border-radius: 25px;
          box-shadow: 0 3px 5px 2px rgba(90, 90, 90, .3);
          font-size: 1.7vw;
          width: 20vw;
        }
        `}
      </style>
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
  else {
    return (
      <div className="bottom-nav">
      <style type="text/css">
        {`
        .btn-light {
          color: black;
          background-color: #e8e6e1;
          border-radius: 25px;
          box-shadow: 0 3px 5px 2px rgba(90, 90, 90, .3);
          font-size: 1.25vw;
          width: 20vw;
        }
        .btn-dark {
          color: white;
          background-color: #17302e;
          border-radius: 25px;
          box-shadow: 0 3px 5px 2px rgba(90, 90, 90, .3);
          font-size: 1.25vw;
          width: 20vw;
        }
        `}
      </style>
        <Button href={Resume} variant={darkMode.value ? "dark" : "light"}>
        CV 💼
        </Button> <div className="bottom-nav-divider"/>
      <Dropdown drop="down">
        <Dropdown.Toggle variant={darkMode.value ? "dark" : "light"}>
          Projects 📝
        </Dropdown.Toggle>
        <Dropdown.Menu className={darkMode.value ? "dropdown-dark" : "dropdown-light"}>
          <Dropdown.Item as={Link} to="/pychess"
          className="dropdown-item">PyChess</Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown> <div className="bottom-nav-divider"/>
        <Button href="/blog" variant={darkMode.value ? "dark" : "light"}>
          Blog 💻
        </Button>
      </div>
    );
  }
}
