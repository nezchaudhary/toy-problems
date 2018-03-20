 /*
 * Write a function that accepts a 2-dimensional array (that is, an array containing many same-length arrays),
 * and prints out every value found, but in a spiral from the upper left in to the center
 * Please write some form of specs, tests, or assertions for your code, and check as many edge 
 cases as you can think of
 *
 * example:

    spiralTraversal([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ]);

    returns [1, 2, 3, 6, 9, 8, 7, 4, 5]
 */

const spiralTraversal = function (matrix) {
	if (matrix.length === 0 || matrix.length === 1) {
		return matrix[0] || [];
	}

	let lastRow = matrix[0].length;
	let lastCol = matrix.length;
	let result = [];
	let row;
	let col = 0;

	const copyRow = () => {
		return result.concat(matrix[col].slice(col, lastRow + 1));
	}
	
	for (col = 0; col <= Math.ceil(matrix.length / 2); col++) {
		row = col;
		lastCol--;
		lastRow--;
		let flippedLastRow = [];

		// check column overlap and if not, get rows
		if (col < lastCol) {
			result = copyRow();
			flippedLastRow = matrix[lastCol].slice(col, lastRow + 1).reverse();
		} else if (col === lastCol) {
			result = copyRow();
		}

		// check row overlap and if not, get columns;
		if (row < lastRow) {
			let tempCol = col + 1;
			let flippedFirstCol = [];
			let column = [];
			while (tempCol < lastCol) {
				column.push(matrix[tempCol][lastRow]);
				flippedFirstCol.push(matrix[tempCol][row]);
				tempCol++;
			}

			result = result.concat(column)
								.concat(flippedLastRow)
								.concat(flippedFirstCol.reverse());

		} else if (row === lastRow && col < lastCol) {
			let innermostCol = col + 1;
			let centerCol = [];
			while (innermostCol <= lastCol) {
				centerCol.push(matrix[innermostCol][lastRow]);
				innermostCol++;
			}
			result = result.concat(centerCol);
		}
	}
	return result;
};


var x = spiralTraversal([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]);

var y = spiralTraversal([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
  [13, 14, 15]
]);

var z = spiralTraversal([
  [1, 2, 3, 20],
  [4, 5, 6, 21],
  [7, 8, 9, 22],
  [10, 11, 12, 23]
]);

var a = spiralTraversal([
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25]
]);

var b = spiralTraversal([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
  [13, 14, 15],
  [16, 17, 18],
  [19, 20, 21],
  [22, 23, 24]
]);

var c = spiralTraversal([[1, 2, 3, 4, 5, 6, 7]]);

var d = spiralTraversal([[[1], [2], [3], [4]]]);

var e = spiralTraversal([
  [2, 5, 8],
  [4, 0, -1]
]);

var f = spiralTraversal([
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
  [31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
  [41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
  [51, 52, 53, 54, 55, 56, 57, 58, 59, 60],
  [61, 62, 63, 64, 65, 66, 67, 68, 69, 70],
  [71, 72, 73, 74, 75, 76, 77, 78, 79, 80],
  [81, 82, 83, 84, 85, 86, 87, 88, 89, 90],
  [91, 92, 93, 94, 95, 96, 97, 98, 99, 100]
]);

var g = spiralTraversal([[1, 2, 3]]);

console.log('x', x, JSON.stringify(x) === JSON.stringify([1, 2, 3, 6, 9, 8, 7, 4, 5]));
console.log('y', y, JSON.stringify(y) === JSON.stringify([1, 2, 3, 6, 9, 12, 15, 14, 13, 10, 7, 4, 5, 8, 11]));
console.log('z', z, JSON.stringify(z) === JSON.stringify([1, 2, 3, 20, 21, 22, 23, 12, 11, 10, 7, 4, 5, 6, 9, 8]));
console.log('a', a, JSON.stringify(a) === JSON.stringify([1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13]));
console.log('b', b, JSON.stringify(b) === JSON.stringify([1, 2, 3, 6, 9, 12, 15, 18, 21, 24, 23, 22, 19, 16, 13, 10, 7, 4, 5, 8, 11, 14, 17, 20]));
console.log('c', c, JSON.stringify(c) === JSON.stringify([1, 2, 3, 4, 5, 6, 7]));
console.log('d', d, JSON.stringify(d) === JSON.stringify([[1], [2], [3], [4]]));
console.log('e', e, JSON.stringify(e) === JSON.stringify([2, 5, 8, -1, 0, 4]));
console.log('f', f, JSON.stringify(f) === JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 99, 98, 97, 96, 95, 94, 93, 92, 91, 81, 71, 61, 51, 41, 31, 21, 11, 12, 13, 14, 15, 16, 17, 18, 19, 29, 39, 49, 59, 69, 79, 89, 88, 87, 86, 85, 84, 83, 82, 72, 62, 52, 42, 32, 22, 23, 24, 25, 26, 27, 28, 38, 48, 58, 68, 78, 77, 76, 75, 74, 73, 63, 53, 43, 33, 34, 35, 36, 37, 47, 57, 67, 66, 65, 64, 54, 44, 45, 46, 56, 55]));
console.log('g', g, JSON.stringify(g) === JSON.stringify([1, 2, 3]));