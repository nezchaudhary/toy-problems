



const swap = (input, i, j) => {
  [input[i], input[j]] = [input[j], input[i]];
};

const divide = (input, pivotIndex, low, high) => {
  const pivot = input[pivotIndex];
  let partition = low;

  for (let i = low; i < high; i++) {
    if (input[i] < pivot) {
      swap(input, i, partition);
      partition++;
    }
  }
  swap(input, high, partition);
  return partition;
}

// In place swaps
const quickSort = (input, low = 0, high) => {
  let len = input.length;
  if (high === undefined) high = len - 1;

  if (low < high) {
    const pivotIndex = high;
    const nextPartition = divide(input, pivotIndex, low, high);

    //sort left and right
    quickSort(input, low, nextPartition - 1);
    quickSort(input, nextPartition + 1, high);
    
  }
  return input;
};


// With some extra space
const quickSortWithSpace = input => {
  if (input.length <= 1) return input;

  const pivotIndex = Math.floor(input.length / 2);

  const pivot = input[pivotIndex];

  const before = [];
  const after = [];

  for (let i = 0; i < input.length; i++) {
    if (pivotIndex !== i) {
      input[i] <= pivot ? before.push(input[i]) : after.push(input[i]);
    }
  }

  const left = quickSortWithSpace(before);
  const right = quickSortWithSpace(after);

  return [...left, pivot, ...right];

}

console.log('in place', quickSort([3, 5, 2, 8, 2, 4, 6,]));
console.log('with space', quickSortWithSpace([3, 5, 2, 8, 2, 4, 6,]));
