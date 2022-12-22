/*
Write a function that takes a location, either
"FRONT" or "BACK" and adds an element to either
the front or back of the given array. If location
is anything besides "FRONT" or "BACK", print an error.
Your function should not return anything and should
mutate the original array. (Hint: Look up the
  JavaScript functions: push/pop/shift/unshift)
*/
function addToArray(location, element, arr){
  if (location[0] === "F") {
    arr.unshift(element);
  } else if(location[0] === "B") {
    arr.push(element);
  } else {
    console.log("ERROR");
  }
}

testArray = [1,2,3]

addToArray("FRONT", 0, testArray)
console.log(testArray) // [0,1,2,3]

addToArray("BACK", 4, testArray)
console.log(testArray) // [0,1,2,3,4]

addToArray("MIDDLE", 4, testArray) // "ERROR"
console.log(testArray) // [0,1,2,3,4]

/*
Write a function range(min, max) that takes in two numbers.
The function should return an array containing all numbers
from min to max inclusive.
Define this function using function expression syntax.
*/
function range(min, max){
  let arr = [];
  for (let i = min; i <= max; i++) {
    arr.push(i);
  }
  return arr;
}

console.log(range(3, 10)); // [ 3, 4, 5, 6, 7, 8, 9, 10 ]
console.log(range(217, 220)); // [ 217, 218, 219, 220 ]
console.log(range(-5, 1)); // [ -5, -4, -3, -2, -1, 0, 1 ]
console.log(range(10, 3)); // []

/*
Write a function evenNumbers(max) that takes in a number as
an arg. The function should return an array containing all
positive, even numbers that are less than max.
*/
function evenNumbers(max){
  let arr = [];
  for (let i = 0; i < max; i++) {
    if (i % 2 == 0){
      arr.push(i);
    }
  }
  return arr;
}
console.log(evenNumbers(7)); // [ 2, 4, 6 ]
console.log(evenNumbers(12)); // [ 2, 4, 6, 8, 10 ]
console.log(evenNumbers(15)); // [ 2, 4, 6, 8, 10, 12, 14 ]

/*
Write a function logBetweenStepper(min, max, step) that
takes in 3 numbers as parameters. The function should print
out numbers between min and max at step intervals. See the
following examples.

Hint: this function only needs to print using console.
log it does not need to return.
*/
let logBetweenStepper = function(min, max, step){
  for (let i = min; i <= max; i += step) {
    console.log(i);
  }
}
logBetweenStepper(5, 9, 1);
logBetweenStepper(-10, 15, 5);

/*
Write a function factorsOf(num) that takes in a number
as an arg. The method should return an array containing
all positive numbers that are able to divide into num
with no remainder.

Define this function using function expression syntax.
*/
let factorsOf = function(num) {
  let arr = [];
  for (let i = 0; i <= num; i++) {
    if (num % i == 0) {
      arr.push(i);
    }
  }
  return arr;
}


console.log(factorsOf(5)); // [ 1, 5 ]
console.log(factorsOf(8)); // [ 1, 2, 4, 8 ]
console.log(factorsOf(9)); // [ 1, 3, 9 ]
console.log(factorsOf(10)); // [ 1, 2, 5, 10 ]
console.log(factorsOf(24)); // [ 1, 2, 3, 4, 6, 8, 12, 24 ]
console.log(factorsOf(2017)); // [ 1, 2017 ]

/*
Write a function fizzBuzz(max) that accepts a number as an
arg. The function should return an array containing all
positive numbers less than max that are divisible by either
3 or 5, but not both.
*/
let fizzBuzz = function(num) {
  let arr = [];

  for (let i = 1; i < num; i++) {
    if (i % 3 == 0 && i % 5 !== 0){
      arr.push(i);
    } else if (i % 3 !== 0 && i % 5 == 0){
      arr.push(i);
    }
  }
  return arr;
}
console.log(fizzBuzz(12)); // [ 3, 5, 6, 9, 10 ]
console.log(fizzBuzz(20)); // [ 3, 5, 6, 9, 10, 12, 18 ]

