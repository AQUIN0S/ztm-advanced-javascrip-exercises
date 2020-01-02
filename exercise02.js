//#1 change this function into a ternary and assign it to variable called experiencePoints
let experiencePoints = winBattle() ? 10 : 1;

console.log('Use moveCommand() to enter a direction ("forward", "back", "right" or "left")');
//Using this function, answer the questions below:
function moveCommand(direction) {
    var whatHappens;
    switch (direction) {
        case "forward":
            whatHappens = "you encounter a monster";
            break;
        case "back":
            whatHappens = "you arrived home";
            break;
        case "right":
            whatHappens = "you found a river";
            break;
        case "left":
            whatHappens = "you run into a troll";
            break;
        default:
            whatHappens = "please enter a valid direction";
    }
    return whatHappens;
}

function winBattle() {
    return Math.random() >= 0.5 ? true : false;
}

//#2 return value when moveCommand("forward");

//#3 return value when moveCommand("back");

//#4 return value when moveCommand("right");

//#5 return value when moveCommand("left");
 
//BONUS: practice makes perfect. Go and write your own switch function. It takes time to get used to the syntax! Eh, I'll pass on that...