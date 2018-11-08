/*Assignment: Your friend Gudrun owns a "livs" kiosk. She needs help avoiding food waste and financial loss. 
Write a Javascript function which, given a list of items sorts them by 1) best before date (ascending) and 2) price (descending). 
In other words, the item with the earliest best before date first, and in the case of same date, higher price first. 
If items have bot equal best before date and price,their order does not matter.
The input list is given as a text string, in a JSON format demonstrated by this example:*/


let livs_kiosk = '[ {"product": "Milk, 1L carton", "best_before": "2018-10-04", "price": 15.5 }, {"product": "Milk, 1L carton", "best_before": "2018-10-04", "price": 15.5},{  "product": "Eggs 12pcs","best_before": "2018-10-04","price": 35.0}, {"product": "Swedish meatballs", "best_before": "2018-10-25", "price": 22.0 }]'

/*The function should return a text string containing the sorted list, in the same format as the input. 
You can assume that the input is always valid and in the same format, and its length isn't more than a few hundreds items. 
Only "vanilla" Javascript is allowed, ie. no external libraries.*/


let Obj = JSON.parse(livs_kiosk);
/*console.log(Obj);
const bestBefore = Obj.filter(Obj.best_before);
console.log(bestBefore);*/

let sortedObj = Obj.sort(function(pr1, pr2) {
    let a = new Date (pr1.best_before)
    let b = new Date (pr1.best_before)
    if (a>b){return -1};
    if (a<b){return 1};
    let c = new Date (pr2.price)
    let d = new Date (pr2.price)
    if (c>d){return -1};
    if (c<d){return 1};
});
console.log(sortedObj);


