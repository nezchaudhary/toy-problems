/*


Check if two given strings are isomorphic to each other

*/


const areStringsIsomorphic = (str1, str2) => {
  if (str1.length !== str2.length) return false;
  const n = 256;

  const marked = new Array(n).fill(false);
  const map = new Array(n).fill(-1);

  for (let i = 0; i < n; i++) {
    if (map[str1.charCodeAt(i)] === -1) {
      if (marked[str2.charCodeAt(i)] === true) {
        return false;
      }

      marked[str2.charCodeAt(i)] = true;
      map[str1.charCodeAt(i)] = str2[i]; 

    } else if (map[str1.charCodeAt(i)] !== str2[i]) {
      return false;
    }
  }
  return true;
}

console.log(areStringsIsomorphic('aab', 'xxy')); // true
console.log(areStringsIsomorphic('aab', 'xyz')); // false