let alphabet = [
  "a", "b", "c", "d", "e", "f",
  "g", "h", "i", "j", "k", "l",
  "m", "n", "o", "p", "q", "r",
  "s", "t", "u", "v", "w", "x",
  "y", "z"
];

console.log([4,7,9].length); // => 3
console.log([1,2].length); // => 2
console.log([].length); // => 0

let numbersAndLetters = ["b", "z", 17, "cat"];

// indexing arrays
console.log(numbersAndLetters[0]); // => "b"
console.log(numbersAndLetters[1]); // => "z"
console.log(numbersAndLetters[2]); // => 17
console.log(numbersAndLetters[3]); // => "cat"

console.log(["a", "b", "c"][0]); // => "a"
console.log(["a", "b", "c"][1]); // => "b"
console.log(["a", "b", "c"][2]); // => "c"
console.log(["a", "b", "c"][3]); // => `undefined`

// off by one error
console.log([4, 7, 9].length); // => 3
console.log([4, 7, 9][3]); // => undefined
console.log([4, 7, 9][2]); // => 9

console.log('testarray\n');
let testArray = [4, 7, 9];
let finalIndex = testArray.length - 1; // => (3 - 1) = 2
console.log(testArray[finalIndex]); // => 9

//working with arrays
let wackyArray = [2, 17, 'apple', 'cats', ['apple']];

console.log(wackyArray[0]); // => 2
console.log(wackyArray[1]); // => 17
console.log(wackyArray[3]); // => "cat"
console.log(wackyArray[4]); // => ["apple"]

// calculate the index of a given value within an array by using indexOf
console.log([1, 3, 5, "apple", "jet"].indexOf(3)); // => 1
console.log([1, 3, 5, "apple", "jet"].indexOf(5)); // => 2
console.log([1, 3, 5, "apple", "jet"].indexOf("jet")); // => 4

// this won't be found in the array
console.log([1, 3, 5, "apple", "jet"].indexOf("potato")); // => -1
/*
if you attempt to search for a value that is not present in an array, indexOf
will return -1. -1 is not a valid array index. the smallest index possible is 0
*/

// Concatenation with arrays
console.log([1,2,3].concat([4,5,6]));

// Array.push(item) adds item to end
// Array.pop() removes item from end
let arr = [1,2,3];
arr.push(4);
arr.push(5);
console.log(arr);
arr.pop();
console.log(arr);

// Array.concat() does not mutate array
function combineArray(array1, array2) {
  return array1.concat(array2);
}

console.log(combineArray([1, 2], [3, 4])); // => [1, 2, 3, 4]
console.log(combineArray([17, 5], [6, 7]));  // => [17, 5, 6, 7]

function doubler(numbers) {
  // your code here...
  let i = 0;
  let newArray = [];
  while (i <= numbers.length - 1) {
      num = numbers[i] * 2;
      newArray.push(num);
      i++;
  }
  return newArray;
}
console.log(doubler([1,2,3,4]));
console.log(doubler([7,1,8]));

function countVowels(word) {
  let count = 0;
  let vowels = ['a','e','i','o','u'];
  for (let i = 0; i <= word.length; i++) {
    x = word[i];
    for (let j = 0; j <= vowels.length - 1; j++) {
      y = vowels[j];
      if (y === x){
        count += 1;
      }
    }
  }
  return count;
};

console.log(countVowels("bootcamp")); // => 3
console.log(countVowels("apple")); // => 2
console.log(countVowels("pizza")); // => 2
