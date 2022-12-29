let peeps = ['kafele','cindy','jon','paloma']; 


let myMap = function(array, cb) {
  let newArray = []; 
  for (let i in array) {
    let el = array[i]; 
    let res = cb(el, i, array); 
    newArray.push(res); 
  }
  return newArray; 
}; 


let newPeeps = myMap(peeps, function(el) {
  return el.toUpperCase() + '!'; 
}); 

console.log(newPeeps); 

let res = myMap([4,9,81,25], function(n) {
  return 2 * n; 
}); 
console.log(res); 
