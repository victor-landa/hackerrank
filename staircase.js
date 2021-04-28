// https://www.hackerrank.com/challenges/staircase/problem

/*
   # => loop 1 => 4 - 1 = 3
  ## => loop 2 => 4 - 2 = 2
 ### => loop 3 => 4 - 3 = 1
#### => loop 4 => 4 - 4 = 0
*/

const size = 4;

function staircase(n) {
  let printedStaircase = '';

  for(let i = 1; i <= n; i++) {
    let spaces = n - i;
    let hash = n - spaces;
    for(let j = 1; j <= spaces; j++){
      printedStaircase += ' ';
    }
    for(let k = 1; k <= hash; k++) {
      printedStaircase += '#';
    }
    printedStaircase += '\n';
  }

  console.log(printedStaircase);
}

staircase(size);