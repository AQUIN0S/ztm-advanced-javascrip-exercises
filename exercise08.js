// Solve the below problems:

// #1) Line up the Turtle and the Rabbit at the start line:
const startLine = '     ||<- Start line';
let turtle = '🐢'.padStart(9);
let rabbit = '🐇'.padStart(9);

console.log(startLine);
console.log(turtle);
console.log(rabbit);


// #2) What happens when you run turtle.trim().padEnd(9, '=') on the turtle variable
// Read about what the second parameter does in padEnd and padStart
turtle = turtle.trim().padEnd(9, '=');
console.log(turtle);

// #3) Get the below object to go from:
let obj = {
  My: 'name',
  is: 'Rudolf',
  the: 'reindeer.'
};
// to this: 'my name is Rudolf the reindeer'
// This is my solution
const entries = Object.entries(obj);
let intro = entries.reduce((accumulator1, array) => `${accumulator1}${array.reduce(
        (accumulator2, item) => {
          if (item === entries[0][0]) {
            return item;
          } else {
            return `${accumulator2} ${item}`;
          }
        }, ""
    )}`, ""
);
console.log(intro);

// This is his solution
intro = Object.entries(obj).map(value => value.join(" ")).join(' ');
console.log(intro);

// I still think mine's better...