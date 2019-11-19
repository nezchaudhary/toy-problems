/*

Use Case - k Smallest - Use a version of quick sort where if pivot is the kth element, then we found the kth smallest

*/
// Quick Select
// Time Complexity: O log(n)

const kthSmallest = (input, k) => {
  if (k > input.length) {
    console.log('k too large');
    return;
  }

  let result;
  k--;

  const findKSmallest = (input, start, end) => {
    const pivotIndex = Math.floor(input.length / 2);
    const pivot = input[pivotIndex];

    const left = [];
    const right = [];

    input.forEach((val, i) => {
      if (pivotIndex !== i) {
        val <= pivot ? left.push(val) : right.push(val);
      }
    });

    if (start + left.length === k) {
      result = pivot
    } else if (start + left.length > k) {
      findKSmallest(left, start, left.length - 1);
    } else {
      findKSmallest(right, start + left.length + 1, end);
    }
  }

  findKSmallest(input, 0, input.length - 1);
  return result;
};


console.log(kthSmallest([1984, 1337, 9000, 8304, 5150, 9000, 8304], 5));