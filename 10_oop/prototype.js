// let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.trueLength);

let myHeros = ['thor', 'spiderman']

let heroPower = {
    thor: 'hammer',
    spiderman: 'sling',
    geySpiderPower: function () {
        console.log(`spidey poer is ${this.spiderman}`);

    }
}
Object.prototype.harsh = function () {
    console.log(`harsh is present in all objects`);
}

Array.prototype.heyharsh=function(){
    console.log(`harsh is present in all arrays`);
}

// heroPower.harsh()
// myHeros.harsh()
//myHeros.heyharsh()// this will print harsh is present in all arrays
// heroPower.heyharsh()// this does not have access to hey harsh


// Inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport={
    makeAssignment:'js assignment',
    fullTime:true,
    __proto__:TeachingSupport
}

Teacher.__proto__=User// old syntax

// mordern syntax
Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()