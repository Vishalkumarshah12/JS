
// Object literals

const mySym = Symbol("key1")

const JsUser = {
      name:"Bishal",
      "full Name":"Bishal Kumar Shah",
      [mySym]:"mykey1",
      age:18,
      location: "Kathmandu",
      email: "bishal@gmail.com",
      isLoggedIn : false,
      lastLoginDays :["Monday","Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full Name"]); // access the "full name" in object
// console.log(typeof JsUser[mySym]); //access the symbol

JsUser.email = "kumarshah@gmail.com"
// Object.freeze(JsUser)
JsUser.email = "shah@gmail.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

// console.log(JsUser.greeting);//function return back or function reference
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());