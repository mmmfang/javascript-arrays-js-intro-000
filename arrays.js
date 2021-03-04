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

    return array.push(el);
}
