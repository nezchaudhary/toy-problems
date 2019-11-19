/*
Implement a basic calculator to evaluate a simple expression string.

The expression string may contain open ( and closing parentheses ), the plus + or minus sign -, non-negative integers and empty spaces .

Example 1:

Input: "1 + 1"
Output: 2
Example 2:

Input: " 2-1 + 2 "
Output: 3
Example 3:

Input: "(1+(4+5+2)-3)+(6+8)"
Output: 23
Note:
You may assume that the given expression is always valid.
Do not use the eval built-in library function.
*/

/**
 * @param {string} s
 * @return {number}
 */
const isNumber = x => {
  return !Number.isNaN(parseInt(x));
};

const accumulateNumber = (str, i) => {
  let j = i;
  let result = '';
  while (isNumber(str[j])) {
    result += str[j];
    j++;
  }
  return result;
}

const processNum = (a, b, o) => {
  if (o === '+') {
    return a + b;
  } else if (o === '-') {
    return a - b;   
  }
  return b;
};



var calculate = function(s) {
  // stack for operation
  // stack for value
  const numStack = [];
  const operandStack = [];
  let operand = 0;
  let result = 0;
  let curr = '';
  let i = 0;
  
  while (i < s.length) {
    const char = s[i];
    if (s[i] === ' ') {
      i++;
      continue;
    } else if (isNumber(char)) {
      curr = accumulateNumber(s, i);
      i += curr.length;
      result = processNum(result, parseInt(curr), operand);
      curr = '';
      operand = '';
    }  else if (char === '+' || char === '-') {
      operand = char;
      i++;
    } else if ( char === '(') {
      if (operand) {
        numStack.push(result);
        operandStack.push(operand);
        operand = '';
        result = 0;
      }
      i++;
    } else if (char === ')') {
      if (numStack.length > 0) {
        result = processNum(numStack.pop(), result, operandStack.pop());
      }
      i++;
    }
  }
  
  while (numStack.length > 0) {
    result = process(numStack.pop(), result, operandStack.pop());    
  }
  
  return result;
  
};

console.log(calculate(" 2-1 + 2 "));