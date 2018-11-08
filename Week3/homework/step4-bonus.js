'use strict';

const values = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'];

// Add your function here. Try and come up with a good name for this function
function noDupe() {
     values.filter(function(item, pos) {
    return values.indexOf(item) == pos;
})
};
  
function noDupe(values) {
    var seen = {};
    return values.filter(function(item) {
        return seen.hasOwnProperty(item) ? false : (seen[item] = true);
    });
}
// Replace `yourFunction` with the name of the function you just created
const uniqueValues = noDupe(values);

console.log(uniqueValues);
