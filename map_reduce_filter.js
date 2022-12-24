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
