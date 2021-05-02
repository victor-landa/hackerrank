// https://www.hackerrank.com/challenges/time-conversion/problem

// 07:05:45PM => 19:05:45 | 12:01:00AM => 00:01:00 | 07:04:00AM => 07:04:00 | 12:04:00PM => 12:04:00

const time = '12:01:00PM';

function timeConversion(s) {
  const splitTime = s.split(':');
  const splittedHour = splitTime[0];
  let convertedHour;
  if(s.includes('PM')) {
    if(splittedHour == '12') {
      convertedHour = splittedHour;
    } else {
      convertedHour = parseInt(splittedHour) + 12;
    }
  } else {
    if(splittedHour == '12') {
      convertedHour = '00';
    } else {
      convertedHour = splittedHour;
    }
  }

  return `${convertedHour}:${splitTime[1]}:${splitTime[2].replace('PM', '').replace('AM', '')}`;
}