/*
 * Find the first item that occurs an even number of times in an array.
 * Remember to handle multiple even-occurrence items and return the first one. 
 * Return null if there are no even-occurrence items.
*/

/*
 * example usage:
 * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); //  4
*/

var evenOccurrence = (arr) => {
  //i: input is an array of values
  //o: the first value that appeared even number of times
  //c: none
  //e: none
  let table = {};
  for (let value of arr) {
    table[value] ? table[value]++ : table[value] = 1;
  }

  for (let value of arr) {
    if (table[value] % 2 === 0) {
      return value;
    }
  }
  return null;
};

console.log(evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4])) // 4
console.log(evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 6])) // null
console.log(evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 6, 5])) // 5
console.log(evenOccurrence([5, 5, 2, 2, 2, 2])) // 5