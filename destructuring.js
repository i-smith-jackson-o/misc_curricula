let numArray = [10,20];

// here we are unpacking the array value into two seperate variables
let [firstEl, secondEl] = numArray;
console.log(firstEl); // 10
console.log(secondEl); // 20

let animalArray = ['tiger','hippo'];
let animal1, animal2;
// here we are unpacking the array values into two separate variables
[animal1, animal2] = animalArray;
console.log(animal1); // tiger
console.log(animal2); // hippo

//swapping variables using destructuring
let num1 = 17;
let num2 = 3;

// this syntax will swap the values of the two variables
[num1, num2] = [num2, num1];
console.log(num1); // 3
console.log(num2); // 17

// destructuring objects into variables
let obj = {name: "Apples", breed: ['tabby','short hair']};
let {name, breed} = obj;

console.log(name); //Apples
console.log(breed) // ['tabby','short hair']

// this syntax works by matching object properties
let {a, c} = {a: 1, b: 2, c: 3};
console.log(a);
console.log(c);

let objA = {apple: "red", banana: "yellow" };
let {apple: newApple, banana: newBanana } = objA;
console.log(newApple); //red
console.log(newBanana); // yellow

// destructuring with nested objects
// goal is to capture value of species key into a variable named species
let object = {animal: {name: "Fiona", species: "hippo"}};
let {
  animal: {species}
} = object;
console.log(species);

let user = {
  userId: 1,
  favoriteAnimal:  "hippo",
  fullName: {
    fname: "Jackson",
    lname: "S"
  }
};
let {
  userId,
  //fullName: {fname, lname}
} = user;

//console.log(userId, fname, lname);

// fname key nested more than two levels deep
let bootcamp = {
  name: "App Academy",
  color: "red",
  instructor: {
    fullName: {
      fname: "Rose",
      lname: "K"
    }
  }
};
//hard to follow
// let {
//   instructor: {
//     fullName: {fname, lname}
//   }
// } = bootcamp;
// console.log(fname, lname);

// this is much easier to read:
let {fname, lname} = bootcamp.instructor.fullName;
console.log(fname, lname);

function logArguments(firstArgument, ...restOfArguments) {
  console.log(firstArgument);
  console.log(restOfArguments);
}
console.log(logArguments('apple', 15, 13));

let foods = ["pizza", "ramen", "sushi", "kale", "tacos"];
let [firstFood, secondFood, ...otherFoods] = foods;
console.log(firstFood);
console.log(secondFood);
console.log(otherFoods);

let cat = {name: "Rupert", owner: "Curtis", weight: 10};
// unpacks owner key out of incoming object argument and assigns it to owner
function ownerName({owner}) {
  console.log("This cat is owned by " + owner);
}
console.log(ownerName(cat));

let bigCat = {
  name: "Jet",
  owner: {name: "Rose"},
  toys: ['ribbon'],
  siblings: {name: "freyja", color: 'orange', toys: ['mouse','string']}
};
function toyFinder({toys, siblings: {toys: siblingToys}}) {
  let allToys = toys.concat(siblingToys);
  return allToys;
}
console.log(toyFinder);

let bigArray = ['apple', 14, 32, 100, {name: 'part'}, ['pineapple']];
let elA, elB, elC, elD, elE, elF = bigArray;
console.log(bigArray);
