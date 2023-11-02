class user{
    constructor(username){
         this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends user{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was add ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@google.com", "123")
chai.addCourse()
chai.logMe() // yes alvaiable in inheritance

const masalaChai = new user("masalaChai")

masalaChai.logMe()

// console.log(chai instanceof Teacher); //true
// console.log(chai instanceof user); //true
