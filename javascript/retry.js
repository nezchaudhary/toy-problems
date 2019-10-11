// Given a function f that has callbacks success and error, write a function retry that that calls the function f n times.
const success = val => {
  console.log('this was success', val);
} 

const error = val => {
  console.log('this was an error', val);
}

let j = 0;

const f = (...values) => {
  console.log('values are', ...values);
  return new Promise((resolve, reject) => {
    if (j < 6) {
      j++;
      reject('Testing');
    } else {
      resolve('hello');
    }
  });
}

const retry = (n, func, sCB, eCB) => {
  let i = 1;
  const attemptFetch = (...values) => {
    func(...values).then(res => {
      sCB(res)
    }).catch(err => {
      console.log('I came to reject', err);
      if (i < n) {
        i++;
        attemptFetch(...values)
      } else {
        eCB(err);
      }
    });
  }
  return attemptFetch;
}

const retry_f = retry(5, f, success, error);