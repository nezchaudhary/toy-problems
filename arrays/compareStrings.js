/**
 * Write a comparator that takes two strings and returns a standard integer value: 
 *          something negative if the first string is "smaller,"
 *          zero if they are "equal," 
 *          and something positive if the first string is "larger." 
 * We want to agree with the standard comparator for all cases except one: 
 * if we encounter a consecutive string of integers, we want to read it for its numeric value,
 * and use that as the comparison.
 * 
 * For instance, in the standard string comparator, "a10b" comes before "a2b", because 'a' == 'a' and '1' < '2'.
 * In our string ordering, I want to reverse this, instead parsing it so that we see 'a' == 'a', but 10 > 2.
 *
 */

// a10b, a0b => 1
// a, b => -1
// '', '' => 0
// 123, 321 => -1
// a2b, 12 => ??
// ab, a => 1 
// A, a => 1
// a, 65a =>

const checkIsNumber = (str) => {
  return str >= 0 && str <= 9;
}

const accumulateNumber = (str, index) => {
  let value = str[index - 1];
  while (checkIsNumber(str[index])) {
    value += str[index];
    index++;
  }
  return value;
}


const compareString = (s1, s2) => {
  //i: 2 strings
  //o: integer (negative, 0, postitive)
  //e: empty string, differnt type of strings, not a string, differnt lengths
  //c: optimal

  // compare the str lengths. 
  // loop over the larger one
  // compare characters at indexes
  // if they are alphabets, compare
  // if they are equal, we continue
  //index increments
  //
  // else we return whether 1st is smaller or larger
  // if one is an alphabet and one is a number
  //alphabet wins

  let i = 0;
  let j = 0;

  while (i < s1.length && j < s2.length) {
    //variables for characters
    let s1Char = s1[i];
    let s2Char = s2[j];

    //checks only if not equal
    if (s1Char !== s2Char) {

      //check the type first
      let isNumS1Char = checkIsNumber(s1Char);
      let isNumS2Char = checkIsNumber(s2Char);

      //if bother are not numbers
      if (!isNumS1Char && !isNumS2Char) {
        if (s1Char > s2Char) {
          return 1;
        } else if (s2Char > s1Char) {
          return -1;
        }
      } else {
        //if at least one is a number accumulate numbers
        let s1Num = '';
        let s2Num = '';
        if (isNumS1Char) {
          s1Num = accumulateNumber(s1, i + 1);
        }
        if (isNumS2Char) {
          s2Num = accumulateNumber(s2, j + 1);
        }
        if (s1Num > s2Num) {
          return 1;
        } else if (s2Num > s1Num) {
          return -1;
        }
        i += (s1Num - 1);
        j += (s2Num - 1);
      }

    }
    i++;
    j++;

  }
  return 0;
}

console.log(compareString('a10b', 'a0b'));
console.log(compareString('', ''));
console.log(compareString('a', 'b'));
console.log(compareString('123', '321'));
console.log(compareString('a2b', '12'));
