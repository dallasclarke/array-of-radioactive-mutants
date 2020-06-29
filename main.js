/******************
 * YOUR CODE HERE *
 ******************/
function addMeToEnd (arr) {
  arr.push('Colin');
}

function addMeToStart (arr) {
  arr.unshift('Colin');
}

function changeLast (arr) {
  arr.pop();
  
  
}

function changeAllValuesTo (arr) {

}

function oddOrEven (arr) {
  if (arr % 2 === 0) {
    return "even"
  } else {
    return "odd"
  }
}

function changeNextThreeToValue (arr) {
  arr.splice(2, 3,)
}




/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/


if (typeof addMeToEnd === 'undefined') {
  addMeToEnd = undefined;
}

if (typeof addMeToStart === 'undefined') {
  addMeToStart = undefined;
}

if (typeof changeLast === 'undefined') {
  changeLast = undefined;
}

if (typeof changeAllValuesTo === 'undefined') {
  changeAllValuesTo = undefined;
}

if (typeof oddOrEven === 'undefined') {
  oddOrEven = undefined;
}

if (typeof changeNextThreeToValue === 'undefined') {
  changeNextThreeToValue = undefined;
}


module.exports = {
  addMeToEnd,
  addMeToStart,
  changeLast,
  changeAllValuesTo,
  oddOrEven,
  changeNextThreeToValue,
}
