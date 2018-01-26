/*
Given a string with only parenthesis, check if input is valid.
  All opening brackets should match the order of of their matching closing bracket
  for e.g. 
    '()[]{}' --> true
    '()( --> false
     '({}) --> true
     '}{ --> false 

*/


const isValidParentheses = (input) => {
  // i: string of parenthesis
  // o: boolean value true or false
  // c: none
  // e: odd length, not a string, other characters in string, empty string

  // return false if length is odd because brackets will not match
  if (input.length % 2 !== 0 || typeof input !== 'string') return false;

  // object that stores valid values and their closing parentheses
  const brackets = {
    '(': ')',
    '{': '}',
    '[': ']',
    ')': 'close',
    '}': 'close',
    ']': 'close'
  }

  //create 2 stacks 1 for open brackets, 1 for close
  let openStack = [];
  let closeStack = [];

  // iterate over string
  for (let parentheses of input) {
    
    //check if value at index is a valid bracket
    if (!brackets[parentheses]) return false;

    //if bracket is open parentheses, push to open, push matching close to closeStack
    if (brackets[parentheses] !== 'close') {
      openStack.push(parentheses);
      closeStack.push(brackets[parentheses]);
    }
    
    // if bracket is close parentheses, check if it matches the expected close (last value) from closeStack
    if (brackets[parentheses] === 'close') {
      let expectedClose = closeStack.pop();
      if (expectedClose !== parentheses) return false; //if it doesn't match, parentheses are invalid
      if (expectedClose === parentheses) openStack.pop(); // if it matches, pop the bracket from open too
    }
  }
  return true;
};

console.log(isValidParentheses('({[]})')); // true
console.log(isValidParentheses('(){}')); // true
console.log(isValidParentheses('([]){}')); // true
console.log(isValidParentheses('()')); // true
console.log(isValidParentheses('({)')); // false
console.log(isValidParentheses('({}]')); // false
console.log(isValidParentheses('({])')); // false
console.log(isValidParentheses('({aa})')); // false
console.log(isValidParentheses('({[a})')); // false
console.log(isValidParentheses('')); // true
console.log(isValidParentheses(')(')); // false
