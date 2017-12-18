const arrayLeftRotation = (arr, num) => {
  // mutation of array
  // constant position look up but shift causes a shift for all values
  // while (num > 0) {
  //   let value = arr.shift();
  //   arr.push(value);
  //   num--;
  // }
  // return arr;

  // use space to optimize for time and create copies of previous array to return a new one.
  return arr.slice(num).concat(arr.slice(0, num)).join(' ');
  
}

console.log(arrayLeftRotation([1, 2, 3, 4, 5], 2));
console.log(arrayLeftRotation([1, 2, 3, 4, 5], 1));