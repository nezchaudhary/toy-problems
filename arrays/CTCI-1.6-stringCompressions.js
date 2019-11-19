/*

String Compression
CTCI: 1.6
Implement a method to perform basic string compression using the counts of repeated characters. For e.g. the string 'aabcccccaaa' would become 'a2b1c5a3'. If the 'compressed' string would not become smaller than the original string, your method should return the original string. You can assume the string has only uppercase and lowercase characters (a-z);

*/

const countCompression = str => {
  let compressedLength = 0;
  let consecutiveLength = 0;

  for (let i = 0; i < str.length; i++) {
    consecutiveLength++;
    if (i + 1 > str.length || str[i] !== str[i + 1]) {
      compressedLength += (1 + String(consecutiveLength).length);
      consecutiveLength = 0;
    }
  }
  return compressedLength;
}

const stringCompression = (str) => {
  if (str.length === 0) return str;
  // count the compressed length;
  const compressedLength = countCompression(str);
  if (compressedLength > str.length) return str;
  let result = '';
  let consecutiveCount = 1;
  let i = 1;
  let char = str[0];
  while (i < str.length) {
    if (str[i] === char) {
      consecutiveCount++;
    } else {
      result += `${char}${consecutiveCount}`;
      char = str[i];
      consecutiveCount = 1;
    }
    i++;
  }
  result += `${char}${consecutiveCount}`;
  return result;
}

console.log('string compression', stringCompression('aabcccccaaa'));
console.log('string compression', stringCompression('aabccccca'));
console.log('string compression', stringCompression('abca'));