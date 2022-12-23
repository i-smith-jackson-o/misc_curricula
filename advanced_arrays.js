for (let i = 0; i <= 3; i++) {
  for (let j = 0; j <= 5; j++){
    console.log(i,j);
  }
}

let dogs = ['bekla','strelka','laika','dezik'];
for (let i = 0; i < dogs.length; i++) {
  let dog1 = dogs[i];
  for (let j = i + 1; j < dogs.length; j++){
    let dog2 = dogs[j];
    console.log(dog1, dog2);
  }
}

function pairsMaker(arr){
  let newArr = [];
  for (let i = 0; i < arr.length; i++){
    for (let j = i+1; j < arr.length; j++){
      newArr.push([arr[i], arr[j]]);
    }
  }
  return newArr;
}
console.log(pairsMaker(['a', 'b', 'c', 'd'])); // =>
// [ [ 'a', 'b' ],
//   [ 'a', 'c' ],
//   [ 'a', 'd' ],
//   [ 'b', 'c' ],
//   [ 'b', 'd' ],
//   [ 'c', 'd' ] ]

console.log(pairsMaker(['Rosemary', 'Alex', 'Connor'])); // =>
// [ [ 'Rosemary', 'Alex' ],
//   [ 'Rosemary', 'Connor' ],
//   [ 'Alex', 'Connor' ] ]


function chunk(array, size) {
  const chunkedArray = [];

  for (let element of array) {
    let last = chunkedArray[chunkedArray.length - 1];

    if (!last || last.length === size) {
      chunkedArray.push(element);
    } else {
      last.push(element);
    }
  }
  return chunkedArray;
}

console.log(chunk([1,2,3,4],2));
console.log(chunk([1,2,3,4,5],2));

function twoSum(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++){
      if (arr[i] + arr[j] == num) {
        return true;
      }
    }
  }
  return false;
}
console.log(twoSum([1, 7, 3, 0, 2], 5)); // true
console.log(twoSum([1, 7, 3, 0, 2], 6)); // false
console.log(twoSum([4, 6, 2, 3], 8)); // true
console.log(twoSum([4, 6, 2, 3], 11)); // false

function pairProduct(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++){
      if (arr[i] * arr[j] == num) {
        return true;
      }
    }
  }
  return false;
}
console.log(pairProduct([4, 2, 5, 8], 16))    // true
console.log(pairProduct([8, 1, 9, 3], 8))     // true
console.log(pairProduct([3, 4], 12))          // true
console.log(pairProduct([3, 4, 6, 2, 5], 12)) // true
console.log(pairProduct([4, 2, 5, 7], 16))    // false
console.log(pairProduct([8, 4, 9, 3], 8))     // false
console.log(pairProduct([3], 12))             // false

function strangeSums(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++){
      if (arr[i] + arr[j] == 0) {
        count++;
      }
    }
  }
  return count;
}
console.log(strangeSums([2, -3, 3, 4, -2]));     // 2
console.log(strangeSums([42, 3, -1, -42]));      // 1
console.log(strangeSums([-5, 5]));               // 1
console.log(strangeSums([19, 6, -3, -20]));      // 0
console.log(strangeSums([9]));                   // 0
console.log("");
function twoDimensionalSum(arr){
  let sum = 0;
  for (let i = 0; i < arr.length; i++){
    for (let j = 0; j < arr[i].length; j++) {
      sum += (arr[i][j]);
    }
  }
  return sum;
}

let arr1 = [
  [1, 3],
  [-4, 7, 10],
  [2]
];
console.log(twoDimensionalSum(arr1)); // 19

let arr2 = [
  [],
  [3, 1, 2],
];
console.log(twoDimensionalSum(arr2)); // 6

function twoDimensionalProduct(arr){
  let product = 1;
  for (let i = 0; i < arr.length; i++){
    for (let j = 0; j < arr[i].length; j++) {
      product *= (arr[i][j]);
    }
  }
  return product;
}

arr1 = [
  [6, 4],
  [5],
  [3, 1]
];
console.log(twoDimensionalProduct(arr1)); // 360

