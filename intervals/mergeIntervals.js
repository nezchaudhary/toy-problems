const mergeIntervals = (times) => {
  let sortedTimes = times.sort((a, b) => {
    if (a.startTime === b.startTime) {
      return a.endTime - b.endTime;
    }
    return a.startTime - b.startTime;
  });

  let result = [];
  let startTime = sortedTimes[0].startTime;
  let endTime = sortedTimes[0].endTime;

  for (let i = 1; i < sortedTimes.length; i++) {
    if (sortedTimes[i].startTime > endTime) {
      result.push({ startTime, endTime });
      startTime = sortedTimes[i].startTime;
      endTime = sortedTimes[i].endTime;
    } else {
      endTime = Math.max(endTime, sortedTimes[i].endTime);
    }
  }
  result.push({ startTime, endTime });
  return result;
};

const intervals = [
  { startTime: 0, endTime: 1},
  { startTime: 3, endTime: 5 },
  { startTime: 4, endTime: 8 },
  { startTime: 10, endTime: 12 },
  { startTime: 9, endTime: 10 },
];

console.log(mergeIntervals(intervals))