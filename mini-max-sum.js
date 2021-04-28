// https://www.hackerrank.com/challenges/mini-max-sum/problem

const arr1 = [1, 3, 5, 7, 9];
const arr2 = [7, 69, 2, 221, 8974];
const arr3 = [1, 2, 3, 4, 5];
const arr4 = [5, 5, 5, 5, 5];

function miniMaxSum(arr) {
  let sumsArr = [];

  for(let i = 0; i < arr.length; i++) {
    let sum = 0;
    for(let j = 0; j < arr.length; j++) {
      if(i !== j) {
        sum += arr[j];
      }
    }
    sumsArr.push(sum);
  }

  let minSum = Math.min(...sumsArr);
  let maxSum = Math.max(...sumsArr);

  console.log(`${minSum} ${maxSum}`);
}

miniMaxSum(arr4);