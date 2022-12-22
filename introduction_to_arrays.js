let alphabet = [
  "a", "b", "c", "d", "e", "f",
  "g", "h", "i", "j", "k", "l",
  "m", "n", "o", "p", "q", "r",
  "s", "t", "u", "v", "w", "x",
  "y", "z"
];

console.log([4,7,9].length);
console.log([1,2].length);

console.log(['a','b','c'][0]);
console.log(['a','b','c'][1]);
console.log(['a','b','c'][2]);
console.log(['a','b','c'][3]);

console.log([1,2,3,'apple','jet'].indexOf(3)); // 1
console.log([1,2,3,'apple','jet'].indexOf(5)); // 2
console.log([1,2,3,'apple','jet'].indexOf('jet')); // 4

// this wont be found in the array
console.log([1,2,3,'apple','jet'].indexOf('potato')); // -1

console.log([1,2,3] + [4,5,6]); //1,2,34,56
console.log([1,2,3].concat([4,5,6])); // 1,2,3,4,5,6

function wordWithinArray(array, word) {
  index = array.indexOf(word);
  if (index > -1) {
    return true;
  } else {
    return false;
  }
}

console.log(
  wordWithinArray(["apple", "banana", "caramel", "chocolate"], "apple")
); //=> true

console.log(wordWithinArray(
  ["dog", "cat", "camel", "bird"], "camel")
); //=> true

console.log(
  wordWithinArray(["apple", "banana", "caramel", "chocolate"], "pineapple")
); //=> false

console.log(wordWithinArray(
  ["dog", "cat", "camel", "bird"], "panther")
); //=> false

function firstAndLast(arr) {
  if (arr.length % 2 == 0 ) {
    return (arr[0] + arr[arr.length-1]);
  } else {
    return (arr[0] - arr[arr.length-1]);
  }
}
console.log(firstAndLast([1, 2, 3, 4]));    // 5
console.log(firstAndLast([1, 2, 3, 4, 5])); // -4
console.log(firstAndLast([12, 5]));         // 17
console.log(firstAndLast([12]));            // 0
console.log(firstAndLast([7, 11, 3]));      // 4

function combineArray(arr1, arr2) {
  let newArr = arr1.concat(arr2);
  return newArr;
}

console.log(combineArray([1, 2], [3, 4])); // => [1, 2, 3, 4]
console.log(combineArray([17, 5], [6, 7]));  // => [17, 5, 6, 7]

function threeIncreasing(arr){
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] + 1 === arr[i+1] && arr[i+1] + 1 === arr[i+2]){
      return true;
    }
  }
  return false;
}

console.log(threeIncreasing([3, 2, 11, 12, 13, 2, 4]));     // true
console.log(threeIncreasing([2, 7, 8, 9]));                 // true
console.log(threeIncreasing([7, 2, 4, 5, 2, 1, 6]));        // false
console.log(threeIncreasing([1, 2, 4, 5, 2, 7, 8]));        // false

function myIncludes(arr, target) {
  if (arr.indexOf(target) >= 0) {
    return true;
  } else {
    return false;
  }
}
console.log(myIncludes(['a', 'b', 'c', 'e'], 'c')); // true
console.log(myIncludes(['a', 'b', 'c', 'e'], 'a')); // true
console.log(myIncludes(['a', 'b', 'c', 'e'], 'z')); // false
console.log(myIncludes([43, -7, 11, 13], 11)); // true
console.log(myIncludes([43, -7, 11, 13], 1)); // false

function myIndexOf(arr, target) {
  if (arr.includes(target) == 1) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i]==target){
        return i;
      }
    }
  }
  return -1;
}
console.log(myIndexOf(['a', 'b', 'c', 'e'], 'c')); // 2
console.log(myIndexOf(['a', 'b', 'c', 'e'], 'e')); // 3
console.log(myIndexOf(['a', 'b', 'c', 'e'], 'z')); // -1
console.log(myIndexOf([43, -7, 11, 13, 43], 43)); // 0
console.log(myIndexOf([43, -7, 11, 13], 1)); // -1

function sumArray(arr){
  let sum = 0;
  for (let i = 0; i < arr.length; i++){
    let num = arr[i];
    sum += num;
  }
  return sum;
}

console.log(sumArray([5,6,4])); // 15
console.log(sumArray([7,3,9,11])); // 30

function producewithreduce(nums) {
  let product = 1;
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    product *= num;
  }
  return product;
}
console.log(producewithreduce([10,3,5,2])); //300
console.log(producewithreduce([4,3])); //12

function doubler(numbers) {
  let arr = [];
  for (let i = 0; i < numbers.length; i++){
    let num = numbers[i]; ;
    arr.push(num*2);
  }
  return arr;
}

console.log(doubler([1,2,3,4])); //[2,4,6,8]
console.log(doubler([7,1,8])); //[14,2,16]
