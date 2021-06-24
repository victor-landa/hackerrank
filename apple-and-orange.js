// https://www.hackerrank.com/challenges/apple-and-orange/problem

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let applesCount = 0;
  let orangesCount = 0;
  const fallenApples = [];
  const fallenOranges = [];
  apples.map(apple => fallenApples.push(a + apple));
  oranges.map(orange => fallenOranges.push(b + orange));
  fallenApples.map(apple => apple >= s && apple <= t ? applesCount ++ : null);
  fallenOranges.map(orange => orange >= s && orange <= t ? orangesCount ++ : null);
  console.log(`${applesCount}\n${orangesCount}`);
}

countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]);