//Evaluate these:
//#1
console.log( [2] === [2] ); // False
console.log( {} === {});    // False

//#2 what is the value of property a for each object.
const object1 = { a: 5 };
const object2 = object1;
const object3 = object2;
const object4 = { a: 5};
object1.a = 4;

console.log(object1.a); // 4
console.log(object2.a); // 4
console.log(object3.a); // 4
console.log(object4.a); // 5

//#3 create two classes: an Animal class and a Mammal class.
// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color.

class Animal {
    constructor(species) {
        this.species = species;
    }
}

class Mammal extends Animal {
    constructor(name, species, type, color) {
        super(species);
        this.name = name;
        this.type = type;
        this.color = color;
    }

    moo() {
        console.log(`Hello, my name's ${this.name}! I'm a ${this.color.toLowerCase()} ${this.type.toLowerCase()} ${this.species.toLowerCase()}!`);
    }
}

const cow = new Mammal("Bella", "Cow", "Jersey", "Brown");
cow.moo();
