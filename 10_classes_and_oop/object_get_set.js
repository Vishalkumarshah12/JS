const User = {
    _email: "h@hc.com",
    _passwod: "abc",

    get Email(){
        return this._email.toUpperCase()
    },

    set Email(value){
        this._email = value
    }

}

const tea = Object.create(User)

console.log(tea.Email);