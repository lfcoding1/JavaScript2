'use strict';


function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const values = [];
  for (var i = startIndex; i <= stopIndex; i++){
    values.push(i)
  }
  console.log(values);

  for (let j = 0; j < values.length; j++){
    if (j % 3 === 0) {
      threeCallback("3");
    }
    else if (j % 5 === 0) {
      fiveCallback("5");
    }
    else if ((j % 3=== 0) && (j % 5 === 0)) {
      fiveCallback("5") && threeCallback("3");
    }
  }
}
  function sayThree(threeCallback) {
    console.log(threeCallback);
  }
  
  function sayFive(fiveCallback) {
    console.log(fiveCallback);
  }

threeFive(10, 15, sayThree, sayFive)