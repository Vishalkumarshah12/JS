// let myName = "vishal    "
// let mychannel = "chai    "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor:'hammer',
    spiderman: 'sling',

    getSpiderPower : function(){
        console.log(`Spider power is ${this.spiderman}`);
    }
}

Object.prototype.vishal = function(){
    console.log('vishal is parent in all Objects');
}

Array.prototype.heyVishal = function(say){
    console.log(`vishal hello`);
}

// heroPower.vishal()
// myHeros.vishal()
// myHeros.heyVishal()


// inheritance

const User = {
    username: "Chai",
    email:"chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssingnment: "JS assignment",
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function() {
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}


anotherUsername.trueLength()
"vishal".trueLength()
'ice-tea'.trueLength()


