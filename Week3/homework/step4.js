'use strict';


// Add your code here

function createBase(a){
    return function (y) {
        console.log(y + a)
    }

}

const addSix = createBase(6);

addSix(10); // returns 16
addSix(21); // returns 27
