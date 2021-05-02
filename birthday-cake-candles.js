// https://www.hackerrank.com/challenges/birthday-cake-candles/problem

const candles = [4, 4, 1, 3];

function birthdayCakeCandles(candles) {
  let maxCandleHeight = candles[0];
  let repeatedTallestCandle = 0;

  for(let i = 0; i < candles.length; i++) {
    if(candles[i] > maxCandleHeight) {
      maxCandleHeight = candles[i];
    }
  }

  for(let i = 0; i < candles.length; i++) {
    if(maxCandleHeight === candles[i]) {
      repeatedTallestCandle++;
    }
  }

  if(repeatedTallestCandle == 0) {
    return 1;
  } else {
    return repeatedTallestCandle;
  }
}

const result = birthdayCakeCandles(candles2);