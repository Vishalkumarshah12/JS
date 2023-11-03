class User{
    constructor(email, password){
       this.email = email
       this.password = password
    }
    
    get email(){
        return this._email.toUpperCase() 
    }

    set email(value){
        this._email = value
   }

    get password(){
        return `${this._password}vishal`
    }
    set password(value){
         this._password = value
    }
}

const hitest = new User("h@hitest.ai", 'abc')

console.log(hitest.password);
console.log(hitest.email);