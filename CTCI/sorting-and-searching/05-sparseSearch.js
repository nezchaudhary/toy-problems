/*

Sorting & Searching
CTCI: 10.5 Sparse Search: Given a sorted array of strings that is interspersed with empty strings, write a method to find the location of a given string.

EXAMPLE: 
Input: ball, ['at', '', '', '', 'ball', '', '', '', 'car', '', '', 'dad', '', ''];
Output: 4
*/

// Worst Time Complexity is O(n) if all values are empty strings
// think about how to handle empty strings. What if the input is an empty string?

const compareStr = (a, b) => {
  let i = 0;
  let j = 0;

  while (i < a.length && j < b.length) {
    if (a[i] < b[j]) {
      return -1;
    } else if (a[i] > b[j]) {
      return 1;
    }

    i++;
    j++;
  }

  if (i < a.length) {
    return 1;
  } else {
    return -1;
  }
} 

const search = (arr, target, first, last) => {
  if (first > last) {
    return -1;
  }

  let mid = Math.floor((last + first) / 2);

  if (arr[mid] === '') {
    let left = mid - 1;
    let right = mid + 1;

    while (true) {
      if (left < first && right > last) {
        return -1;
      } else if (right <= last && arr[right] !== '') {
        mid = right;
        break;
      } else if (left >= first && arr[left] !== '') {
        mid = left;
        break;
      }
      right++;
      left--;
    }
  }

  if (arr[mid] === target) {
    return mid;
  } else if (compareStr(arr[mid], target) < 0) {
    return search(arr, target, mid + 1, last);
  } else {
    return search(arr, target, first, mid - 1);
  }
};

const findString = (arr, target) => {
  if (arr === null || arr.length === 0 || target === '' || !target) {
    return -1;
  }
  return search(arr, target, 0, arr.length - 1);
}

console.log(findString(['at', '', '', '', 'ball', '', '', '', 'car', '', '', 'dad', '', ''], 'ball')) // 4