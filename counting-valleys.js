// https://www.hackerrank.com/challenges/counting-valleys/problem

let steps = 8;
let path = 'UDDDUDUU';

function countingValleys(steps, path) {
  let chars = path.split('');
  let traceStatus = 0;
  let valleys = 0;
  for(let i = 0; i < steps; i++) {
    if(chars[i] === 'U') {
      traceStatus++;
    } else if(chars[i] === 'D') {
      if(traceStatus === 0) {
        valleys++;
      }
      traceStatus--;
    };
  }
  return valleys;
}

countingValleys(steps, path);