let veggies = ['lettuce','celery','cabbage','watercress']; 

let myFilter = function(array, cb) {
  let selectedItems = []; 
  for (let i in array) {
    if (cb(array[i], i, array) === true) {
      selectedItems.push(array[i]); 
    }
  }
  return selectedItems; 
}

  let result = myFilter(veggies, function(ele) {
    return ele.includes('x'); 
  }); 

  console.log(result); 
