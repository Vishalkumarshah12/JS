
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

console.log(LoginUserMessage("Bishal"))
// console.log(LoginUserMessage("Vishal"))