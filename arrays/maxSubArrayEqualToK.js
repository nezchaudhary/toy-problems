/*
Given an array nums and a target value k, find the maximum length of a subarray that sums to k.
 If there isn't one, return 0 instead.

Note:
The sum of the entire nums array is guaranteed to fit within the 32-bit signed integer range.

Example 1:
Given nums = [1, -1, 5, -2, 3], k = 3,
return 4. (because the subarray [1, -1, 5, -2] sums to 3 and is the longest)

Example 2:
Given nums = [-2, -1, 2, 1], k = 1,
return 2. (because the subarray [-1, 2] sums to 1 and is the longest)

Follow Up:
Can you do it in O(n) time?
*/


const maxSubArrayLen = (nums, k) => {

    let max = 0;
    for (let i = 0; i < nums.length; i++) {
        let currentSum = 0;
        for (let j = i; j < nums.length && nums.length - i >= max; j++) {
        currentSum += nums[j];
            if (currentSum === k) {
              if ((j - i)+ 1 > max) {
                max = (j - i) + 1; 
              }
            }
        }
    }
    return max;
    
    
};


console.log(maxSubArrayLen([-1], -1)); // 1
console.log(maxSubArrayLen([-2, -1, 2, 1], 1)); // 2
console.log(maxSubArrayLen([0, 0], 0)); // 2
console.log(maxSubArrayLen([-2,1,-3,4,-1,2,1,-5,4], 0)); // 4
