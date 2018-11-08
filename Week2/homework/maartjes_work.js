'use strict';

const monday = [
  {
    name: 'Write a summary HTML/CSS',
    duration: 180
  },
  {
    name: 'Some web development',
    duration: 120
  },
  {
    name: 'Fix homework for class10',
    duration: 20
  },
  {
    name: 'Talk to a lot of people',
    duration: 200
  }
];

const tuesday = [
  {
    name: 'Keep writing summary',
    duration: 240
  },
  {
    name: 'Some more web development',
    duration: 180
  },
  {
    name: 'Staring out the window',
    duration: 10
  },
  {
    name: 'Talk to a lot of people',
    duration: 200
  },
  {
    name: 'Look at application assignments new students',
    duration: 40
  }
];

const tasks = monday.concat(tuesday);

// Add your code here

//map the durations
const durations = tasks.map(task => task.duration++);
console.log(durations);

//filter out less than 120 (2 hours)
const moreThan2Hrs = durations.filter(number => {
  return number > 120
});
console.log(moreThan2Hrs);

// multiply each duration by a per hour rate and sum them all up
// 12.25 is rate per hour

const finalSum = moreThan2Hrs.map (number => number*12.25).reduce((acc, currValue)=> {
  return acc + currValue;
}, 0);
console.log(finalSum);

//if currency was in SEK:
let kronor = Number(12250).toLocaleString("en-SEK", {minimumFractionDigits: 2});
console.log("SEK " + kronor);

//if currency was in EURO:
let euro = Number(12250).toLocaleString("en-EUR", {minimumFractionDigits: 2});
console.log("Maartjes should earn €" + euro);


