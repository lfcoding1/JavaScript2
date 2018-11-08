'use strict';

// use a 'for' loop
function repeatStringNumTimes(str, num) {
  // repeat after me
  let repeatString = "";

  for (; num > 0;) {
  repeatString += str;
  num--;
  }
  return repeatString;
}

console.log('for', repeatStringNumTimesWithFor('abc', 3));

// use a 'while' loop
function repeatStringNumTimes(str, num) {
  // repeat after me
   let repeatString = "";
 
   while (num > 0){
     repeatString += str;
     num--;
   }
   return repeatString;
 }

console.log('while', repeatStringNumTimesWithWhile('abc', 3));

// use a 'do...while' loop
function repeatStringNumTimes(str, num) {
  // repeat after me
  let repeatString = "";
  do {
    repeatString += str;
    num--;
    } while (num > 0);
  if (num < 0){
    return "";
  }
      return repeatString;
}
console.log('while', repeatStringNumTimesWithDoWhile('abc', 3));
