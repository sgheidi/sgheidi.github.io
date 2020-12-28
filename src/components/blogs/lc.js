import React from 'react';
import {Link} from 'react-router-dom';
import DarkModeToggle from '../DarkModeToggle';
import useDarkMode from 'use-dark-mode';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import Typography from '@material-ui/core/Typography';
import gif from '../../media/out.gif'
import '../../css/projects.scss';

export default function lc() {
  return (
    <>
      <div className="back">
        <Link to="../">
          <ArrowBackIosRoundedIcon color="secondary" />
        </Link>
      </div>
      <div className="project-body">
        <p className="project-header"> LeetCode Problems I've Encountered In Actual Interviews  </p>
          <p className="date"> Dec. 30, 2020 &nbsp; • &nbsp; 5 min read
          </p>
          <p className="project-body-text">
This blog is mainly to track my own progress & compare questions I've gotten with the ones I have
practice with, so the list will be growing.
isAnagram(s1, s2), isPalindrome of messy string, reverse string in place, bool duplicates in string,
bool target sum of 2 numbers exists in array.
<br/><br/>
<p className="inner-header"> Other questions </p>
Other common interview questions include:
<li> Difference between synchronous & asynchronous</li>
<li> What does Ajax stand for (the web framework)</li>
          </p>
      </div>
    </>
  );
}
