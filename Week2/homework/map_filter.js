'use strict';

const numbers = [1, 2, 3, 4];

//question 2.1

const newNumbers = numbers.filter(number => number% 2 !==0) .map(number => number*2);
console.log(newNumbers);

 /* without arrow function
 const nnewNumbers = numbers.filter(function(number){
    return (number% 2 !== 0);
    }).map(function(number){
        return number * 2;
    });
    console.log(nnewNumbers); */