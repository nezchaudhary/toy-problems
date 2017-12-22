/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 * 
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */


var largestProductOfThree = function (array) {
  //i: an array of numbers. could have negative
  //o: product of the largest 3 numbers
  //c: none
  //e: could have negative numbers that should be made positive
  if (array.length < 3) return 'Not enough values';


  //naive solution (n^cube time)
  // let largest;
  // for (let i = 0; i < array.length; i++) {
  // 	for (let j = i+1; j < array.length; j++) {
  // 		for (let k = j+1; k < array.length; k++) {
  // 			if (largest === undefined) {
  // 				largest = array[i] * array[j] * array[k];
  // 			} else {
  // 					let temp = array[i] * array[j] * array[k]
  // 				if (temp > largest) {
  // 					largest = temp;
  // 				}
  // 			}
  // 		}
  // 	}
  // }
  // return largest;

  //sort array and return max between smallest or largest to account for negative
  // let copy = array.sort((a, b) => a - b);
  // let last = copy[copy.length - 1];
  // return Math.max(copy[0] * copy[1] * last, last * copy[copy.length - 2] * copy[copy.length - 3])


  linear time solution
  let maxA = -Infinity, maxB = -Infinity, maxC = -Infinity;
  let minA = Infinity, minB = Infinity;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > maxA) {
      maxC = maxB;
      maxB = maxA;
      maxA = array[i];
    } else if (array[i] > maxB) {
      maxC = maxB;
      maxB = array[i];
    } else if (array[i] > maxC) {
      maxC = array[i];
    }
    if (array[i] < minA) {
      minB = minA;
      minA = array[i];
    } else if (array[i] < minB) {
      minB = array[i];
    }
  }
  return Math.max(minA * minB * maxA, maxA * maxB * maxC);


};
console.log(largestProductOfThree([0, 2, 3])); // 0
console.log(largestProductOfThree([2, 3, 5]));// 30
console.log(largestProductOfThree([7, 5, 3]));// 105
console.log(largestProductOfThree([7, 5, 7]));// 245
console.log(largestProductOfThree([-1, -2, -3, -4, -5, -6])); // -6 
console.log(largestProductOfThree([-31, 41, 34, -37, -17, 29])); //47027
console.log(largestProductOfThree([2, 3, -11, 7, -13])); // 1001
console.log(largestProductOfThree([-2, -1, 3, -7])); //42
console.log(largestProductOfThree([11, 7, 5, 3, 2])); //385