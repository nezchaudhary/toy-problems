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
      reject('Reject in promise');
    } else {
      resolve('Resolve in promise');
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


/// More possibilities
// Primitive
// function fetch_retry(url, options, n) {
//   return fetch(url, options).catch(function(error) {
//       if (n === 1) throw error;
//       return fetch_retry(url, options, n - 1);
//   });
// }


// // ES6
// const fetch_retry = (url, options, n) => fetch(url, options).catch(function(error) {
//   if (n === 1) throw error;
//   return fetch_retry(url, options, n - 1);
// });

// // ES7
// const fetch_retry = async (url, options, n) => {
//   try {
//       return await fetch(url, options)
//   } catch(err) {
//       if (n === 1) throw err;
//       return await fetch_retry(url, options, n - 1);
//   }
// };

// const fetch_retry = async (url, options, n) => {
//   let error;
//   for (let i = 0; i < n; i++) {
//       try {
//           return await fetch(url, options);
//       } catch (err) {
//           error = err;
//       }
//   }
//   throw error;
// };

