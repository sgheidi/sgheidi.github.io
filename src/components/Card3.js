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

export default function Card3() {
  const darkMode = useDarkMode(false);

  return (
    <>
    <div className="card-body">
    <div className="card-header1">An Efficient Algorithm For Counting Primes Up To N + Analysis</div>
    <p className="card-date1"> Dec. 12, 2020 &nbsp; • &nbsp; 3 min read </p>
    Here's the problem statement: determine the number of prime numbers from 1 up
    to an input N.
    As we are considering efficiency here, we will be using the test case
    of N = 10000000 (10M) to test...
    <Link to="/countPrimes"> <br/>
      <Button variant={darkMode.value ? "dark" : "light"}>
        Continue reading
      </Button>
    </Link>
    </div>
    </>
  );
}
