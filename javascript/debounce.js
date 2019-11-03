const debounce = function (func, time) {
  let resetTime;
  return function (...args) {
    clearTimeout(resetTime);
    resetTime = setTimeout(() => {
      func.call(this, ...args);
    }, time);
  }
};