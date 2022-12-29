let foobar = function(callback) {
  console.log("foo");
  callback();
  console.log("bar");
};

let sayHello = function() {
  console.log("hello");
};

console.log(foobar(sayHello));

foobar(function() {
  console.log("hello");
});

let add = function(num1, num2, cb) {
  let sum = num1 + num2;
  let result = cb(sum);
  return result;
};

let double = function(num) {
  return num * 2;
};

let negate = function(num) {
  return num * -1;
};

console.log(add(2,3,double));
console.log(add(4,5,negate));

add = function(num1, num2, cb) {
  let sum = num1 + num2;
  let result = cb(sum);
  return result;
};

console.log(add(60,4,Math.sqrt));
