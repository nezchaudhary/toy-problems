function sayHello() {
  console.log('Hello, World');
}

sayHello();

// click 'run'

// Throttle
/*
wait = 1000
a = 500
b = 700
cb = 1700

c = 1800

cb = 2800
*/


const throttle = function (func, time) {
  const startTime = Date.now();
  
  let resetTime;
  return function () {
    if (Date.now() < startTime + time) {
      clearTimeout(resetTime);
      resetTime = setTimeout(() => {
        func();
      }, time);
    }

    if (!resetTime) {
      resetTime = setTimeout(() => {
        func();
      }, time);
    }
  }
}

//return a function
//when function is called, start timer
// if setTimeout is not set, set for execution
// if function is called again within that time.. reset time

const sendAjax = throttle(sayHello, 1000);
sendAjax();
sendAjax();
setTimeout(() => {
  sendAjax();
}, 300);
setTimeout(() => {
  sendAjax();
}, 2000);
setTimeout(() => {
  sendAjax();
}, 2000);
