const score = 400;
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString());
// console.log(balance.toFixed(2));


const otherNumber = 10.358
// console.log(otherNumber.toPrecision(3));


const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));


// ++++++++++++++ Maths +++++++++++++

// console.log(Math);
// console.log(Math.abs(-4)); // only negative values convert into positive
// console.log(Math.round(4.6)); 
// console.log(Math.ceil(4.2)); // this gives 5 or upper round
// console.log(Math.floor(4.9)); // this gives 4 or down round
// console.log(Math.min(4, 3, 6, 8));  // it gives 3
// console.log(Math.max(4, 3, 6, 8)); // it gives 8


// most used mathod in math library

  console.log(Math.random()); //it gives 0 to 1
  console.log((Math.random()*10)+ 1); // it gives 1 to 9
  console.log(Math.floor(Math.random()*10)+ 1); // it also gives 1 to 9 but in floor values

const min = 1
const max = 6

console.log(Math.floor(Math.random() * (max - min + 1)) + min);

