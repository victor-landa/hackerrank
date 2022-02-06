const arr = [1, 2, 3, 3]; // [2] = 3
// const arr = [1, 2, 3, 4, 6] // [3] = 4

function balancedSum(arr) {
  let total = arr.reduce((a, b) => a + b);
  let leftSum = 0;
  for(let i = 0; i < arr.length; i++) {
    total = total - arr[i];
    if(leftSum === total) {
      return i;
    }
    leftSum = leftSum + arr[i];
  }
}


balancedSum(arr);