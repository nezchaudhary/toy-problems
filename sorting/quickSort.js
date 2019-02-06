const swap = (items, firstIndex, secondIndex) => {
  [items[firstIndex], items[secondIndex]] = [items[secondIndex], items[firstIndex]];
};

const partition = (arr, pivot, left, right) => {
  let pivotValue = arr[pivot];
  let partitionIndex = left;

  for (let i = left; i < right; i++) {
    if (arr[i] < pivotValue) {
      swap(arr, i, partitionIndex);
      partitionIndex++;
    }
  }
  swap(arr, right, partitionIndex);
  return partitionIndex;
}

const quickSort = (arr, left = 0, right) => {
  let len = arr.length;
  if (right === undefined) right = len - 1;
  let pivot;
  let partitionIndex;

  if (left < right) {
    pivot = right;
    partitionIndex = partition(arr, pivot, left, right);

  //sort left and right
  quickSort(arr, left, partitionIndex - 1);
  quickSort(arr, partitionIndex + 1, right);
  }
  return arr;
};

console.log(quickSort([3, 5, 2, 8, 2, 4, 6,]));
