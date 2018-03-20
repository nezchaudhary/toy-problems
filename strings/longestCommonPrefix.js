/*
You are given an array of strings.
You must return the longest common prefix shared among all strings 
in the array. 
*/

const longestCommonPrefix = (list) => {
  //i: array of strings
  //o: longest common prefix (a string);
  //c: none I can see
  //e: no common prefix or empty array -> return empty string, invalid input
  
  //check for empty array
  if (list.length === 0) return '';

  // initialize constant variables
  let shortestLength = Number.POSITIVE_INFINITY;
  let foundShortestLength = false;
  let pointer = 0;
  let isMatch = true;

  // nested loop iterating over list to check for match
  while (pointer <= shortestLength && isMatch) {
    for (let index = 0; index < list.length - 1; index++) {

      //find the shortest length if not found
      if (!foundShortestLength) {
        if (list[index].length < shortestLength) {
          shortestLength = list[index].length;
        }
      }

      //check if the current value matches the next value
      if (list[index][pointer] === list[index + 1][pointer]) {
        continue;
      } else {
        isMatch = false;
        break;
      }
    }

    //once we found shortest length, we do not need to compute that again
    foundShortestLength = true;

    //increment pointer
    pointer++;
  }

  //return a copy of the prefix value from the first string in the array;
  return list[0].slice(0, pointer - 1);
}

console.log(longestCommonPrefix(['aaabb', 'aabb', 'aacc'])) // 'aa';
console.log(longestCommonPrefix(['aaa', 'aaabb', 'aaacc'])) // 'aaa';
console.log(longestCommonPrefix(['a', 'b', 'c'])) // '';

/*
  Transformation Steps 
  ['aaabb', 'aabb', 'aacc'] --> 'aa' (a string)
  
  we will keep track of the current index that will match for each value
  ['aaabb', 'aabb', 'aacc'] -->  ['aabb', 'aacc', 'aaabb'] // sort by making a copy if you cannot mutate
  ['aabb', 'aacc', 'aaabb'] // index 0 would be a match
  ['aabb', 'aacc', 'aaabb'] // index 1 would be a match
  ['aabb', 'aacc', 'aaabb'] // index 2 would fail at second value
  make a copy of the first string in the array until the index that matched
  
  const  longestCommonPrefix = (list, pointer) => {
    have a pointer representing index starting at 0 of the first word
    get shortest length string value because prefix match cannot be larger than that
    find shortest length in the first iteration when checking for matches value at pointer
    iterate over the array to check if all values at that index match
    if yes, move pointer to next value
    iterate over array again until pointer reaches the same length as shortest word or match fails
    make a copy of the first word until the pointer value 
    return the copied word.
    iteration is a O(m*n) operation where m represents the length of the shortest string
    n represents the number of values in the array.
  }
  
 */




