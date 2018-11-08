'use strict';

const x = 9;
function f1(val) {
  val = val + 1;
  return val;
 
}

f1(x);

console.log(x);


const y = { x: 9 };
function f2(val) {
  val.x = val.x + 1;
  return val;
}

f2(y);

console.log(y);

// Add your explanation as a comment here
/*
**by value**
The first function (f1) passes the variable by value, as all Javascript functions pass primitive data functions this way. 
however this does not explain why the value is not 10, as the function is to add 1 to the value of x.

if you were to ask the value of x within the function, it will give you 10, however outside the function it will give you only the original value (9);
This is because they are now two difference variables rather than being the same variable.  so if you change one, it will not affect the other.

**by reference**
the second passes the variable by reference, as Javascript objects are always passed by reference.  This means that they variables are one and the same,
so if you affect the variable within the function it will affect the variable outside the function (as they are the same)
*/
