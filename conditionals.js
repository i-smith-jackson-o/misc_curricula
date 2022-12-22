// this is the test expression 
if (3==3) {
  // this is the then expression 
  // this code will run if the above statement is true
  console.log('this is a three'); 
}

function mathFunA() {
  let x = 2 + 3; 

  if (x === 3) {
    console.log('we have a 3');
  } else if (x === 4) {
    // this statement will run if the above statement is true
    console.log('we have a four'); 
  } else {
    console.log("I will return if everything above me is false."); 
  }
}; 

mathFunA(); 

// You cane nest conditional statements within each other, 
// but it will quickly become difficult to read and is discouraged. 
function mathFun(x) {
  if (x === "math") {
    if ( x === "math" && x[0] === "m") {
      if (x[1] === "a") {
        console.log("this got confusing fast"); 
      } 
      else {
        console.log("that is not math!");
      }
    } 
    else {
      console.log("That is for sure not math!"); 
    }
  } 
  else {
    console.log("I will return if everything above me is false.");
  }
};

mathFun("math"); 

function isOdd(num) {
  return num % 2 !== 0; 
}

function isOdd(num) {
// your code here!
  if (num % 2 !== 0) {
    return true; 
  }
  else {
    return false; 
  }
};

console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(""); 

function isSubstring(searchString, subString) {
  // your code here...
  if (searchString.toLowerCase().indexOf(subString.toLowerCase()) === -1) {
    return false; 
  }
  else {
    return true; 
  }
}

console.log(isSubstring("The cat went to the store", "he cat went")); // => true
console.log(isSubstring("Time to program", "time")); // => true
console.log(isSubstring("Jump for joy", "joys")); // => false

// BASIC LOOPS
// let index = 0; 
// // this is the condition that will be checked every time this loop is run 
// while (index < 10) {
//   console.log('The number is ' + index); 
//   //this is common shorthand for index = index + 1
//   index++; 
// }; 

let array = [0, 1, 2]; 
let index = 0; 

while (index < array.length) {
  console.log('Both the index and current array position are ' + array[index]); 
  index++; 
}

function forTest() {
  let testString = 'testing'; 
  for (let index = 0; index < testString.length; index++) {
    let letter = testString[index]; 
    console.log(letter); 
  }
}
forTest(); 

// These two do the exact same thing
function forLoopDoubler(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i] * 2; 
  }
  return array; 
}; 

function whileLoopDoubler(array) {
  let i = 0; 
  while (i < array.length) {
    array[i] = array[i] * 2; 
    i++;
  }
  return array; 
}

forLoopDoubler([2,4,6]); 
whileLoopDoubler([2,4,6]); 

function logBetween(lowNum, highNum) {
  let i = lowNum; 
  while (i <= highNum) {
    console.log(i); 
    i++; 
  } 
}; 

logBetween(4,6); 

function printFives(max) {
  for (let i = 0; i < max; i += 5) {
    console.log(i); 
  } 
};

function printFives1(max) {
  let i = 0;
  while (i < max) {
    if (i % 5 === 0) {
      console.log(i);
    }
    i++;
  }
};

printFives(20); 
printFives1(20); 

function logBetweenStepper(min, max, step) {
  for (i = min; i <= max; i += step) {
    console.log(i); 
  }
};

logBetweenStepper(5, 9, 1); 
logBetweenStepper(-10, 15, 5); 

function fizzBuzz(max) {
  for (let i = 0; i < max; i += 1) {
    if (i % 3 === 0 && i % 5 !== 0) {
      console.log(i);
    } 
    else if (i % 5 === 0 && i % 3 !== 0) {
      console.log(i);
    }
  }
}

fizzBuzz(20); 