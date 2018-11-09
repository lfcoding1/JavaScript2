'use strict';

function sayThree() {
  console.log(3);
}

function sayFive() {
  console.log(5);
}

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
const values = [];
for (var i = startIndex; i <= stopIndex; i++){
  values.push(i)
}
console.log(values);

for (let j = 0; j < values.length; j++){
  if ((values[j] % 3 === 0) && (values[j] % 5 === 0)) {
          threeCallback()
          fiveCallback();
  }
  else if(values[j] % 3 === 0) {
      threeCallback();
  }
  else if (values[j] % 5 === 0) {
          fiveCallback();
  }
}
}

threeFive(10, 15, sayThree, sayFive)