// change everything below to the newer Javascript!

// let + const
let a = 'test';
let b = true;
let c = 789;
a = 'test2';


// Destructuring
const person = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue",
    city      : "Auckland"
};

const { firstName, lastName, age, eyeColor, city } = person;
console.log("firstName:", firstName);

// Object properties
a = 'test';
b = true;
c = 789;

const okObj = { a, b, c };


// Template strings
const message = `Hello ${firstName} have I met you before? I think we met in ${city} last summer no???`;


// default arguments
// default age to 10;
function isValidAge(age=10) {
    return age
}

// Symbol
// Create a symbol: "This is my first Symbol"
const symbol = Symbol("This is my first Symbol");

// Arrow functions

const whereAmI = (username, location) => username && location ? "I am not lost" : "I am totally lost!";