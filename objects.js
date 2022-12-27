let obj = {name: "Rose", cats: 2};
//the key we are accessing is assigned to the 'currentKey'
//variable on each iteration
for (let currentKey in obj) {
  console.log(currentKey);
}

for (let key in obj) {
  let value = obj[key];
  console.log(value);
}

let employees = {
  manager: "Angela",
  sales: "Gracie",
  service: "Paul"
};

for (let title in employees) {
  let person = employees[title];
  console.log(person);
}

let dog = {
  name: "Fido",
};

dog.bark = function() {
  console.log("bark bark!");
};

dog["speak"] = function(string) {
  console.log("Woof " + string + " WOOF!");
};

dog.bark();
dog.speak("Pizza");

let dog2 = {
  name: "Rover",

  bark: function() {
    console.log("bork bork!");
  },

  speak: function(string) {
    console.log("BORK " + string + " BORK!!!");
  }
};

dog2.bark();
dog2.speak("burrito");

console.log(Object.keys(dog));

let cup = {color: "Red", contents: "coffee", weight: 5}
console.log(Object.keys(cup));

let cat = {name: "Freyja", color: "orange"};
console.log(Object.entries(cat));

function printObjects(obj) {
  for (let key in obj) {
    console.log(key + " - " + obj[key]);
  }
}

let bootcamp = {
  name: "App Academy",
  color: "Red",
  population: 120
};
printObjects(bootcamp);

function catBuilder(name, color, toys) {
  let cat = {
    name: name,
    color: color,
    toys: toys
  };
  return cat;
}

console.log(catBuilder("Whiskers", "black", ["scratching-post", "yarn"]));
// prints: { name: 'Whiskers', color: 'black', toys: ['scratching-post', 'yarn'] }

console.log(catBuilder("Nyan", "rainbow", ["poptarts"]));
// prints: { name: 'Nyan', color: 'rainbow', toys: [ 'poptarts' ] }

// References vs. Primitives
// five primitive types
// 1. boolean
// 2. null
// undefined
// number
// string
// primitive types are immutable
// reference values are mutable.
// when you assign a reference value from one variable to a second,
// the value stored in the first variable is also copied into the location
// of the second variable
// three reference types: arr, object, function

let cat1 = {name: 'apples', breed: 'tabby'};
let cat2 = cat1;
cat1.name = "Lucy";
console.log(cat1); // {name: "Lucy", breed: "tabby"}
console.log(cat2); // {name: "Lucy", breed: "tabby"}

//spread operator and rest parameter syntax
function adder(num1, ...otherNums) {
  console.log("The first number is: " + num1);
  let sum = num1;

  // captures all other arguments into an array and adds them to our sum
  otherNums.forEach(n => sum += n);

  console.log("The sum is: " + sum);
  return 0;
}
console.log(adder(2,3,4));

// spreading elements
let numArray = [1,2,3];
let moreNums = [...numArray, 4, 5, 6];
console.log(moreNums);

let colors = {red: "scarlet", blue: "aquamarine"};
let newColors = {...colors};
console.log(newColors);

let colors2 = {green: "forest", yellow: "sunflower"};
let moreColors = {...colors, ...colors2};
console.log(moreColors);

function speak(verb, noun) {
  return "I like to go " + verb + " with " + noun + ".";
}

const words = ['running','jet'];
console.log(speak('running', 'jet'));
console.log(speak(...words));
