var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
//let chocolateBars = new Array('snickers', 'hundred grand', 'kitkat', 'skittles');
function addElementToBeginningOfArray (array,el){
  //let array = [];
  let newArray = [el, ...array];
  return newArray;
};

function destructivelyAddElementToBeginningOfArray(arr, el){
  arr.unshift(el);
  return arr;
}
function addElementToEndOfArray(array, el){
  var newArray;
  return newArray = [...array, el];
}
function destructivelyAddElementToEndOfArray(array, el){
    array.push(el);
    return array;
}
function accessElementInArray(array, x){
   return array[x];
}
function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray(array){
  let newArray = array.slice(0);
  return newArray;
}
