

// var array_length;
/* to create MAX  array */
const heapRoot = (input, i, len) => {
  const left = 2 * i + 1;
  const right = 2 * i + 2;
  let max = i;

  if (left < len && input[left] > input[max]) {
    max = left;
  }

  if (right < len && input[right] > input[max]) {
    max = right;
  }

  if (max != i) {
    swap(input, i, max);
    heapRoot(input, max);
  }
}

const swap = (input, i, j) => {
  [input[i], input[j]] = [input[j], input[i]];
}

const heapSort = input => {
  let arrayLength = input.length;
  
  // start at back
  for (let i = Math.floor(arrayLength / 2); i >= 0; i -= 1) {
    heapRoot(input, i, arrayLength);
  }

  for (i = arrayLength - 1; i > 0; i--) {
    swap(input, 0, i);
    arrayLength--;
    heapRoot(input, 0, arrayLength);
  }
}

const arr = [3, 0, 2, 5, -1, 4, 1];
console.log('unsorted', arr);
heapSort(arr);
console.log('sorted', arr);