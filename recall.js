/* recall exercises...
moving forward to these because 2-d arrays were troubling me
*/
function echo(string) {
  let msg = `${string.toLowerCase()}...${string}...${string.toUpperCase()}`;
  console.log(msg);
}

echo("Mom!");
echo("hey");
echo("JUmp");

function countVowels(word) {
  let vowels = 'aeiou';
  let counter = 0;

  for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word[i])) {
      counter++;
    }
  }
  return counter;
}
console.log(countVowels("bootcamp")); // => 3
console.log(countVowels("apple")); // => 2
console.log(countVowels("pizza")); // => 2

function sumArray(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

console.log(sumArray([5, 6, 4])); // => 15
console.log(sumArray([7, 3, 9, 11])); // => 30

function pigLatinWord(word) { let vowels = 'aeiou';
  if (vowels.includes(word[0])) {
    word = word + 'yay';
  }
  for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word[i])) {
      word = word.slice(i) + word.slice(0,i) + 'ay';
      break;
    }
  }
  return word;
};

console.log(pigLatinWord("apple")); //=> "appleyay"
console.log(pigLatinWord("eat")); //=> "eatyay"
console.log(pigLatinWord("banana")); //=> "ananabay"
console.log(pigLatinWord("trash")); //=> "ashtray"

function myIndexOf(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == target) {
      return i;
    }
  }
  return -1;
}
console.log(myIndexOf(['a', 'b', 'c', 'e'], 'c')); // 2
console.log(myIndexOf(['a', 'b', 'c', 'e'], 'e')); // 3
console.log(myIndexOf(['a', 'b', 'c', 'e'], 'z')); // -1
console.log(myIndexOf([43, -7, 11, 13, 43], 43)); // 0
console.log(myIndexOf([43, -7, 11, 13], 1)); // -1
console.log();

function twoSum(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i+1; j < arr.length; j++) {
      if (arr[i] + arr[j] == target) {
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

function fizzBuzz(max) {
  let arr = [];
  for (let i = 0; i < max; i++) {
    if (i % 3 == 0 && i % 5 !== 0){
      arr.push(i);
    } else if (i % 3 !== 0 && i % 5 == 0){
      arr.push(i);
    }
  }
  return arr;
}
console.log(fizzBuzz(12));
console.log(fizzBuzz(20))

function removeLastVowel(str){
  let vowels = 'aeiou';
  str = str.split("");
  for (let i = str.length-1; i > 0; i--) {
    if (vowels.includes(str[i])) {
      str.splice(i, 1);
      break;
    }
  }
  str = str.join("");
  return str;
}
console.log(removeLastVowel('bootcamp')); // 'bootcmp'
console.log(removeLastVowel('better')); // 'bettr'
console.log(removeLastVowel('graph')); // 'grph'
console.log(removeLastVowel('thy')); // 'thy'

function leastCommonMultiple(a, b) {
  for (let i = 1; i <= a * b; i++) {
    if (i % a == 0 && i % b == 0) {
      return i;
    }
  }
}
console.log(leastCommonMultiple(4, 6)); // 12
console.log(leastCommonMultiple(3, 5)); // 15
console.log(leastCommonMultiple(2, 10)); // 10

function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}

function choosePrimes(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (isPrime(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
console.log(choosePrimes([36, 48, 9, 13, 19])); // [ 13, 19 ]
console.log(choosePrimes([5, 6, 4, 11, 2017])); // [ 5, 11, 2017 ]

function uncompress(str) {

}
console.log(uncompress('x3y4z2')); // 'xxxyyyyzz'
console.log(uncompress('a5b2c4z1')); // 'aaaaabbccccz'
console.log(uncompress('b1o2t1')); // 'boot'
