// Helper function
function yellStr(str){
  let upperString = str.toUpperCase();
  return upperString + '!';
}

// main yell function takes in array and yells each word using helper
function yelledStrings(strings){
  let yelled = [];

  for (let i = 0; i < strings.length; i++){
    let string = strings[i];
    let newString = yellStr(string);
    yelled.push(newString);
  }
  return yelled;
}

console.log(yelledStrings(['what','does','the','fox','say']));

function isPrime(n) {
  for (let i = 2; i < n; i += 1) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function laligateSum(n){
  let sum = 0;

  for (let i = 2; i <= n; i += 1) {
    if (isPrime(i)) { //if i is prime
      sum += i;       //add it to sum;
    }
  }

  return sum;
}

console.log(laligateSum(10)); //17
console.log(laligateSum(11)); //28

let isEven = function(num) {
  return num % 2 == 0;
};

console.log(isEven(10));
console.log(isEven(11));

let extractEvens = function(numbers){
  let evens = [];

  for (let i = 0; i < numbers.length; i++) {
    let num = numbers[i];
    // if num is even push to evens array
    if (isEven(num)){
      evens.push(num);
    }
  }
  return evens;
}

console.log(extractEvens([3,5,4,7,8])); // 4,8


let b = function() {
  console.log('starting b');
  console.log('ending b');
}

let a = function() {
  console.log('starting a');

  b()

  console.log('ending a')
}

a();


let pickPrimes = function(nums) {
  let primes = [];

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    // if the number is prime

    if (isPrime(num)) {
      primes.push(num);
    }
  }

  return primes;
}

console.log(pickPrimes([4,7,5,12]));
console.log(pickPrimes([31,25,9,16,51]));

function nextPrime(num) {
  for (let i = num+1; ; i++) {
    if (isPrime(i)) {
      return i;
    }
  }
}

console.log(nextPrime(2)); // 3
console.log(nextPrime(3)); // 5
console.log(nextPrime(7)); // 11
console.log(nextPrime(20)); // 23
console.log(nextPrime(97)); // 101
console.log('')


function primeFactors(num) {
  let factors = [];
  for (let i = 2; i <= num; i++) {
    if (isPrime(i) && (num % i == 0)) {
      factors.push(i);
    }
  }
  return factors;
}
console.log(primeFactors(12));  // [2, 3]
console.log(primeFactors(7));   // [7]
console.log(primeFactors(16));  // [2]
console.log(primeFactors(30));  // [2, 3, 5]
console.log(primeFactors(35));  // [5, 7]
console.log(primeFactors(49));  // [7]
console.log(primeFactors(128)); // [2]

/*
Write a function isAntiPrime that accepts a number as an argument.
The method should return true if the given number has more divisors
than all positive numbers less than the given number. For example,
24 is an anti-prime because it has more divisors than any positive
number less than 24.
*/
function numDivisors(num) {
  let count = 0;
  for (let i = 0; i < num; i++) {
    if (num % i == 0){
      count++;
    }
  }
  return count;
}

function isAntiPrime(num) {
  let divisors = [];
  for (let i = 0; i <= num; i++) {
    let num = numDivisors(i);
    divisors.push(num);
  }
  if (Math.max(...divisors) == divisors[divisors.length-1]) {
    return true;
  } else {
    return false;
  }
}

console.log(numDivisors(24));
console.log(isAntiPrime(24)); // true
console.log(isAntiPrime(36));  // true
console.log(isAntiPrime(48));   // true
console.log(isAntiPrime(360));  // true
console.log(isAntiPrime(1260)); // true
console.log(isAntiPrime(27));   // false
console.log(isAntiPrime(5));    // false
console.log(isAntiPrime(100));  // false
console.log(isAntiPrime(136));  // false
console.log(isAntiPrime(1024)); // false


function countVowels(str) {
  let vowels = 'aeiou';
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
}

function mostVowels(sentence) {
  let words = sentence.split(' ');
  let largest = 0;

  for (let j = 0; j < words.length; j++) {
    if (countVowels(words[j]) > largest) {
      largest = j;
    }
  }
  return words[largest];
}

console.log('');
console.log(mostVowels('what a wonderful life.'));
function getSum(nums) {
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    sum += num;
  }
  return sum;
}

function allElseEqual(arr) {
  let sum = getSum(arr);
  let half = sum / 2;

  if (arr.includes(half)) {
    return half;
  } else {
    return null;
  }
}

console.log(allElseEqual([2, 4, 3, 10, 1])); // 10
console.log(allElseEqual([6, 3, 5, -9, 1])); // 3
console.log(allElseEqual([1, 2, 3, 4]));     // null

function doubletTrue(str){
  for (let i = 0; i < str.length - 1; i++){
    if (str[i] === str[i+1]) {
      return true;
    }
  }
  return false;
}

function hasDoubleLetter(str){
  if (typeof(str) !== 'string') {
    return null;
  } else if (doubletTrue(str)) {
    return true;
  }
  return false;
}

console.log(hasDoubleLetter('deer'));
console.log(hasDoubleLetter('boot camp')); // true
console.log(hasDoubleLetter('toggle')); // true
console.log(hasDoubleLetter('taco')); // false
console.log(hasDoubleLetter('jumper')); // false
console.log(hasDoubleLetter(18)); // null
console.log(hasDoubleLetter(['array'])); // null

function hasVowel(str) {
  let vowels = 'aeiouAEIOU';
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
      if (vowels.includes(char)) {
        return char;
      }
    }
  return false;
}

