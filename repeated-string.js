// https://www.hackerrank.com/challenges/repeated-string/problem

const s = 'gfcaaaecbg';
const n = 547602;
// const s = 'aab';
// const n = 882787;
// const s = 'aba';
// const n = 10;
// const s = 'a';
// const n = 10000000;

function repeatedString(s, n) {
  let fracNumber = Math.trunc(n / s.length);
  let reminder = n % s.length;
  let counter = 0;
  for(let i = 0; i < s.length; i++) {
    if(s[i] === 'a') {
      counter++;
    }
  }
  counter = counter * fracNumber;
  for(let i = 0; i < reminder; i++) {
    if(s[i] === 'a') {
      counter++;
    }
  }
  return counter;
}

repeatedString(s, n);