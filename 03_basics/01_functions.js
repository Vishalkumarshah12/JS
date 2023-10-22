
function sayMyName(){
    console.log("B");
    console.log("I");
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("L");
}

// sayMyName()

// function addTwoNumber(number1, number2){
//     console.log(number1 + number2);
// }

//   addTwoNumber(4,4)


function addTwoNumber(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

// const result = addTwoNumber(4,4)
// console.log("Result:", result);

function LoginUserMessage(username = "sam"){
    if(!username){
       console.log("please enter the username");
       return
    }
    return `${username} just logged in`
}

// console.log(LoginUserMessage("Bishal"))
// console.log(LoginUserMessage("Vishal"))


function calculateCardPrice(val1,val2,...num1){
   return num1 
}

// console.log(calculateCardPrice(200, 400, 500, 2000))

const user = {
    username: "Bishal",
    prices: 199
}

function handleObject(anyobject){
      console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",         //Passing the object in function
    price: 399
})       


const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
       return getArray[1]
}

// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200, 400, 500, 1000]))
