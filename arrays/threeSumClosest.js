/*

Given an array nums of n integers and an integer target, find three integers in nums such that the sum is closest to target. Return the sum of the three integers. You may assume that each input would have exactly one solution.

Example:

Given array nums = [-1, 2, 1, -4], and target = 1.

The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

*/

// Two Pointer Trick
const threeSumClosest = (nums, target) => {
  if (!nums) return -1;
  if (nums.length < 3) return -1;

  const sortedList = nums.sort((a, b) => a - b); // n(log n)

  let minDiff = Math.abs(nums[0] + nums[1] + nums[2] - target);
  let sum = nums[0] + nums[1] + nums[2];
  for (let i = 0; i < sortedList.length; i++ ) { // O (n)
    // if i is the same as the previous i value, keep moving to avoid duplicate sets
    if (i !== 0 && sortedList[i] === sortedList[i - 1]) continue;
    let j = i + 1;
    let k = sortedList.length - 1;

    while (j < k) { // O (k)

      const diff = sortedList[i] + sortedList[j] + sortedList[k] - target; 
      if (diff === 0) return target;
      if (Math.abs(diff) < minDiff) {
        minDiff = Math.abs(diff);
        sum = sortedList[i] + sortedList[j] + sortedList[k];
      }

      // when you found a match, keep moving j as long as its a duplicate to avoid a duplicate subset
      while (j < k && sortedList[j] === sortedList[j - 1]) { // O (l)
        j++;
      } 

      while(j < k && k < sortedList.length - 1 && sortedList[k] === sortedList[k + 1]){
        k--;
      } 

      if (j === k) break;
      if (diff < 0)  {
        j++;
      } else {
        k--;
      }
    }
  }
  return sum;
};

console.log('three sum closest', threeSumClosest([-1, 2, 1, -4], 1)); // 2
console.log('three sum closest', threeSumClosest([0, 0, 0], 1)); // 0
console.log('three sum closest', threeSumClosest([1,1,1,0], 100)) // 3