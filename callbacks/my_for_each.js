let peeps = ['kafele','cindy','jon','paloma']; 

let myForEach = function(array, cb){ 
  for (let i = 0; i < array.length; i++) {
    let el = array[i]; 
    cb(el, i, array); 
  }
}; 

myForEach(peeps, function(el, i, array) {
  console.log(el + ' is at index ' + i);
});  
