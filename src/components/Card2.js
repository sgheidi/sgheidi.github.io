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

export default function Card2() {
  const darkMode = useDarkMode(false);

  return (
    <>
    <div className="card-body">
    <div className="card-header1">AI Algorithms: Minimax and α-β Pruning</div>
    <p className="card-date1"> Nov. 27, 2020 &nbsp; • &nbsp; 5 min read </p>
    Minimax, combined with the concept of α-β pruning, is at the heart of how an AI generates a
    move in perfect, 2 player games such as connect-4, tic-tac-toe and chess. The core idea is very
    intuitive, and...
    <Link to="/ai"> <br/>
      <Button variant={darkMode.value ? "dark" : "light"}>
        Continue reading
      </Button>
    </Link>
    </div>
    </>
  );
}
