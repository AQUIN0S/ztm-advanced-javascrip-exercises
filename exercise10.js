const basket = ['apples', 'oranges', 'grapes'];
const detailedBasket = {
    apples: 5,
    oranges: 10,
    grapes: 1000
};

//1
for (let i = 0; i < basket.length; i++) {
    console.log(basket[i]);
}

//2
basket.forEach(item => {
    console.log(item);
});

for (let item in detailedBasket) {
    console.log(item);
}

for (let item of basket) {
    console.log(item);
}

// Question #1:
// create a function called biggestNumberInArray() that takes
// an array as a parameter and returns the biggest number.
// biggestNumberInArray([-1,0,3,100, 99, 2, 99]) should return 100;
// Use at least 3 different types of javascript loops to write this:
const array = [-1,0,3,100, 99, 2, 99]; // should return 100
const array2 = ['a', 3, 4, 2]; // should return 4
const array3 = []; // should return 0

const arrayOfArrays = [array, array2, array3];

function biggestNumberInArray(arr) {
    let largestItem = Number.MIN_VALUE;
    arr.forEach(item => {
        largestItem = item > largestItem ? item : largestItem;
    });
    return largestItem === Number.MIN_VALUE ? 0 : largestItem;
}

function biggestNumberInArray2(arr) {
    let largestItem = Number.MIN_VALUE;
    for (let item in arr) {
        if (arr.hasOwnProperty(item)) {
            largestItem = arr[item] > largestItem ? arr[item] : largestItem;
        }
    }
    return largestItem === Number.MIN_VALUE ? 0 : largestItem;
}

function biggestNumberInArray3(arr) {
    let largestItem = Number.MIN_VALUE;
    for (let item of arr) {
        largestItem = item > largestItem ? item : largestItem;
    }
    return largestItem === Number.MIN_VALUE ? 0 : largestItem;
}

for (let array of arrayOfArrays) {
    console.log(`First function with ${array}: `.padEnd(50), `${biggestNumberInArray(array)}`);
    console.log(`Second function with ${array}:`.padEnd(50), `${biggestNumberInArray2(array)}`);
    console.log(`Third function with ${array}: `.padEnd(50), `${biggestNumberInArray3(array)}`);
}


// Question #2:
// Write a function checkBasket() that lets you know if the item is in the basket or not
amazonBasket = {
    glasses: 1,
    books: 2,
    floss: 100
};

// The below is ONE way of doing it, using a for:in loop

// function checkBasket(basket, lookingFor) {
//     for (let item in basket) {
//         if (basket.hasOwnProperty(item)) {
//             if (item === lookingFor && basket[item] > 0) {
//                 return true;
//             }
//         }
//     }
//     return false;
// }

// However, I think there's a better way of doing it:

function checkBasket(basket, lookingFor) {
    return basket.hasOwnProperty(lookingFor) && basket[lookingFor] > 0;
}

console.log(`There's glasses in the basket:`.padEnd(50), checkBasket(amazonBasket, "glasses"));
console.log(`There's books in the basket:`.padEnd(50), checkBasket(amazonBasket, "books"));
console.log(`There's pants in the basket:`.padEnd(50), checkBasket(amazonBasket, "pants"));
