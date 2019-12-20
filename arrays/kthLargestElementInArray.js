/*

Find the kth largest element in an unsorted array. Note that it is the kth largest element in the sorted order, not the kth distinct element.
For example,
Given [3,2,1,5,6,4] and k = 2, return 5.

Note:
You may assume k is always valid, 1 ≤ k ≤ array's length.

*/

const swap = (nums, i, j) => {
  if(i == j) return;
  [nums[i], nums[j]] = [nums[j], nums[i]];
}

// quick select 84 ms
var findKthLargestQuickSelect = (nums, k) => {
  const getPartition = nums => {
    let partition = -1;
    let curr = 0;
    let pivot = nums[nums.length - 1];
    
    while(curr < nums.length - 1) {
      if(nums[curr] <= pivot) {
        partition++;
        swap(nums, partition, curr);
      }
      curr++;
    }
    swap(nums, partition + 1, curr);
    return partition + 1;
  }

  while(true) {
    let partition = getPartition(nums);
    if(nums.length - partition === k) {
      return nums[partition];
    } else if(nums.length - partition > k) {
      nums = nums.slice(partition + 1);
    } else {
      k = k - (nums.length - partition);
      nums = nums.slice(0, partition);
    }
  }
};

// heap sort 64 ms
const findKthLargestHeapSort = (nums, k) => {

  const heapify = (arr, root, max) => {
    let toSwapIdx;
    let leftChildIdx;
    let rightChildIdx;
  
    while(root < max) {
      toSwapIdx = root;
      leftChildIdx = 2 * root + 1;
      rightChildIdx = 2 * root + 2;
      if(leftChildIdx < max && arr[root] < arr[leftChildIdx]) {
        toSwapIdx = leftChildIdx;
      }
  
      if(rightChildIdx < max && arr[toSwapIdx] < arr[rightChildIdx]) {
        toSwapIdx = rightChildIdx;
      }
  
      if(root == toSwapIdx) return;
  
      swap(arr, toSwapIdx, root);
      root = toSwapIdx;
    }
  }

	const size = nums.length;
	let i =  Math.floor(size / 2 - 1);
	while(i >= 0) {
		heapify(nums, i, size);
		i--;
	}

	let loop = size - 1;
	while(loop > size - 1 - k) {
		swap(nums, 0, loop);
		heapify(nums, 0, loop);
		loop--;
	}
	return nums[nums.length - k];
};

// max heap 148 ms
var findKthLargestMaxHeap = function(nums, k) {

  const heapify = (arr, root, max) => {
    let toSwapIdx;
    let leftChildIdx;
    let rightChildIdx;
  
    while(root < max) {
      toSwapIdx = root;
      leftChildIdx = 2 * root + 1;
      rightChildIdx = 2 * root + 2;
      if(leftChildIdx < max && arr[root] < arr[leftChildIdx]) {
        toSwapIdx = leftChildIdx;
      }
  
      if(rightChildIdx < max && arr[toSwapIdx] < arr[rightChildIdx]) {
        toSwapIdx = rightChildIdx;
      }
  
      if(root == toSwapIdx) return;
  
      swap(arr, toSwapIdx, root);
      root = toSwapIdx;
    }
  }

  const buildMaxHeap = (nums) => {
    const size = nums.length;
    let i =  Math.floor(size / 2 - 1);
    while(i >= 0) {
      heapify(nums, i, size);
      i--;
    }
  }

  buildMaxHeap(nums);
	while(k > 1) {
		nums.shift();
		buildMaxHeap(nums);
		k--;
	}

	return nums[0];
};

// min heap 84 ms
var findKthLargestMinHeap = function(nums, k) {
  let minHeap = Array(k).fill(Number.NEGATIVE_INFINITY);


  const heapify = (arr, root, max) => {
    let toSwapIdx;
    let leftChildIdx;
    let rightChildIdx;

    while(root < max) {
      toSwapIdx = root;
      leftChildIdx = 2 * root + 1;
      rightChildIdx = 2 * root + 2;
      if(leftChildIdx < max && arr[root] > arr[leftChildIdx]) {
        toSwapIdx = leftChildIdx;
      }

      if(rightChildIdx < max && arr[toSwapIdx] > arr[rightChildIdx]) {
        toSwapIdx = rightChildIdx;
      }

      if(root == toSwapIdx) return;

      swap(arr, toSwapIdx, root);
      root = toSwapIdx;
    }
  }

  for(let i = 0; i < nums.length; i++) {
    if(nums[i] > minHeap[0]) {
      minHeap[0] = nums[i];
      heapify(minHeap, 0, k);
    }
  }

	return minHeap[0];
};

// console.log(findKthLargest([1], 1)); // 1
// console.log(findKthLargest([2, 1], 2)); // 1
// console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)); // 4

// console.log(kLargestMinHeap([1], 1)); // 1
// console.log(kLargestMinHeap([2, 1], 2)); // 1
// console.log(kLargestMinHeap([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)); // 

console.log(findKthLargestQuickSelect([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)) // 4