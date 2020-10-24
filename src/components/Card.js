import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import useDarkMode from 'use-dark-mode';

const useStyles = makeStyles({
  root_black: {
    maxWidth: 400,
    background: '#caded4',
    boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .3)',
    color: 'black',
    fontSize: '16px',
  },
  root_white: {
    maxWidth: 400,
    background: '#112d4d',
    boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .3)',
    color: 'white',
    fontSize: '16px',
  },
  button_black: {
    padding: "10px 10px",
    color: 'red',
  },
  button_white: {
    padding: "10px 10px",
    color: 'black',
  }
});

export default function ImgMediaCard() {
  const darkMode = useDarkMode(false);
  const classes = useStyles();

  return (
    <Card className={(darkMode.value == true) ? classes.root_white :
    classes.root_black}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            <b>chess-ai</b>
          </Typography>
          <Typography variant="body" component="p" align="alignJustify">
            A generalized minimax and alpha-beta pruning search algorithm for perfect, 2-player games.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" className={(darkMode.value == true) ? classes.button_black :
        classes.button_white}>
          Continue reading
        </Button>
      </CardActions>
    </Card>
  );
}
