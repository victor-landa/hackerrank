// https://www.hackerrank.com/challenges/new-year-chaos/problem

const q = [1, 2, 3, 5, 4, 6, 7, 8];

function minimumBribes(q) {
  console.log(q);
  let bribes = 0;
  let tooChaotic = false;
  for(let i = 0; i < q.length - 1; i++) {
    if(q[i] + 1 === q[i + 1]) {
      console.log(`Correct at ${q[i]}`);
    } else {
      console.log('q[i] + 2', q[i] + 2, '---', 'q[i + 1]', q[i + 1]);
      if(q[i] + 2 === q[i + 1] || q[i] === q[i + 1] + 1) {
        if(q[i] !== q[i + 1] + 1) {
          bribes++;
        }
      } else {
        tooChaotic = true;
      }
    }
  }
  if(tooChaotic) {
    console.log('Too chaotic');
  } else {
    console.log('Bribes', bribes);
  }
}

minimumBribes(q);