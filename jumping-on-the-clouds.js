// https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem

let c = [0, 1, 0, 0, 0, 1, 0]; // Must returned 3
// let c = [0, 0, 1, 0, 0, 1, 0]; // Must returned 4

function jumpingOnClouds(c) {
  let jumps = 0;
  let currentCloudIndex = 0;

  while(currentCloudIndex < c.length - 1) {
    if(c[currentCloudIndex + 1] === 0 && c[currentCloudIndex + 2] === 0) {
      currentCloudIndex += 2;
      jumps++;
    } else if(c[currentCloudIndex + 1] === 0 && c[currentCloudIndex + 2] === 1) {
      currentCloudIndex++;
      jumps++;
    } else {
      currentCloudIndex += 2;
      jumps++;
    }
  }
  return jumps;
}

jumpingOnClouds(c);