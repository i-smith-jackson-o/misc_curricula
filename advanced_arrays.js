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

function luckyNumbers(m){
  let curMin = Infinity;
  for (let row = 0; row < m.length; row++) {
    for (let col = 0; col < m[0].length; col++){
      if (m[row][col] < curMin) {
        curMin = m[row][col];
      }
    }
  }
  return curMin
}
matrixF = [[ 5,  9, 21],
          [ 9, 19,  6],
          [12, 14, 15]]

console.log(luckyNumbers(matrixF)); // [12]

matrixG = [[ 5, 10,  8,  6],
          [10,  2,  7,  9],
          [21, 15, 19, 10]]

console.log(luckyNumbers(matrixG)); // [10]
