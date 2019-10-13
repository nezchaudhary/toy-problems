

const swap = (arr, i, j) => {
  [arr[i], arr[j]] = [arr[j], arr[i]];
};

const divide = (arr, pivot, left, right) => {
  let pivotValue = arr[pivot];
  let partition = left;

  for (let i = left; i < right; i++) {
    if (arr[i] < pivotValue) {
      swap(arr, i, partition);
      partition++;
    }
  }
  swap(arr, right, partition);
  return partition;
}

const quickSort = (arr, left = 0, right) => {
  let len = arr.length;
  if (right === undefined) right = len - 1;
  let pivot;
  let partition;

  if (left < right) {
    pivot = right;
    partition = divide(arr, pivot, left, right);

    //sort left and right
    quickSort(arr, left, partition - 1);
    quickSort(arr, partition + 1, right);
    
  }
  return arr;
};

console.log(quickSort([3, 5, 2, 8, 2, 4, 6,]));
