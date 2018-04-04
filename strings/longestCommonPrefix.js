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
  
  //edge cases
  if (list.length === 0) return '';
  if (list.length === 1) return list[0];
  
  // initialize constant variables
  let shortestLength = Number.POSITIVE_INFINITY;

  // find the length of the shortest word
  for (let word = 0; word < list.length; word++) {
    if (list[word].length < shortestLength) shortestLength = list[word].length;
  }

  let character = 0;
  let isMatch = true;


  // nested loop iterating over list to check for match
  while (character <= shortestLength && isMatch) {
    for (let word = 0; word < list.length - 1; word++) {

      //check if the current value matches the next value
      if (list[word][character] !== list[word + 1][character]) {
        isMatch = false;
        break;
      }
    }

    //increment pointer
    character++;
  }

  //return a copy of the prefix value from the first string in the array;
  return list[0].slice(0, character - 1);
}

console.log(longestCommonPrefix(['aaabb', 'aabb', 'aacc'])) // 'aa';
console.log(longestCommonPrefix(['aaa', 'aaabb', 'aaacc'])) // 'aaa';
console.log(longestCommonPrefix(['a', 'b', 'c'])) // '';
console.log(longestCommonPrefix(['c', 'c'])) // 'c';

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




