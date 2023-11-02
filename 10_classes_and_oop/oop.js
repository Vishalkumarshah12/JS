
//   Object literal
const user = {
    username: "Vishal",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log(`Got user details from database`);
        // console.log(`Username: ${this.username}`);
        // console.log(this);
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);


// constructor function
// function User(username, loginCount, isLoggedIn){
//     this.username = username;
//     this.loginCount = loginCount;
//     this.isLoggedIn = isLoggedIn

//     this.greeting = function(){
//         console.log(`Welcome to ${this.username}`);
//     }

//     return this
// }

// const userOne = new User("Vishal", 12, true)
// const userTwo = new User("Shivam", 11, false)

// console.log(userOne.constructor);
// console.log(userTwo);

function test1(){
     console.log(this);
}

test1()