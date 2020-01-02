//Solve these problems:

//#1 Create a one line function that adds adds two parameters
const sum = (a, b) => a + b;

//Closure: What does the last line return?
const addTo = x => y => x + y;
const addToTen = addTo(10); // addToTen = addTo(10)
let answer = addToTen(3); // answer = addToTen(3) = addTo(10)(3) = 13
console.log("addToTen(3)", answer);

//Currying: What does the last line return?
const curriedSum = (a) => (b) => a + b;
answer = curriedSum(30)(1);  // answer = 31
console.log("curriedSum(30)(1)", answer);


//Currying: What does the last line return?
let add5 = curriedSum(5);
answer = add5(12); // add5(12) = curriedSum(5)(12) = 17
console.log("add5(12)", answer); // answer = 17

//Composing: What does the last line return?
const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
add5 = (num) => num + 5;
answer = compose(add1, add5)(10); // compose(add1, add5)(10) = add1(add5(10)) = add1(15) = 16
console.log("compose(add1, add5)(10)", answer); // answer = 16

//What are the two elements of a pure function?
/*
 * A pure function should be deterministic. This means that a function should always give the same
 * result given the same inputs.
 *
 * It should also have no side effects, meaning that it should avoid affecting the surrounding
 * environment, and should only depend on its input. Meaning that outside state, variables or data
 * should not affect the execution of your function.
 */