function getFibs(num) {
	let arr = [];
	let n2 = 1, nextTerm;

	for (let i = 1; i < num; ) {
		arr.push(i);
		nextTerm = i + n2;
		i = n2;
		n2 = nextTerm;
	}
	return arr;
}

function sumFibs(num){
  let sum = 0;
  let fibs = getFibs(num);

  for (let i = 0; i < fibs.length; i++) {
    if (fibs[i] % 2 == 0){
      sum += fibs[i];
    }
  }
  return sum;
}

console.log(getFibs(10));
console.log(sumFibs(4000000)) //4613732

function pitPat(max) {
  let arr = [];
  for (let i = 0; i <= max; i++) {
    if (i % 4 == 0 && i % 6 !== 0){
    arr.push(i);
    } else if (i % 4 !== 0 && i % 6 == 0) {
    arr.push(i);
    }
  }
  return arr;
}

console.log(pitPat(18)); // 4,6,8,16,18
console.log(pitPat(30)); // 4, 6, 8, 16, 18, 20, 28, 30

function doubleSequence(b, l) {
  let arr = [];

  for (let i = 0; i < l ; i++ ) {
    arr.push(b);
    b *= 2;
  }
  return arr;
}

console.log(doubleSequence(7, 3));  // [7, 14, 28]
console.log(doubleSequence(3, 5));  // [3, 6, 12, 24, 48]
console.log(doubleSequence(5, 3));  // [5, 10, 20]
console.log(doubleSequence(5, 4));  // [5, 10, 20, 40]
console.log(doubleSequence(5, 0));  // [ ]

function tripleSequence(b, l) {
  let arr = [];

  for (let i = 0; i < l ; i++ ) {
    arr.push(b);
    b *= 3;
  }
  return arr;
}

console.log(tripleSequence(2,4)); // [2,6,18,54]
console.log(tripleSequence(4, 5)); // [4, 12, 36, 108, 324]

function unique(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++){
    if (newArr.includes(arr[i])) {
      continue;
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
console.log(unique([1, 1, 2, 3, 3])); // [1, 2, 3]
console.log(unique([11, 7, 8, 10, 8, 7, 7])); // [11, 7, 8, 10]
console.log(unique(['a', 'b', 'c', 'b'])); // ['a', 'b', 'c']

function yeller(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++){
    let str = arr[i].toUpperCase();
    newArr.push(str);
  }
  return newArr;
}

console.log(yeller(['hello', 'world'])); // [ 'HELLO!', 'WORLD!' ]
console.log(yeller(['kiwi', 'orange', 'mango'])); // [ 'KIWI!', 'ORANGE!', 'MANGO!' ]

function tripler(nums) {
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    arr.push(nums[i] * 3);
  }
  return arr;
}

console.log(tripler([2, 7, 4])); // [ 6, 21, 12 ]
console.log(tripler([-5, 10, 0, 11])); // [ -15, 30, 0, 33 ]

function longWords(words) {
  let arr = [];

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > 5) {
      arr.push(words[i]);
    }
  }
  return arr;
}

console.log(longWords(['bike', 'skateboard','scooter', 'moped'])); // [ 'skateboard', 'scooter' ]
console.log(longWords(['couscous', 'soup', 'ceviche', 'solyanka' ,'taco'])); // [ 'couscous', 'ceviche', 'solyanka' ]


function chooseyEndings(words, suffix) {
  let newArr = [];

  for (let i = 0; i < words.length; i++) {
    if (words[i].endsWith(suffix)) {
      newArr.push(words[i]);
    }
  }
  return newArr;
}

console.log(chooseyEndings(['family', 'hound', 'catalyst','fly', 'timidly', 'bond'], 'ly'));
// [ 'family', 'fly', 'timidly' ]

