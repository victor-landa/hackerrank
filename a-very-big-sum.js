// https://www.hackerrank.com/challenges/a-very-big-sum/problem

const numbersArray = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];

function aVeryBigSum(ar) {
  let sum = BigInt(0);
  ar.map(node => {
    sum += BigInt(node);
  });

  return sum;
}