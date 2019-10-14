/*

Sorted & Searching
CTCI: 10.4 Sorted Search, No Size

You are given an array like data structure Listy which lacks a size method. It does, however, have an elementAt(i) method that returns the element at index i in O(1) time. If i is beyond the bounds of the data structure, it returns -1. (For this reason, tthe data structure only supports positive integers.) Given a Listy which contains sorted, positive integers, find the index at which an element x occurs. If x occurs multiple times, you may return any index.

*/

// Time Complexity O (log n)
// Keep doubling array until you find -1 or higher value. That way you compute the size of the structure in log in even if you dont know it.

const searchListy = (listy, value) => {
  let index = 1;
  while (listy.elementAt(index) !== -1 && listy.elementAt(index) < value) {
    index *= 2;
  };
  return binarySearch(listy, value, index / 2, index);
}

const binarySearch = (list, value, low, high) => {
  let mid = 0;

  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    let middle = list.elementAt(mid);
    if (middle > value || middle === -1) {
      high = mid - 1;
    } else if (middle < value) {
      low = mid + 1;
    } else {
      return mid;
    }
  }
}