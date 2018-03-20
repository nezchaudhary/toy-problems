/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
  const v1Values = version1.split('.');
  const v2Values = version2.split('.');
  const maxLength = Math.max(v1Values.length, v2Values.length);

  for (let i = 0; i < maxLength; i++) {
    let num1 = Number(v1Values[i]) || 0;
    let num2 = Number(v2Values[i]) || 0;
    if (num1 < num2) return -1;
    if (num1 > num2) return 1;
  }
  return 0;
};

