function removeFromArray(location, arr) {
  if (location[0] === "F") {
    arr.shift();
  } else if (location[0] === 'B') {
    arr.pop();
  } else {
    console.log("ERROR!!")
  }
}

testArray = [0,1,2,3,4]

removeFromArray("FRONT", testArray)
console.log(testArray) // [1,2,3,4]

removeFromArray("BACK", testArray)
console.log(testArray) // [1,2,3]

removeFromArray("MIDDLE", 4, testArray) // "ERROR"
console.log(testArray) // [1,2,3]

let popper = function(arr, num) {
  let newArr = [];
  for (let i = 0; i < num; i++) {
    let v = arr.pop();
    newArr.push(v);
  }
  return newArr;
}

let arr1 = ['a', 'b', 'c', 'd', 'e'];
console.log(popper(arr1, 2)); // [ 'e', 'd' ]
console.log(arr1); // [ 'a', 'b', 'c' ]

let arr2 = ['kale', 'spinach', 'collard greens', 'cabbage'];
console.log(popper(arr2, 1)); // [ 'cabbage' ]
console.log(arr2); // [ 'kale', 'spinach', 'collard greens' ]

let rotateRight = function(arr, num) {
  let copy = arr.slice();

  for (let i = 0; i < num; i++) {
    let el = copy.pop();
    copy.unshift(el);
  }
  return copy;
}

let arr = ['a', 'b', 'c', 'd', 'e'];
console.log(rotateRight(arr, 2)); // [ 'd', 'e', 'a', 'b', 'c' ]
console.log(arr); // [ 'a', 'b', 'c', 'd', 'e' ]

let animals = ['wombat', 'koala', 'opossum', 'kangaroo'];
console.log(rotateRight(animals, 3)); // [ 'koala', 'opossum', 'kangaroo', 'wombat' ]
console.log(animals); // [ 'wombat', 'koala', 'opossum', 'kangaroo' ]

let rotate = function(array, num) {

  if (num > 0) {
    for (let i = 0; i < num; i++) {
      let el = array.pop();
      array.unshift(el);
    }
  } else if (num < 0) {
    for (let i = num; i < -(num); i++) {
      let el = array.shift();
      array.push(el);
    }
  }
}

let array = ['a', 'b', 'c', 'd', 'e'];
rotate(array, 2);
console.log(array); // [ 'd', 'e', 'a', 'b', 'c' ]

let animal = ['wombat', 'koala', 'opossum', 'kangaroo'];
rotate(animal, -1);
console.log(animal); // [ 'koala', 'opossum', 'kangaroo', 'wombat' ]

function initials(str) {
  let copy = str.split(" ");
  for (let i = 0; i < copy.length; i++) {
    copy.splice(i, 1, copy[i][0].toUpperCase());
  }
  return copy.join("");
}
console.log(initials('anna paschall')); // 'AP'
console.log(initials('Mary La Grange')); // 'MLG'
console.log(initials('brian crawford scott')); // 'BCS'
console.log(initials('Benicio Monserrate Rafael del Toro Sánchez')); //BMRDTS

function longestWord(str) {
  let words = str.slice().split(" ");
  let longest = '';
  for (let i = 0; i < words.length; i++){
    if (words[i].length > longest.length) {
      longest = words[i];
    }
  }
  return longest;
}
console.log(longestWord('where did everyone go')); // 'everyone'
console.log(longestWord('prefer simplicity over complexity')); // 'simplicity'
console.log(longestWord('')); // '':

function shortestWord(str) {
  let words = str.slice().split(" ");
  let shortest = words[0];

  for (let i = 0; i < words.length; i++) {
    if (words[i].length <= shortest.length) {
      shortest = words[i];
    }
  }
  return shortest;
}
console.log(shortestWord('what a wonderful life'));     // 'a'
console.log(shortestWord('the quick brown fox jumps')); // 'fox'
console.log(shortestWord('do what you enjoy'));         // 'do'

function reverseSentence(sentence) {
  let words = sentence.split(" ");
  let newWords = [];

  for (let i = words.length - 1; i >= 0; i--) {
    newWords.push(words[i]);
  }
  let newSentence = newWords.join(" ");
  return newSentence;
}
console.log(reverseSentence('I am pretty hungry')); // 'hungry pretty am I'
console.log(reverseSentence('follow the yellow brick road')); // 'road brick yellow the follow'

function containsWord(sentence, targetWord) {
  let words = sentence.split(" ");

  for (let i = 0; i < words.length; i++) {
    if (words[i].toLowerCase() == targetWord) {
      return true;
    }
  }
  return false;
}
console.log(containsWord('sounds like a plan', 'like')); // true
console.log(containsWord('They are great', 'they')); // true
console.log(containsWord('caterpillars are great animals', 'cat')); // false
console.log(containsWord('Cast the net', 'internet')); // false

function removeVowels(str){
  let vowels = 'aeiou';
  let chars = str.split("");

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(chars[i])){
      chars.splice(i, 1, '');
    }
  }
  chars = chars.join("");
  return chars;
}

