/*
forEach - touch every element to access or modify it in some way
map - convert each element to something else and store it in a new array
filter - create a new array with is a subset of the original including
only those items that meet a certain condition.
*/

let totalSales = 0;
const addToTotalSales = function(value) {
  totalSales += value;
}
const monthlySales = [1234, 2345, 3456, 4567, 5678];
monthlySales.forEach(addToTotalSales);
console.log(totalSales);

const getLifePhase = function(age) {
  if (age < 4)
    return 'Toddler';
  if (age < 13)
    return 'Kid';
  if (age < 18)
    return 'Teenager'
  if (age < 65)
    return 'Adult';
  return 'Elder';
}

const ages = [2,7,15,29,45,44,59,65,88];
const phases = ages.map(getLifePhase);
console.log(phases);

console.log(phases.map(function (value, index) {
  // use the index from the phases array to access
  // the corresponding value in the ages array
  return value + ' (' + ages[index] + ')';
}));

const toys = [
  'Red Ball',
  'Pink Elephant',
  'Clown with Red Nose',
  'Teddy Bear (Brown)',
  'Firefighter Hat (Red)'
];

// loop to get only the red toys
const redToys = toys.filter(function (toy) {
  return toy.toLowerCase().indexOf('red') > -1;
});
console.log(redToys);

const myFriends = [
  { firstname: 'Isma', lastname: 'Kirby', age: 27 },
  { firstname: 'Aaliya', lastname: 'Becker', age: 35 },
  { firstname: 'Adnaan', lastname: 'Tang', age: 22 },
  { firstname: 'Rafi', lastname: 'Pearson', age: 29 },
  { firstname: 'Eshaal', lastname: 'Gould', age: 29 },
  { firstname: 'Scarlett', lastname: 'Whitehead', age: 45 },
  { firstname: 'Arslan', lastname: 'Esparza', age: 38 },
  { firstname: 'Isla-Mae', lastname: 'Hastings', age: 46 },
  { firstname: 'Eamonn', lastname: 'Vang', age: 21 },
  { firstname: 'Haya', lastname: 'Mcdougall', age: 31 },
];

let total = 0;
myFriends.forEach(function (person ) {
  const firstInitial = person.firstname.substring(0,1);
  const lastInitial = person.lastname.substring(0,1);
  person.initials = firstInitial + lastInitial;
  total += person.age;
});

const average = total / myFriends.length;
const myOlderFriends = myFriends.filter(function(person) {
  return person.age > average;
});

const report = myOlderFriends.map(function(person) {
  return person.initials + ': ' + person.age;
});

console.log(report);
// ab: 35, sw: 45 ae: 38, IH: 46

// reusable parameter function
function example1() {
// parameter function
  const doSum = function (accumulator, currentValue) {
    return accumulator + currentValue;
  }
  //array reduce example 1
  const numbers = [0,1,2,3];
  const theSum = numbers.reduce(doSum, 0);
  return theSum; // 6
}

// inline parameter function
function example2() {
  const numbers = [0,1,2,3];
  const initialValue = 0;
  const theSum = numbers.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
  }, initialValue);

  return theSum; // 6
}

//wrapper function
function example3() {
  const arraySum = function(array) {
    const initialValue = 0;

    //array.reduce ex 3
    return array.reduce(function(accumulator, currentValue) {
      return accumulator + currentValue;
    }, initialValue);
  };
  const numbers = [0,1,2,3];
  const theSum = arraySum(numbers)

  return theSum; // 6
}

console.log(example1());
console.log(example2());
console.log(example3());
