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


const compareString = (str1, str2) => {
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

  let str1Index = 0;
  let str2Index = 0;

  while (str1Index < str1.length && str2Index < str2.length) {
    //variables for characters
    let str1Char = str1[str1Index];
    let str2Char = str2[str2Index];

    //checks only if not equal
    if (str1Char !== str2Char) {

      //check the type first
      let isNumberStr1Char = checkIsNumber(str1Char);
      let isNumberStr2Char = checkIsNumber(str2Char);

      //if bother are not numbers
      if (!isNumberStr1Char && !isNumberStr2Char) {
        if (str1Char > str2Char) {
          return 1;
        } else if (str2Char > str1Char) {
          return -1;
        }
      } else {
        //if at least one is a number accumulate numbers
        let str1Number = '';
        let str2Number = '';
        if (isNumberStr1Char) {
          str1Number = accumulateNumber(str1, str1Index + 1);
        }
        if (isNumberStr2Char) {
          str2Number = accumulateNumber(str2, str2Index + 1);
        }
        if (str1Number > str2Number) {
          return 1;
        } else if (str2Number > str1Number) {
          return -1;
        }
        str1Index += (str1Number - 1);
        str2Index += (str2Number - 1);
      }

    }
    str1Index++;
    str2Index++;

  }
  return 0;
}

console.log(compareString('a10b', 'a0b'));
console.log(compareString('', ''));
console.log(compareString('a', 'b'));
console.log(compareString('123', '321'));
console.log(compareString('a2b', '12'));
