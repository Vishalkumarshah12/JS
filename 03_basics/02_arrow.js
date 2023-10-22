const user = {
    username: "bishal",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to websites`)
        console.log(this); // this is gives hole object current values
    }

}

// user.welcomeMessage()
// user.username = "shivam"
// user.welcomeMessage()

// console.log(this); // this gives emty object {}


// this key is not use in function it only used in objects 
// function chai(){
//      let username = "bishal"
//      console.log(this.username);
// }

// chai()

// this key is not use in function it only used in objects 
// const chai = function(){
//        let username = "bishal"
//        console.log(this.username);
// }

// this key is not use in function it only used in objects 
const chai = () => {
       let username = "bishal"
       console.log(this.username);
}

// chai()

// const addTwo = (num1, num2) => {
//        return num1 + num2
// }

// const addTwo = (num1, num2) => {
//        return num1 + num2
// }

//  Implicit returns
// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username:"bishal"})

// console.log(addTwo(3, 4))

const myArray = [2, 4, 7, 8, 9]

myArray.forEach(() => ())
