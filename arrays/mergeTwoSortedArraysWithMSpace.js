const mergeTwoArraysWithConstantSpace = (arr1, arr2) => {
  // let m = arr1.length;
  // let n = arr2.length;

  // // Iterate through all elements of ar2[] starting from
  // // the last element
  // for (let i = n - 1; i >= 0; i--) {
  //   /* Find the smallest element greater than ar2[i]. Move all
  //      elements one position ahead till the smallest greater
  //      element is not found */
  //   let last = arr1[m - 1];
  //   for (let j = m - 2; j >= 0 && arr1[j] > arr2[j]; j--) {
  //     arr1[j+1] = arr1[j];

  //     // If there was a greater element
  //     if (j != m - 2 || last > arr2[i]) {
  //       arr1[j + 1] = arr2[i];
  //       arr2[i] = last;
  //     }
  //   }
  // }
  // return arr1.concat(arr2);
  let arr1Index = arr1.length - 1;
  let arr2Index = arr2.length - 1;
  while (arr1Index >= 0 && arr2Index >= 0) {
    if (arr1[arr1Index] > arr2[arr2Index]) {
      [arr1[arr1Index], arr2[arr2Index]] = [arr2[arr2Index], arr1[arr1Index]];
      arr2Index--;
    } else {
      arr1Index--;
    }
  }
  console.log('arrrays', arr1, arr2);

  while (arr2Index >= 0) {

  }

  while (arr1Index >= 0) {

  }
}



// shorter array extra space
const mergeTwoArraysWithFixedSpace = (arr1, arr2) => {
  let n = arr1.length;
  let m = arr2.length;
  let arr1LastIndex = arr1.length - 1;
  let arr2LastIndex = arr2.length - 1;
  arr1.length = n + m;
  let lastIndex = arr1.length - 1;

  while (lastIndex >= 0 && arr2LastIndex >= 0) {
    if (arr1[arr1LastIndex] >= arr2[arr2LastIndex]) {
      arr1[lastIndex] = arr1[arr1LastIndex];
      arr1LastIndex--;
    } else {
      arr1[lastIndex] = arr2[arr2LastIndex];
      arr2LastIndex--;
    }
    lastIndex--;
  }

  while (arr1LastIndex >= 0) {
    arr1[lastIndex] = arr1[arr1LastIndex];
    lastIndex--;
    arr1LastIndex--;
  }

  return arr1;
}

// console.log(mergeTwoArraysWithFixedSpace([1, 5, 9, 10, 15, 20], [ 2, 3, 8, 13]));
console.log(mergeTwoArraysWithConstantSpace([1, 5, 9, 10, 15, 20], [2, 3, 8, 13]));
