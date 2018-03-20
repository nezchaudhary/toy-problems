/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   [["rock", "rock", "rock"],
*    ["rock", "rock", "paper"],
*    ["rock", "rock", "scissors"],
*    ["rock", "paper", "rock"],
             ...etc...
     ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
* Example:
* rockPaperScissors(5); // => [['rock', 'rock', 'rock', 'rock', 'rock'], etc...]
*
*/

var rockPaperScissors = function (n = 3) {
  //o: an array of arrays with all combinations of possibilities for rock scissor paper in 3 rounds
  //i: a number of rounds to consider
  //c: 
  //e: if input is negative or zero
  var result = [];
  var values = ['rock', 'paper', 'scissors'];
  var temp = new Array(n);
  var loop = function (count, arr) {
    if (count === n) {
      return;
    }
    for (var i = 0; i < values.length; i++) {
      arr[count] = values[i];
      if (count === n - 1) {
        result.push(arr.slice());
      }

      loop(count + 1, arr);
    }
  };

  loop(0, temp);
  return result;
};
//result [[1], [2], [3]];
//result [ [1, 1], [1, 2], [1, 3], [2, 2], [2, 3], [2, 1], [3, 3], [3, 1], [3, 2] ];
//result [ [1, 1, 1], [1, 2, 1], [1, 3, 1], [2, 2, 1], [2, 3, 1], [2, 1, 1], [3, 3, 1], [3, 1, 1], [3, 2, 1] ];
//result [ [1, 1, 1, 1], [1, 2, 1, 1], [1, 3, 1, 1], [2, 2, 1, 1], [2, 3, 1, 1], [2, 1, 1, 1], [3, 3, 1, 1], [3, 1, 1, 1], [3, 2, 1, 1] ];

var output = rockPaperScissors(5);

console.log(output);