function firstVowel(str) {

  if (hasVowel(str)) {
    return hasVowel(str);
  }
  return null;
}

console.log(hasVowel('rhythm'))

console.log(firstVowel('battery')); // 'a'
console.log(firstVowel('tunnel')); // 'u'
console.log(firstVowel('dog')); // 'o'
console.log(firstVowel('conventional')); // 'o'
console.log(firstVowel('rhythm')); // null

function isVowel(str) {
  let vowels = 'aeiou';

}

function lastVowel(str) {
  let vowels = 'aeiouAEIOU';
  if (hasVowel(str)) {
    for (let i = str.length-1; i > 0; i--) {
      let char = str[i];
      if (vowels.includes(char)){
        return char;
      }
    }
  }
  return null;
}

console.log(lastVowel('battery')); // 'e'
console.log(lastVowel('TUNNEL')); // 'E'
console.log(lastVowel('dog')); // 'o'
console.log(lastVowel('conventional')); // 'a'
console.log(lastVowel('rhythm')); // null

function minValue(nums) {
  while (nums.length > 0){
    return Math.min(...nums);
  }
  return null;
}

console.log(minValue([4, 6, 3, 5, 2, 4])); // 2
console.log(minValue([-2, -3, -7, 3 ])); // -7
console.log(minValue([])); // null

function getAvg(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  let avg = (sum / (arr.length))
  return avg;
}

function avgVal(arr) {
  while (arr.length > 0){
    avg = getAvg(arr);
    return avg;
  }
  return null;
}

getAvg([5,10]);
console.log(avgVal([5, 10])); // 7.5
console.log(avgVal([3, 7, 2, 1, 2])); // 3
console.log(avgVal([])); // null
// TODO - fix this
function maxValue(nums) {
  while (nums.length > 0){
    for (let i = 0; i < nums.length; i++) {
      let num = nums[i];

    }
    return null;
  }
}

console.log(maxValue([4, 6, 3, 5, 42, 4])); // 42
console.log(maxValue([-2, -3, -7, 3 ])); // 3
console.log(maxValue([])); // null
console.log();

// FIXME - make this work
function reverb(str) {
  let v = 'aeoiu';
  let char;

  while(typeof(str) == 'string'){
    for (let i = str.length; i >= 0; i--){
      char = str[i];
      if (v.includes(char)){
        console.log(char);
      }
    }
    return char;
  }
  return null;
}

console.log(reverb('running')); // runninging
console.log(reverb('FAMILY'));  // FAMILYILY
console.log(reverb('trash'));   // trashash
console.log(reverb('DISH'));    // DISHISH
console.log(reverb(197393));    // null
console.log('endreverbFIXIT\n\n');

function prevPrime(num) {
if (num <=  2) {
    return null;
  } else {
    for (let i = num-1; ; i--) {
      if (isPrime(i)){
        return i;
      }
    }
  }
}

console.log(prevPrime(32)); // 31
console.log(prevPrime(33)); // 31
console.log(prevPrime(14)); // 13
console.log(prevPrime(7));  // 5
console.log(prevPrime(4));  // 3
console.log(prevPrime(2));  // null
console.log(prevPrime(1));  // null

//mutability
function additionMutator(arr, num){
  for (let i = 0; i < arr.length; i++){
    arr[i] += num;
  }
  return arr;
}

let nums1 = [3, 7, 1, 2];
additionMutator(nums1, 4);
console.log(nums1);     // [ 7, 11, 5, 6 ]

let nums2 = [11, 9, 4];
additionMutator(nums2, -1);
console.log(nums2);     // [ 10, 8, 3 ]


function alternatingWords(arr){
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 == 0){
      arr[i] = arr[i].toUpperCase();
    } else {
      arr[i] = arr[i].toLowerCase();
    }
  }
  return arr;
}

let words1 = ['Belka', 'STRELKA', 'laika',
              'DEZIK', 'Tsygan'];
alternatingWords(words1);
console.log(words1); // [ 'BELKA', 'strelka',
                     //   'LAIKA', 'dezik', 'TSYGAN' ]

let words2 = ['Yellowstone', 'Yosemite', 'Zion',
              'Acadia'];
alternatingWords(words2);
console.log(words2); // [ 'YELLOWSTONE', 'yosemite',
                     //   'ZION', 'acadia' ]
function reverseString(str){
  let newStr = '';
  for (let i = str.length-1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
}

console.log(reverseString('fish')); // 'hsif'
console.log(reverseString('marathon')); // 'nohtaram'

function removeLastVowel(str){
  let v = 'aeiou';
  for (let i = str.length - 1; i>=0 ; i--) {
    if (v.includes(str[i])){
      return str.replace(str[i], '');
    } else {
      return str;
    }
  }
}

console.log(removeLastVowel('bootcamp')); // 'bootcmp'
console.log(removeLastVowel('better')); // 'bettr'
console.log(removeLastVowel('graph')); // 'grph'
console.log(removeLastVowel('thy')); // 'thy'

function removeEWords(sentence){
  let arr = sentence.split(" ");
  let e = 'e';
  let E = 'E';
  let newStr = '';

  for (let i = 0; i < arr.length; i++){
    if (arr[i].includes(e) || arr[i].includes(E)){
      continue;
    } else {
      newStr += `${arr[i]} `;
    }
  }
  return newStr;
}

console.log(removeEWords('What time is it everyone?')); // 'What is it'
console.log(removeEWords('Enter the building')); // 'building'
