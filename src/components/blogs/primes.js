import React from 'react';
import {Link} from 'react-router-dom';
import DarkModeToggle from '../DarkModeToggle';
import useDarkMode from 'use-dark-mode';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import Typography from '@material-ui/core/Typography';
import sieve from '../../media/sieve.gif';
import plt from '../../media/plt.png';
import '../../css/projects.scss';

export default function primes() {
  return (
    <>
      <div className="back">
        <Link to="../">
          <ArrowBackIosRoundedIcon color="secondary" />
        </Link>
      </div>
      <div className="project-body">
        <p className="project-header"> 📜&nbsp;An Efficient Algorithm For Counting Primes Up To N + Analysis </p>
          <p className="date"> Dec. 12, 2020 &nbsp; • &nbsp; 3 min read
          </p>
          <p className="project-body-text">
Here's the problem statement: determine the number of prime numbers from 1 up
to an input <div className="code"> N </div>.
As we are considering efficiency here, we will be using the test case
of <div className="code"> N = 10000000 </div> (10M) to test the algorithm's runtime.
When faced with this problem, the first solution one might come up with is using a
nested <div className="code">for </div> loop and checking with the modulo operator whether each number
in <div className="code">[1, N] </div> is composite or not
(recall that a number <div className="code">i </div> is composite if there exists
a number <div className="code">j </div> in the
range <div className="code">[2, i] </div> such that <div className="code">i % j == 0 </div>).
Here is the pseudocode for this approach: <br/><br/>
<div class="pseudocode">
{"int countPrimes(int n):\n"}
{"  total = 0\n"}
{"  for i in range(2, n):\n"}
{"    prime = true\n"}
{"    for j in range(sqrt(i)):\n"}
{"      if i % j == 0:\n"}
{"        prime = false\n"}
{"        break\n"}
{"    if prime: total += 1\n"}
{"  return total\n"}
</div>
<p className="caption">
Note that we only need to iterate until sqrt(i) inside the inner loop.
</p>
This approach works, but is very inefficient, even with our optimization of iterating
until <div className="code"> sqrt(i) </div> inside the inner loop. It takes too long to run
on <div className="code"> N = 100000</div>, let alone our
criteria of <div className="code"> N = 10000000 </div>. Now let's think about why this algorithm
is so inefficient... The above code is starting at 2 and checking <i>every</i> number
until <div className="code">N</div>. Do we really need to
check <div className="code">4, 6, 8, 10, 12,...</div>? We need a way to
mark these multiples of 2, because we know for sure that these are not prime. We also need to
mark the multiples of 3 i.e <div className="code">6, 9, 12, 15, 18,...</div> and
5: <div className="code">10, 15, 20, 25, 30,...</div>, and so on, which
brings us to the efficient algorithm.

<p className="inner-header"> The Sieve of Eratosthenes </p>
It turns out that this is actually an ancient problem and was solved by the Greek
mathematican Eratosthenes thousands of years ago. The
algorithm does exactly what we were doing above: mark each prime number's multiples as composite
so that we are left with only non-composite numbers, i.e the primes, hence the word
'sieve'. Here's the pseudocode for
the algorithm: <br/><br/>

<div class="pseudocode">
{"int countPrimes(int n):\n"}
{"  /* we initalize all values in our array to 1 (prime) and will be setting all composites to 0 */\n"}
{"  primeArray = [1]*n\n"}
{"  for i in range(2, sqrt(n)):\n"}
{"    if primeArray[i] == 1:\n"}
{"      for j in range(i*2, n, i):\n"}
{"        primeArray[j] = 0\n"}
{"  now count all 1's in primeArray[], and return this value\n"}

</div>
<p className="caption">
This algorithm is extremely fast and calculates primes for n = 10000000 in ~2.5 seconds.
</p>

<p className="inner-header"> Further Analysis</p>
So now that we have come up with an efficient algorithm capable of calculating primes up
to <div className="code"> N = 10000000 </div> within
seconds, let's put it to the test and visualize what the distribution of the number of primes up
to N really looks like:<br/><br/>

<div id="image-background2">
<img className="img2"
src={plt}
alt="Plot of countPrimes(n) vs. n"
/>
</div>
<p className="caption"><i> Visualization of n vs. countPrimes(n). </i></p>
The <a href="https://en.wikipedia.org/wiki/Prime_number_theorem"> prime number theorem </a> states
that the distribution of primes is given by the prime-counting
function <div className="code"> π(N) = N/log(n)</div>, which looks very similar to the above, as
expected.
          </p>
      </div>
    </>
  );
}
