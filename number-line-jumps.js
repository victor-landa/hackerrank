// https://www.hackerrank.com/challenges/kangaroo/problem

// 2, 1, 1, 2 => YES
// 0, 3, 4, 2 => YES
// 0, 2, 5, 3 => NO
// 14, 4, 98, 2 => YES
// 42, 3, 94, 2 => YES
// 2081, 8403, 9107, 8400 => YES

function kangaroo(x1, v1, x2, v2) {
  console.log(`${v1} ${v2}`);
  console.log(`(${(x2 - x1)}) % (${(v2 - v1)})`);
  if((v1 <= v2) || ((x2 - x1) % (v2 - v1))) {
    return 'NO';
  } else {
    return 'YES';
  }
}