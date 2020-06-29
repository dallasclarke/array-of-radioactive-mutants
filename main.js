/******************
 * YOUR CODE HERE *
 ******************/
function addMeToEnd (arr) {
  arr.push('Colin');
}

function addMeToStart (arr) {
  arr.unshift('Colin');
}

function changeLast (arr, value) {
    arr.splice(arr.length -1, 1, value)
  
}

function changeAllValuesTo (arr, value) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = value;
  }
}

function oddOrEven (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      arr[i] = 'even';
    } else {
      arr[i] = 'odd'
    }
  }
}

function changeNextThreeToValue (start, arr, value) {
  for (let i = start; i < start + 3; i++) {
    arr[i] = value;
  }
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
