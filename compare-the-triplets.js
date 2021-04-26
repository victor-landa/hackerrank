// https://www.hackerrank.com/challenges/compare-the-triplets/problem

const a = [17, 28, 30];
const b = [99, 16, 8];

function compareTriplets(a, b) {
  let aScore = 0;
  let bScore = 0;

  a.map((node, index) => {
    if(node > b[index]) {
      aScore++;
    } else if(node < b[index]) {
      bScore++;
    }
  });

  return [aScore, bScore];
}

compareTriplets(a, b);