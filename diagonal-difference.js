// https://www.hackerrank.com/challenges/diagonal-difference/problem

/*
  1 2 3
  4 5 6
  9 8 9

  The left-to-right diagonal = 1 + 5 + 9 = 15
  The right to left diagonal = 3 + 5 + 9 = 17
  Their absolute difference is 15 - 17 = 2
*/

let squareMatrix = [
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 9]
];

function diagonalDifference(arr) {
  let leftToRightDiagonal = 0;
  let rightToLeftDiagonal = 0;
  let absoluteDifference = 0;
  arr.map((node, index) => {
    leftToRightDiagonal += node[index];
    rightToLeftDiagonal += index === 0 ? node[arr.length - 1] : node[arr.length - (index + 1)];
  });

  absoluteDifference = Math.abs(leftToRightDiagonal - rightToLeftDiagonal);
  return absoluteDifference;
}