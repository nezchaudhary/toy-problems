/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // 3
 * var index = binarySearch([1, 2, 3, 4, 5], 8);
 * console.log(index); // null
 */

const binarySearch = (array, target) => {
  //i: an array
  //o: the index of the value passed in
  //c: use binary search log(n) time
  //e:
  let low = 0;
  let high = array.length - 1;
  let midpoint = Math.floor((high + low) / 2);

  while (array[midpoint] !== target && low < high) {
    if (target < array[midpoint]) {
      high = midpoint - 1;
    } else if (target > array[midpoint]) {
      low = midpoint + 1;
    }
    midpoint = Math.floor((high + low) / 2);
  }

  return (array[midpoint] !== target) ? null : midpoint;
}


console.log(binarySearch([1, 2, 3, 4, 5], 4)); //3
console.log(binarySearch([1, 2, 3, 4, 5], 8)) //null;
console.log(binarySearch([1, 2, 3, 4, 5], 2)); // 1

