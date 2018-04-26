const debounce = (func, delay) => {
  let inDebounce;
  return function (...args) {
    clearTimeout(inDebounce)
    inDebounce = setTimeout(func.bind(this, ...args), delay);
  }
};

let add = (a, b) => console.log('result', a + b);

let addDebounce = debounce(add, 2000);
console.log('adddebounce', addDebounce);
addDebounce(3, 4);