// Solve the below problems:


// #1) Check if this array includes the name "John".
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
console.log(dragons.includes('John'));

// #2) Check if this array includes any name that has "John" inside of it. If it does, return that
// name or names in an array.
console.log(dragons.filter(name => name.includes('John')));


// #3) Create a function that calculates the power of 100 of a number entered as a parameter
const pow100 = (num) => num ** 100;

// #4) Using your function from #3, put in the parameter 10000. What is the result?
// Research for yourself why you get this result

console.log("10000^100", pow100(5000));