function abbreviateWords(sentence){
  let words = sentence.split(" ");
  let newSentence = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > 4) {
      newSentence.push(removeVowels(words[i]));
    } else {
      newSentence.push(words[i]);
    }
  }
  newSentence = newSentence.join(" ");
  return newSentence;
}
console.log(removeVowels('wonderful'));
console.log(abbreviateWords('what a wonderful place to live')); // what a wndrfl plc to live
console.log(abbreviateWords('she sends an excellent message ')); // she snds an xcllnt mssg

function snakeToCamel(str){
  let lowerCase = str.toLowerCase();
  let split = lowerCase.split("_");
  let pascal = [];

  for (let i = 0; i < split.length; i++) {
    let word = split[i].split("");
    word.splice(0, 1, word[0].toUpperCase());
    word = word.join("");
    pascal.push(word);
  }
  pascal = pascal.join("");
  return pascal;
}

console.log(snakeToCamel('snakes_go_hiss')); // 'SnakesGoHiss'
console.log(snakeToCamel('say_hello_world')); // 'SayHelloWorld'
console.log(snakeToCamel('app_academy_is_cool')); // 'AppAcademyIsCool'
console.log(snakeToCamel('APp_ACADEMY_iS_cOol')); // 'AppAcademyIsCool'

function removeVowel(str){
  let vowels = 'aeiou';
  let chars = str.split("");

  for (let i = str.length-1; i > 0; i--) {
    if (vowels.includes(str[i])){
      chars.splice(i, 1, '');
      break;
    }
  }
  chars = chars.join("");
  return chars;
}
function hipsterfy(sentence) {
  sentence =  sentence.split(" ");
  for (let i = 0; i < sentence.length; i++) {
    sentence.splice(i,1,removeVowel(sentence[i]));
  }
  sentence = sentence.join(" ");
  return sentence;
}

console.log(removeVowel('should'));
console.log(hipsterfy('When should everyone wake up?')); // 'Whn shold everyon wak p?'
console.log(hipsterfy('get ready for our bootcamp')); // 'gt redy fr or bootcmp'
console.log(hipsterfy('panthers are great animals')); // 'panthrs ar gret animls'
console.log("");

// Write a function `repeatingTranslate` that accepts a sentence as an argument.
// The function should translate the sentence according to the following rules:
//
// - words that are shorter than 3 characters are unchanged
// - words that are 3 characters or longer are translated according to the
//   following rules:
//   - if the word ends with a vowel, simply repeat the word twice (example:
//     'like'->'likelike')
//   - if the word ends with a non-vowel, repeat all letters that come after the
//     word's last vowel, including the last vowel itself (example:
//     'trash'->'trashash')
//
// Note that if words are capitalized in the original sentence, they should remain
// capitalized in the translated sentence. Vowels are the letters a, e, i, o, u.
//
// Can you reduce the problem into helper functions?

// Your code here
function repeatingTranslate(sentence){
  words = sentence.split(" ");
  for (let i = 0; i < words.length; i++) {
    if ( words[i].length < 3 ){
      continue;
    } else if (words[i].length >= 3){
      words[i] = translateWord(words[i]);
    }
  }
  sentence = words.join(" ");
  return sentence;
}

function translateWord(str){
  let vowels = 'aeiou';
  let chars = str.split("");
  // repeat word if last letter is vowel.
  if (vowels.includes(chars[chars.length-1])){
    str = chars.join("")
    str += str;
  } else {
    // add all letters following last vowel including the last vowel iteself
      for (let i = chars.length-1; i >= 0; i--) {
        if (vowels.includes(chars[i])) {
        str = chars.join("");
        str += str.slice(i);
        break;
        }
      }
    }
  return str;
}

console.log(repeatingTranslate("we like to go running fast"));  // "we likelike to
//go runninging fastast"
console.log(repeatingTranslate("he cannot find the trash"));    // "he cannotot
//findind thethe trashash"
console.log(repeatingTranslate("pasta is my favorite dish"));   // "pastapasta is
//my favoritefavorite dishish"
console.log(repeatingTranslate("her family flew to France"));   // "herer familyily
//flewew to FranceFrance"
console.log("");

function consonantCancel(sentence) {
  let vowels = 'aeiou';
  let words = sentence.split(" ");

  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      if (vowels.includes(words[i][j])) {
        words[i] = words[i].slice(j);
        break;
      }
    }
  }
  sentence = words.join(" ");
  return sentence;
}

console.log(consonantCancel("down the rabbit hole")); // "own e abbit ole"
console.log(consonantCancel("writing code is challenging")); // "iting ode is allenging"

function sameCharCollapse(str) {
  let chars = str.split("");
  for (let i = 0;i < chars.length; i++) {
    if (chars[i] == chars[i+1]) {
      chars.splice(i,2,);
      i = 0;
    }
  }
  str = chars.join(" ");
  return str;
}

console.log(sameCharCollapse("zzzxaaxy"));  // "zy"
// because zzzxaaxy -> zxaaxy -> zxxy -> zy
console.log(sameCharCollapse("uqrssrqvtt")); // "uv"
// because uqrssrqvtt -> uqrrqvtt -> uqqvtt -> uvtt -> uv
