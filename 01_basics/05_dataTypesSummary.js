// Primitive

// 7 types : String, Number, Boolean, Null, undefined, Symbol(to make a value in unique), BigInt

const id = Symbol("123")
const anotherId = Symbol("123")

// console.log(id === anotherId);

const bigNumber = 64646446464n;

console.log(typeof bigNumber);

// Reference-type (Non-primitive) 

// Arrays, Objects, Functions

const heroes = ["Shaktiman", "Bahubali", "Katappa"]

let myObj = {
    name : "Nitin",
    age : 25,
}

const myFunction = function(){
    console.log("Hello world");
}