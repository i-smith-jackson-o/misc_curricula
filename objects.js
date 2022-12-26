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
