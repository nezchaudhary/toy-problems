/*

Debouncing enforces that a function not be called again until a certain amount of time has passed 
without it being called. As in "execute this function only if 100 milliseconds have passed without 
it being called."
*/


const debounce = (func, delay) => {
  let inDebounce;
  return function (...args) {
    clearTimeout(inDebounce);
    inDebounce = setTimeout(() => {
      inDebounce = null;
      func.call(this, ...args);
    }, delay);
  }
};

let add = (a, b) => console.log('result', a + b);

let addDebounce = debounce(add, 2000);
console.log('adddebounce', addDebounce);
addDebounce(3, 4);
addDebounce(3, 4);
addDebounce(3, 4);
addDebounce(3, 4);
addDebounce(3, 4);
addDebounce(3, 4);