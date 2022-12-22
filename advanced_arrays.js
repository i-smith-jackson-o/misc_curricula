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

}


matrix = [[11,  2,-99],
          [20, 19, 10],
          [47, 72, 56]]

console.log(maxInMatrix(matrix)); // 72
