/*

Sorts a list by finding the smallest element in the array and swapping it with 
the current index. Repeating it with the next index

*/


const selectionSort = (values) => {
  for (let i = 0; i < values.length; i++) {
    let currentSmallest = i;
    for (let j = i + 1; j < values.length; j++) {
      if (values[j] < values[currentSmallest]) {
        currentSmallest = j;
      }
    }
    if (currentSmallest !== i) {
      [values[currentSmallest], values[i]] = [values[i], values[currentSmallest]];
    }
  }
  return values;
}

console.log(selectionSort([64, 25, 12, 22, 11]));