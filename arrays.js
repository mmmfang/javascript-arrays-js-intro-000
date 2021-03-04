var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
//let chocolateBars = new Array('snickers', 'hundred grand', 'kitkat', 'skittles');
function addElementToBeginningOfArray (array,el){
  //let array = [];
  let newArray = [el, ...array];
  return newArray;
};

function destructivelyAddElementToBeginningOfArray(arr, el){
  // let arr = [];
  arr.unshift(el);
  return arr;
}
