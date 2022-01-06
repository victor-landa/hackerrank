// https://www.hackerrank.com/challenges/sock-merchant/problem

const socks = 7;
const socksArray = [1, 2, 1, 2, 1, 3, 2];
// There is one pair of color 1
// There is one pair of color 2

function sockMerchant(n, ar) {
  let pairs = 0;
  let checkedSocks = [];
  for(let i = 0; i < n; i++) {
    let currentSock = ar[i];
    if(!checkedSocks.includes(currentSock)) {
      let matchedSocks = 0;
      checkedSocks.push(currentSock);
      for(let j = 0; j < n; j++) {
        if(currentSock === ar[j]) {
          matchedSocks++;
        }
      }
      pairs += Math.floor(matchedSocks / 2);
    }
  }
  return pairs;
}

sockMerchant(socks, socksArray);