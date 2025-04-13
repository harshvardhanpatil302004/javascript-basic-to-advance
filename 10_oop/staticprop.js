class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }
// static keyword prevents the access to that method
    static createId(){
        return `123`
    }
}

const hitesh = new User("hitesh")
console.log(hitesh.createId())

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
console.log(iphone.createId());// give error because static prevents inheritance i.e access to child