console.log(chooseyEndings(['family', 'hound', 'catalyst','fly', 'timidly', 'bond'], 'nd'));
// [ 'hound', 'bond' ]

console.log(chooseyEndings(['simplicity', 'computer', 'felicity'], 'icity'));
// [ 'simplicity', 'felicity' ]

console.log(chooseyEndings(['simplicity', 'computer', 'felicity'], 'ily'));
// [ ]

console.log(chooseyEndings(17, 'ily'));
// [ ]

function commonFactors(a,b){
  let max;
  let factorArr = [];
  if (a > b) {
    max = a;
  } else {
    max = b;
  }

  for (let i = 1; i < max; i++) {
    if (a % i == 0 && b % i == 0){
      factorArr.push(i)
    }
  }
  return factorArr;
}

console.log(commonFactors(50, 30));            // [1, 2, 5, 10]
console.log(commonFactors(8, 4));              // [1, 2, 4]
console.log(commonFactors(4, 8));              // [1, 2, 4]
console.log(commonFactors(12, 24));            // [1, 2, 3, 4, 6, 12]
console.log(commonFactors(22, 44));            // [1, 2, 11, 22]
console.log(commonFactors(7, 9));              // [1]
console.log("the file is tOO GOTDAMNG BIG");
console.log("\n\n");
console.log('ACH!!');

function adjacentSums(arr){
  let newArr = [];

  for (let i = 1; i <= arr.length-1; i++){
    newArr.push(arr[i-1]+ arr[i]);
  }
  return newArr;
}

console.log(adjacentSums([3, 8, 7, 1]));        // [ 11, 15, 8 ]
console.log(adjacentSums([10, 5, 4, 3, 9]));    // [ 15, 9, 7, 12 ]
console.log(adjacentSums([2, -3, 3]));          // [-1, 0]


function fibonacciSequence(num) {
  let arr = [];
  let n1 = 1, n2 = 1, nextTerm;

  for (let i = 0; i < num; i++ ) {
      arr.push(n1);
      nextTerm = n1 + n2;
      n1 = n2
      n2 = nextTerm;
  }
  return arr;
  d
}



console.log(fibonacciSequence(4));  // [ 1, 1, 2, 3 ]
console.log(fibonacciSequence(5));  // [ 1, 1, 2, 3, 5 ]
console.log(fibonacciSequence(8));  // [ 1, 1, 2, 3, 5, 8, 13, 21 ]
console.log(fibonacciSequence(0));  // [ ]
console.log(fibonacciSequence(1));  // [ 1 ]
console.log(fibonacciSequence(2));  // [ 1, 1 ]

function isPrime(n) {
  for (let i = 2; i < n; i += 1) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
function pickPrimes(arr){
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (isPrime(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(pickPrimes([2, 3, 4, 5, 6]));  // [2, 3, 5]
console.log(pickPrimes([101, 20, 103, 2017]));  // [101, 103, 2017]

function isEven(n){
  if (n % 2 == 0){
    return true;
  }
  else {
    return false;
  }
}

function greatestFactorArray(arr){
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      newArr.push(arr[i] / 2);
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(greatestFactorArray([30, 3, 24, 21, 10])); // [15, 3, 12, 21, 5]
console.log(greatestFactorArray([16, 7, 9, 14])); // [8, 7, 9, 7]
console.log('');
function getSummation(num) {
  sum = 0;
  for (let i = 0; i <= num; i++) {
    sum += i;
  }
  return sum;
}
console.log(getSummation(3));

function summationSequence(start, length) {
  let newArr = [];
  newArr.push(start);

  for (let i = 0; i < length -1; i++) {
    newArr.push(getSummation(newArr[i]));
  }
  return newArr;
}

console.log(summationSequence(3, 4)); // [3, 6, 21, 231]
console.log(summationSequence(5, 3)); // [5, 15, 120]
