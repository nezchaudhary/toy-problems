/*

CTCI - 8.3 - Magic Index - A magic index in an array A[1...n -1] is defined to be an index such that A[i] = i. Gievn a sorted array of distint integers, write a method to find a magic index, if one exists, in array A.

FOLLOW UP
What if the values are not distinct

*/

// Distinct Values

const magicIndexDistinct = values => {
  const magicIndexSearch = (values, low, high) => {
    if (low > high) return -1;

    const mid = Math.floor((low + high) / 2);
    if (values[mid] === mid) {
      return mid;
    } else if (values[mid] > mid) {
      return magicIndexSearch(values, low, mid - 1);
    } else {
      return magicIndexSearch(values, mid + 1, high);
    }
  }
  return magicIndexSearch(values, 0, values.length -1);
}


// Not Distinct Values
const magicIndexNotDistinct = values => {
  const magicIndexSearch = (values, low, high) => {
    if (low > high) return -1;
    const mid = Math.floor((low + high) / 2);

    const midValue = values[mid];
    if (midValue === mid) return mid;

    const leftIndex = Math.min(mid - 1, midValue);
    const left = magicIndexSearch(values, low, leftIndex);
    if (left >= 0) return left;

    const rightIndex = Math.max(mid + 1, midValue);
    const right = magicIndexSearch(values, rightIndex, high);

    return right;
  }

  return magicIndexSearch (values, 0, values.length - 1);
}

console.log('distinct', magicIndexDistinct([-40, -20, -1, 1, 2, 3, 5, 7, 9, 12, 13])); // 7
console.log('not distinct', magicIndexNotDistinct([-10, -5, 2, 2, 2, 3, 4, 7, 9, 12, 13])); // 2
