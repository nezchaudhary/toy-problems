const popLastDigit = (time) => {
  return time.slice(0, time.length - 1);
}

const nextClosestTime = (time, validTimes = [], digits = '', currentTime = '') => {
  if (digits.length === 0) digits = time.match(/\d+/g).join('');

  if (currentTime.length === 2) {
    let hour = Number(currentTime);
    if (hour > 23) {
      return;
    }
  }

  if (currentTime.length === 4) {
    let minutes = Number(currentTime.slice(2));
    if (minutes >= 00 && minutes <= 59) {
      validTimes.push(currentTime);
    }
    return;
  }

  for (let i = 0; i < digits.length; i++) {
    currentTime += digits[i];
    nextClosestTime(time, validTimes, digits, currentTime);
    currentTime = popLastDigit(currentTime);
  }

  let largerTimeDifference = Number.POSITIVE_INFINITY;
  let largerTime = '';
  let smallerTimeDifference = Number.NEGATIVE_INFINITY;
  let smallerTime = '';


  for (let i = 0; i < validTimes.length; i++) {
    let difference = Number(validTimes[i]) - Number(digits);
    if (difference < largerTimeDifference && difference > 0) {
      largerTimeDifference = difference;
      largerTime = validTimes[i];
    } else if (Math.abs(difference) > smallerTimeDifference) {
      smallerTimeDifference = Math.abs(difference);
      smallerTime = validTimes[i];
    }
  }
  if (largerTime) return largerTime.slice(0, 2) + ':' + largerTime.slice(2);
  if (smallerTime) return smallerTime.slice(0, 2) + ':' + smallerTime.slice(2);
  return digits;
};

console.log(nextClosestTime('19:34'));
console.log(nextClosestTime('23:59'));