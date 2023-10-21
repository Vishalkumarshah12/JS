// Dates

const date = new Date()
// console.log(date.toString());
// console.log(date.toDateString());
// console.log(date.toISOString());
// console.log(date.toJSON());
// console.log(date.toLocaleDateString());
// console.log(date.toLocaleString());
// console.log(date.toLocaleTimeString());
// console.log(date.toTimeString());
// console.log(date.toUTCString());
// console.log(typeof date);

// const createdDate = new Date(2023, 9, 21);
// const createdDate = new Date(2023, 9, 21, 5, 3);
// const createdDate = new Date("2023-10-21");
const createdDate = new Date("10-21-2023");
// console.log(createdDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(createdDate.getTime());
// console.log(Date.now()/1000);
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getDate());
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday:"long"
})
