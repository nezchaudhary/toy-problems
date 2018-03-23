/*
You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.

Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.

You are given an API bool isBadVersion(version) which will return whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.

Credits:
Special thanks to @jianchao.li.fighter for adding this problem and creating all test cases.
*/

const solution = (isBadVersion) => {
  const search = (n, low = 1) => {
    if (low > n) {
      return low;
    }

    let midVersion = Math.floor((n + low) / 2);
    if (isBadVersion(midVersion)) {
      if (midVersion - 1 > 0 && !isBadVersion(midVersion - 1)) {
        return midVersion;
      }
      return search(midVersion - 1, low);
    } else {
      return search(n, midVersion + 1);
    }
  }
  return search;
};
