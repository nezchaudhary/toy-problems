/*
Bucket sort is very useful for evenly distributed value in a range. For e.g - if the range is 0 to 10, it will work well for unsorted values that are spread out across the whole range. If the values fall within a subrange of the full range, its still faster than insertion sort but not as efficient as a uniformly distributed range. This makes sense considering many of the values fall within the same range of sorting.

Bucket sort takes additional auxiliary space

*/

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

const bucketSort = input => {

  const placeIntoBuckets = (input, low, high) => {
    const buckets = [[], [], [], [], [], [], [], [], [], []];
    const division = Math.floor((high - low) / 10);

    for (let i = 0; i < input.length; i++) {
      buckets[Math.floor(input[i] / division)].push(input[i]);
    }

    for (let i = 0; i < buckets.length; i++) {
      if (buckets[i].length > 1) {
        buckets[i] = insertionSort(buckets[i]);
      }
    }

    const result = [];
    buckets.forEach(bucket => {
      result.push(...bucket);
    })
    return result;
  }

  return placeIntoBuckets(input, 0, 1000); // range can be arbitrary. We need to know what that would be before hand
}

console.log(bucketSort([40, 20, 7, 53, 89, 64, 32, 91, 67, 12]));

