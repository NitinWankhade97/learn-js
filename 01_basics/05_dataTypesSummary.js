// Primitive

// 7 types : String, Number, Boolean, Null, undefined, Symbol(to make a value in unique), BigInt

const id = Symbol("123")
const anotherId = Symbol("123")

// console.log(id === anotherId);
//

const bigNumber = 64646446464n;

// console.log(typeof bigNumber);

// Reference-type (Non-primitive) 

// Arrays, Objects, Functions

const heroes = ["Shaktiman", "Bahubali", "Katappa"]

let myObj = {
    name: "Nitin",
    age: 25,
}

const myFunction = function () {
    console.log("Hello world");
}


//  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// two types of memory
// Stack (Primitive) , Heap)(Non primitive)

// Stack - all primitive values are stored in a stack memory and we get the copy of the value
// heap - In heap , we get the reference of the value, means here we change the original value

let originalName = "Nitin"

let anotherName = originalName
anotherName = "akash"

// console.log(originalName);
// console.log(anotherName);

let userOne = {
    email : "user@gmail.com",
    upi : "user@sbi"
}

let userTwo = userOne;

userTwo.email = "user2@mail.com"

console.log(userOne.email);
console.log(userTwo.email);
