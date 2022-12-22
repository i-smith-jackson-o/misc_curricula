// function that averages two numbers 
function average(number1, number2) {
  return (number1 + number2) / 2;
}

// this function call passes the arguments 10 and 16. 
console.log(average(10, 16)); // returns 13 

const result = average(10,16); 

function callMe() {
  console.log('Second!'); 
  console.log('Third!'); 
}

console.log('First!'); 
callMe(); 
console.log('Fourth!'); 

// every javascript functions returns undefined unless otherwise specified 
function sayNumber(number) {
  console.log(number); 
  return true;
}

sayNumber(1); 
console.log(result); 
console.log(average(10,16)); 

// PARAMETERS AND ARGUMENTS 
// Parameters are comma separated variables specified as part of a functions 
// declaration. 
// Arguments are values pass to the function when it is invoked. 
function add(firstParameter, secondParameter) {
  console.log(firstParameter + secondParameter); 
  return; 
}

add(1,2); // => 3s
add(1,2,3); // Will only use the first two parameters
add(5); //Nan

// Functions Lecture 0
function addTwo(num1, num2) {
  return num1 + num2; 
}

addTwo(2,4); 

function goodbye(name) {
  return `Goodbye ${name}.`;
}

console.log(goodbye('Daniel')); 

function isCool(string) {
  let coolSentence = string + ' is cool!'; 
  console.log(coolSentence); 
  return coolSentence; 
}

isCool('music'); 

//let echo = `${string.toUpperCase()} ... ${string} ... ${string.toLowerCase()`;
