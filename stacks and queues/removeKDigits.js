const removeDigits = function(nums, k) {
  if (nums.length === 0) return '0';
  if (k >= nums.length) return '0';
  
  const stack = [nums[0]];
  let toRemove = k;
  let i = 1;
  while (i < nums.length) {
    if (stack[stack.length - 1] > nums[i] && toRemove > 0) {
        stack.pop();
      toRemove--;
      
    } else {
        stack.push(nums[i]);
      i++;
    }
  }
  
  while (toRemove > 0) {
    stack.pop();
    toRemove--;
  }
  
    let s = 0;
    while(stack[s] === '0') s++;
    
    const result = stack.slice(s);
    
    return result.length === 0 ? '0' : result.join('');
};
console.log(removeDigits('1432219', 3)); // 1219
console.log(removeDigits('10200', 1)); // 200