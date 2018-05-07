const negate = (num) => {
  let neg = 0;
  let newSign = num > 0 ? 1 : -1;
  let delta = newSign;
  while (num !== 0) {
    let differentSigns = ((num + delta) > 0) !== (num > 0);
    if (num + delta !== 0 && differentSigns) {
      //if delta is too big, reset it
      delta = newSign;
    }
    neg += delta;
    num -= delta;
    delta += delta;
  }
  return neg;
};

const minus = (num1, num2) => {
  return num1 - negate(num2);
};

console.log(minus(35, 13));