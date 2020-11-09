import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import useDarkMode from 'use-dark-mode';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';

export default function Card1() {
  const darkMode = useDarkMode(false);

  return (
    <>
    <div className="card-body">
    <div className="card-header1">Chess Programming: A Reflection</div>
    Chess programming has single-handedly resulted in my skills in algorithm design, flow and
    implementation to be signficantly stronger. It has not only forced me to think analytically about...
    <Link to="/chessprogramming"> <br/>
      <Button variant={darkMode.value ? "dark" : "light"}>
        Continue reading
      </Button>
    </Link>
    </div>
    </>
  );
}