arr2 = [
  [11, 4],
  [2]
];
console.log(twoDimensionalProduct(arr2)); // 88

function maxInMatrix(matrix) {
  let max = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] >= max) {
        max = matrix[i][j];
      }
    }
  }
  return max;
}


matrix = [[11,  2,-99],
          [20, 19, 10],
          [47, 72, 56]]

console.log(maxInMatrix(matrix)); // 72

function maxColumn(matrix) {
  const height = matrix.length;
  const width = matrix[0].length;

  const maxColumns = [];
  for (let col = 0; col < width; col++) {
    let colMax = matrix[0][col];
    for (let row = 1; row < height; row++) {
      if (matrix[row][col] > colMax) {
        colMax = matrix[row][col];
      }
    }
    maxColumns.push(colMax);
  }
  return maxColumns
}


matrix = [[ 5,  9, 21],
          [ 9, 19,  6],
          [12, 14, 15]]

console.log(maxColumn(matrix)); // [12, 19, 21]

function zip(arr1, arr2) {
  let arr = [];
  for (let i = 0; i < arr1.length; i++){
    arr.push(arr1[i],arr2[i]);
  }
  return arr;
}
console.log(zip([1, 2, 3, 4], ['eins', 'zwei', 'drei', 'vier']));
// [ [ 1, 'eins' ], [ 2, 'zwei' ], [ 3, 'drei' ], [ 4, 'vier' ] ]

console.log(zip(['eins', 'zwei', 'drei'], [1, 2, 3]));
// [ [ 'eins', 1 ], [ 'zwei', 2 ], [ 'drei', 3 ] ]

console.log(zip(['alef', 'bet'], ['alpha', 'beta']));
// [ [ 'alef', 'alpha' ], [ 'bet', 'beta' ] ]

function zanyZip(arr1, arr2){
  let zipped = [];
  for (let i = 0; i < arr1.length || i < arr2.length; i++){
    let el1 = arr1[i];
    let el2 = arr2[i];
    if (el1 === undefined) {
      el1 = null;
    }
    if (el2 === undefined) {
      el2 = null;
    }
    zipped.push([el1, el2]);
  }
  return zipped;
}
console.log(zanyZip([1, 2], ['eins', 'zwei', 'drei', 'vier']));
// [ [ 1, 'eins' ], [ 2, 'zwei' ], [ null, 'drei' ], [ null, 'vier' ] ]

console.log(zanyZip([1, 2, 3, 4], ['eins', 'zwei', 'drei']));
// [ [ 1, 'eins' ], [ 2, 'zwei' ], [ 3, 'drei' ], [ 4, null ] ]

console.log(zanyZip(['alef', 'bet'], ['alpha', 'beta']));
// [ [ 'alef', 'alpha' ], [ 'bet', 'beta' ] ]


let matrixA = [[2,5], [4,7]]
let matrixB = [[9,1], [3,0]]
let matrixC = [[-1,0], [0,-1]]
let matrixD = [[2, -5], [7, 10], [0, 1]]
let matrixE = [[0 , 0], [12, 4], [6,  3]]

console.log(matrixAddition(matrixA, matrixB)); // [[11, 6], [7, 7]]
console.log(matrixAddition(matrixA, matrixC)); // [[1, 5], [4, 6]]
console.log(matrixAddition(matrixB, matrixC)); // [[8, 1], [3, -1]]
console.log(matrixAddition(matrixD, matrixE)); // [[2, -5], [19, 14], [6, 4]]
console.log("");

function matrixAddition(m1, m2) {
  let sum = [];
  for (let row = 0; row < m1.length; row++) {
    let subArray = [];
    for (let col = 0; col < m1[0].length; col++) {
      subArray.push(m1[row][col] + m2[row][col]);
    }
    sum.push(subArray);
  }
  return sum;
}

