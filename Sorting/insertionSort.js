/**
 * Insertion sort is a basic sorting algorithm.
 *
 * Insertion sort iterates over an array, growing a sorted array behind the current location.
 * It takes each element from the input and finds the spot, up to the current point,
 * where that element belongs. It does this until it gets to the end of the array.
 *
 * Insertion sort should be implemented as a stable sort. This means that equal elements
 * should retain their relative order. Numbers, as primitives, give us no way to check this,
 * so we'll be sorting objects with a value field, on which they will be sorted, like so:
 *
 * `[{value: 10}, {value: 5, order: 1}, {value: 5, order: 2}]`
 *
 * A stable sort must return `{value: 5, order: 1}, {value:5, order: 2}` in that order.
 *
 * ---
 *
 * EXTRA CREDIT:
 *
 * Refactor your sort to (optionally) take an explicit comparator function
 * as its second argument, so that callers can define arbitrary ways to sort elements.
 * See [Array.prototype.sort](http://devdocs.io/javascript/global_objects/array/sort)
 * for an example of how this works (excerpt below):
 *
 * > If `comparator(a, b)` is less than `0`, sort `a` to a lower index than `b`, i.e. `a` comes first.
 * > If `comparator(a, b)` returns `0`, leave `a` and `b` unchanged with respect to each other, but sorted with respect to all different elements.
 * > If `comparator(a, b)` is greater than `0`, sort `b` to a lower index than `a`.
 *
 * If no comparator is given, just sort the elements using `<` or `>`.
 **/

// Example usage:
// insertionSort([{value: 2}, {value: 1}, {value: 3}]);
// yields [{value: 1}, {value: 2}, {value: 3}]

// This function is to help you test, and should not be incorporated in your solution.
// It will transform an array of numbers into an array of valid objects.
var testingTransform = function (array) {
  var transform = [];

  for (var i = 0; i < array.length; i++) {
    transform.push({ value: array[i], i: i });
  }

  return transform;
};

const defaultComparator = (a, b) => {
  if (typeof a === 'object' && typeof b === 'object' 
    && a.value !== undefined && b.value !== undefined) {
    return a.value > b.value
  }
  return a > b;
};

// var insertionSort = function (array, comparator = defaultComparator, index = 0) {
//   //maybe keep track of the indexes with the value
//   //as you check values you will replace values based on where they belong
//   //if the value is the same, they stay where they are
//   for (index; index < array.length - 1; index++) {
//     if (comparator(array[index], array[index + 1]) > 0) {
//       [array[index], array[index + 1]] = [array[index + 1], array[index]];
//       insertionSort(array, comparator, index - 1);
//     } 
//   }
//   return array;
// };

const insertionSort = inputArr => {
  let length = inputArr.length;
  for (let i = 1; i < length; i++) {
    let key = inputArr[i];
    let j = i - 1;
    while (j >= 0 && inputArr[j] > key) {
      inputArr[j + 1] = inputArr[j];
      j = j - 1;
    }
    inputArr[j + 1] = key;
  }
  return inputArr;
};

console.log(insertionSort([2, 3, 6,4, 2, 8, 5]));

const insertionSort = input => {
  for (let i = 0; i < input.length; i++) {
    let temp = input[i];
    let pointer = i;
    while (pointer > 0 && temp < input[pointer - 1]) {
      input[pointer] = input[pointer - 1];
      pointer--;
    }
    input[pointer] = temp;
  }
  return input;
}

// console.log(insertionSort([{ value: 2 }, { value: 1 }, { value: 3 }]));
// console.log(insertionSort([{ value: 4 }, { value: 1 }, { value: 3 }, { value: 2 }]));
// let a = testingTransform([4, 1, 3, 3]);
// console.log('testingTransform', a);
// console.log(insertionSort(a));
// console.log(insertionSort(testingTransform([1, 100, 2, 43, 21])));
// var b = testingTransform([5, 4, 3]);
// console.log(insertionSort(b));
// var c = testingTransform([1, 2, 3]);
// console.log(insertionSort(c));
// var e = testingTransform([0, 1, 'a', ';', [], {}, undefined, null]);
// console.log(insertionSort(e));
