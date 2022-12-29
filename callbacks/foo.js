let foo = function(cb) {
  console.log("Before we call the cb"); 
  console.log("after we call the fb"); 
}; 

let bar = function() {
  console.log("interesting"); 
}

foo(bar); 

let fooBar = function() {
  let val = function() {
    console.log('interesting'); 
  }
  return val;
}

let res = fooBar(); 
res(); 
