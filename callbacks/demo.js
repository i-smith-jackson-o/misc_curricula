let superAdd = function(num1, num2, cb) {
  if (cb === undefined) {
    return num1 + num2; 
  } else {
    let sum = num1 + num2; 
    return cb(sum); 
  }
}

let greaterResult = function(num, cb1, cb2) {
  let res1 = cb1(num); 
  let res2 = cb2(num); 

  if (res1 > res2) {
    return res1; 
  } else {
    return res2; 
  }
}; 

// examples: 
let double = function(n) {
  return n * 2; 
}; 

let squarer = function(n) {
  return n*n; ;
}

console.log(greaterResult(5, doubler, squarer)); // 25 
console.log(greaterResult(1, doubler, squarer)); 










