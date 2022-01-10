// https://www.hackerrank.com/challenges/ctci-array-left-rotation/problem

const a = [1, 2, 3, 4, 5, 6, 7, 8]; // Result: [5, 6, 7, 8, 1, 2, 3, 4]
const d = 4;

function rotLeft(a, d) {
  let rotatedArray = a.slice(d).concat(a.slice(0, d));
  return rotatedArray;
}

rotLeft(a, d);