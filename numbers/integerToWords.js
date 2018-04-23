const numberToWords = function (num) {
  const oneToTwenty = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen', 'Twenty'];
  const tenToHundred = ['', 'Ten', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety', 'Hundred'];
  const thousandToBillion = ['', 'Thousand', 'Million', 'Billion'];

  if (num === 0) return 'Zero';

  let i = 0;
  let englishWords = '';

  const getNumberValue = (num) => {
    if (num == 0)
      return '';
    else if (num < 20)
      return oneToTwenty[num] + ' ';
    else if (num < 100)
      return tenToHundred[Math.floor(num / 10)] + ' ' + getNumberValue(num % 10);
    else
      return oneToTwenty[Math.floor(num / 100)] + " Hundred " + getNumberValue(num % 100);
  }

  while (num > 0) {
    if (Math.floor(num % 1000) != 0) {
      englishWords = getNumberValue(num % 1000) + thousandToBillion[i] + ' ' + englishWords;
    }
    num = Math.floor(num / 1000);
    i++;
  }

  return englishWords.replace(/\s+?$/, '');

};

console.log(numberToWords(123));
console.log(numberToWords(134564323));
console.log(numberToWords(5134564323));
console.log(numberToWords(51340));