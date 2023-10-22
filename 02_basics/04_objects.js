// const tinderUser = new Object() //single ton object
const tinderUser = {} // non single ton objects

tinderUser.id = "123abc"
tinderUser.name = "Bishal"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Vishal",
            lastname:"shah"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
const obj3 = {5:"a", 6:"b"}

// const obj4 = {obj1, obj2} // this not comebaid
// const obj4 = Object.assign({},obj1,obj2,obj3)

const obj4 = {...obj1,...obj2,...obj3}
// console.log(obj4);

const user = [
    {
        id:1,
        email: "bishal@gmail.com"
    },
    {
        id:1,
        email: "bishal@gmail.com"
    },
    {
        id:1,
        email: "bishal@gmail.com"
    },
    {
        id:1,
        email: "bishal@gmail.com"
    },
]

user[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
console.log(tinderUser.hasOwnProperty('isLogged'));