// magic num is min in row and max in col
function luckyNumbers(matrix) {
  let minRow = [], maxCol = [];

  for (let i in matrix){minRow.push(Math.min.apply(null, matrix[i]))}

  for (let i in matrix[0]) {
    let max = 0;
    for (let j in matrix){ if (matrix[j][i] > max) max = matrix[j][i]}

    maxCol.push(max)
  }
  return minRow.filter(n => maxCol.includes(n));
}

matrixF = [[ 5,  9, 21],
          [ 9, 19,  6],
          [12, 14, 15]]

console.log(luckyNumbers(matrixF)); // [12]

matrixG = [[ 5, 10,  8,  6],
          [10,  2,  7,  9],
          [21, 15, 19, 10]]

console.log(luckyNumbers(matrixG)); // [10]
console.log("");

//TODO - 2-d arrays -  pascals triangle
function spiralOrder(m) {
  let rows = m.length,  cols = m[0].length;
  let top = 0; bottom = rows - 1, left = 0, right = cols - 1;
  let dir = 1;
  let newArr = [];

  while (top <= bottom && left <= right) {
    if (dir == 1) { // moving left -> right
      for (let i = left; i <= right; i++) {
        newArr.push(m[top][i]);
      }
      top++;
      dir++;
    }
    else if (dir == 2) { // moving top -> bottom
      for (i = top; i <= bottom; i++) {
        newArr.push(m[i][right]);
      }
      --right;
      dir++;
    }
    else if (dir == 3) { // moving bottom->up
      for (i = right; i >= left; --i) {
        newArr.push(m[bottom][i]);
      }
      --bottom;
      dir++;
    }
    else if (dir == 4) { //moving right-left
        for (i = bottom; i >= top; --i) {
          newArr.push(m[i][left]);
      }
      left++;
      dir = 1;
    }
  }
  return newArr;
}
matrixH = [[ 1, 2, 3],
          [ 4, 5, 6],
          [ 7, 8, 9]]

console.log(spiralOrder(matrixH)); // [1,2,3,6,9,8,7,4,5]

matrixI = [[1, 2, 3, 4],
          [5, 6, 7, 8],
          [9,10,11,12]]


console.log(spiralOrder(matrixI)); // [1,2,3,4,8,12,11,10,9,5,6,7]

matrixJ = [[1,2,3,4,5,6],
           [7,8,9,10,11,12],
           [13,14,15,16,17,18],
           [19,20,21,22,23,24],
           [25,26,27,28,29,30],
           [31,32,33,34,35,36]]

console.log(spiralOrder(matrixJ));

function pyramidArray(base){
  let pyramid = [base];
  while (pyramid.length < base.length) {
    let next = adjacentSums(pyramid[0]);
    pyramid.unshift(next);
  }
  return pyramid;
}

function adjacentSums(arr){
  let sums = [];
  for (let i = 0; i < arr.length - 1; i++) {
    let sum = arr[i] + arr[i+1];
    sums.push(sum);
  }
  return sums;
}


let p1 = pyramidArray([2, 3, 7, 5, 9]);
console.log(p1);
// [
//   [ 85 ],
//   [ 37, 48 ],
//   [ 15, 22, 26 ],
//   [ 5, 10, 12, 14 ],
//   [ 2, 3, 7, 5, 9 ]
// ]

let p2 = pyramidArray([2, 2, 2, 2]);
console.log(p2);
// [
//   [ 16 ],
//   [ 8, 8 ],
//   [ 4, 4, 4 ],
//   [ 2, 2, 2, 2 ]
// ]

function pascalsTriangle(num) {
  return 0;
}
console.log(pascalsTriangle(5));
// [
//     [1],
//     [1, 1],
//     [1, 2, 1],
//     [1, 3, 3, 1],
//     [1, 4, 6, 4, 1]
// ]

console.log(pascalsTriangle(7));
// [
//     [1],
//     [1, 1],
//     [1, 2, 1],
//     [1, 3, 3, 1],
//     [1, 4, 6, 4, 1],
//     [1, 5, 10, 10, 5, 1],
//     [1, 6, 15, 20, 15, 6, 1]
// ]
