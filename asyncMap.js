'use strict';

/* Implement the function asyncMap:
 *
 * asyncMap has two parameters, an array of asynchronous functions (tasks) and a callback.
 * Each of the tasks takes a separate callback and invokes that callback when complete.
 *
 * The callback passed to asyncMap is then performed on the results of the callbacks of the tasks.
 *
 * The order of these results should be the same as the order of the tasks.
 * It is important to note that this is not the order in which the tasks return,
 * but the order in which they are passed to asyncMap.
 *
 * Once all the callbacks of the tasks are returned, asyncMap should invoke the callback
 * on the results array.
 *
 *
 * Example:
 *
 * asyncMap([
 *  function(cb){
 *    setTimeout(function(){
 *      cb('one');
 *    }, 200);
 *  },
 *  function(cb){
 *    setTimeout(function(){
 *      cb('two');
 *    }, 100);
 *  }
 * ],
 *  function(results){
 *    // the results array will equal ['one','two'] even though
 *    // the second function had a shorter timeout.
 *    console.log(results); // ['one', 'two']
 * });
 *
 *
 */


const asyncMap = function (tasks, callback) {
  //i : array of functions called tasks that are asynchronous and
  //a callback to be invoked on the result after all functions have executed synchronously
  // o: output is the result after all functions have run and callback was invoked
  //c: the order of the results needs to be the order of the tasks, not the order in which they return
  //e: none

  // let taskIndex = 0;
  // const resultsArray = [];
  // const cb = (value) => {  
  //   resultsArray.push(value);
  //   if (taskIndex < tasks.length - 1) {
  //     taskIndex++;
  //     tasks[taskIndex](cb);
  //   } else {
  //     callback(resultsArray);
  //   }
  // }
  // tasks[taskIndex](cb);

  Promise.all(tasks.map(task => new Promise(task))).then(values => callback(values));
};

asyncMap([
  function (cb) {
    setTimeout(function () {
      cb('one');
    }, 200);
  },
  function (cb) {
    setTimeout(function () {
      cb('two');
    }, 100);
  }
],
  function (results) {
    console.log(results); // ['one', 'two']
  });