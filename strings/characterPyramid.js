/* 

Write a function that produces a "pyramid", :
Given input of 3 and character 'X', it should produce a pyramid conceptually like this:

  X
 XXX
XXXXX
However the exact return format should be more abstract, in the form of nested arrays:


*/

const characterPyramid = (height, character) => {
  // i: a number representing the height of the pyramid and the character that would make the pyramid
  // o: a pyramid of character that was the input
  // c: none
  // e: height is 0, character is undefined;

  if (height === 0 || !character) return '';

  let width = (height * 2) - 1;
  let midpoint = Math.floor(width/2);
  let left = midpoint - 1;
  let right = midpoint + 1;

  let pyramid = '';
  const topRow = new Array(width).fill(' ');
  topRow[midpoint] = character;
  let lastRow = topRow;
  pyramid += (topRow.join('')) + '\n';
  
  for (let i = 1; i < height; i++) {
    const nextRow = lastRow.slice();
    nextRow[left] = character;
    nextRow[right] = character;
    left--;
    right++;
    pyramid += (nextRow.join('') + '\n');
    lastRow = nextRow;
  }
  return pyramid;
};

console.log(characterPyramid(3, 'X'));
console.log(characterPyramid(5, 'Y'));



