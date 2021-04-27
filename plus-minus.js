// https://www.hackerrank.com/challenges/plus-minus/problem

let arr = [1, 1, 0, -1, -1];

function plusMinus(arr) {
  let positives = 0;
  let negatives = 0;
  let zeros = 0;

  arr.map(node => {
    if(node > 0) {
      positives++;
    } else if(node < 0) {
      negatives++;
    } else {
      zeros++;
    }
  });

  let ratioPositive = positives / arr.length;
  let ratioNegative = negatives / arr.length;
  let ratioZero = zeros / arr.length;

  console.log(`${ratioPositive} \n${ratioNegative} \n${ratioZero}`);
}

plusMinus(arr);