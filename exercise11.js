/*
 * Question 1
 */

const groupIdenticalItems = (array) => {
    let returnArray = [];
    // For each item
    array.reduce((accumulator, item, index) => {
        if (accumulator.length === 0 || item === accumulator[0]) {
            accumulator.push(item);
        } else if (accumulator.length === 1) {
            returnArray.push(accumulator[0]);
            accumulator = [item];
        } else {
            returnArray.push(accumulator);
            accumulator = [item];
        }
        if (index === array.length - 1) {
            returnArray.push(accumulator.length === 1 ? accumulator[0] : accumulator);
        }

        return accumulator;
    }, []);
    return returnArray;
};

const cleanTheRoom = (array) => {
    let returnArray = array.flat(Infinity);

    const isNumber = (x) => typeof x === "number" || typeof a === "bigint";
    const isString = (x) => typeof x === "string";

    const numArray = returnArray.filter(isNumber).sort((a, b) => a - b);
    const strArray = returnArray.filter(isString).sort();
    const objArray = returnArray.filter((x) => !(isNumber(x) || isString(x))).sort(
        (a, b) => Object.entries(a).toString().localeCompare(Object.entries(b).toString())
    );

    returnArray = [];

    if (numArray.length > 0) {
        returnArray.push(groupIdenticalItems(numArray));
    }
    if (strArray.length > 0) {
        returnArray.push(groupIdenticalItems(strArray));
    }
    if (objArray.length > 0) {
        returnArray.push(groupIdenticalItems(objArray));
    }

    return returnArray.length === 1 ? returnArray.flat(1) : returnArray;
};

const testArray = [1, {bloop: "a"}, {raar: 1}, 2, "10", {a:"b"}, 4, "2", 591, 392, "1", 391, "25", "abc", 2, 5, 10, 2, "1", 1, 1, 1, "10", 20, 20];
const testNumArray = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20];

console.log(`cleanTheRoom(testArray)`, cleanTheRoom(testArray));
console.log(`cleanTheRoom(testNumArray)`, cleanTheRoom(testNumArray));

/*
 * Question 2
 */

const addToTarget = (array, target) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (i !== j) {
                if (array[i] + array[j] === target) {
                    return [array[i], array[j]];
                }
            }
        }
    }
    console.warn("No valid pairs");
    return [];
};

console.log("addToTarget(testNumArray, 611)", addToTarget(testNumArray, 611));
console.log("addToTarget(testNumArray, 610)", addToTarget(testNumArray, 610));

const rgbToHex = function (rgb) {
    let hex = Number(rgb).toString(16).toUpperCase();
    if (hex.length < 2) {
        hex = "0" + hex;
    }
    return hex;
};

const toggleHexRgb = (color) => {
    const hexRegex = /^#?[\da-fA-F]{6}$/g;
    const rgbRegex = /^rgb[(](\s*\d{1,3}\s*,){2}\s*\d{1,3}\s*[)]$/g;
    if (hexRegex.test(color)) {
        const valueStart = color.length === 6 ? 0 : 1;
        return `rgb(${parseInt(color.substring(valueStart, valueStart + 2), 16)}, ${parseInt(color.substring(valueStart + 2, valueStart + 4), 16)}, ${parseInt(color.substring(valueStart + 4, valueStart + 6), 16)})`;
    } else if (rgbRegex.test(color)) {
        const valueRegex = /\b\d{1,3}\b/g;
        let values = color.match(valueRegex);
        values = values.map((item) => Number.parseInt(item));
        let hexValue = "#";
        try {
            values.forEach((item) => {
                if (item > 255) {
                    throw "Invalid color values";
                }
                hexValue = hexValue.concat(rgbToHex(item));
            });
        } catch (e) {
            console.error(e);
            return "";
        }
        return hexValue;
    }
    console.error("Can't detect color");
    return "";
};

console.log(toggleHexRgb("#000000"));
console.log(toggleHexRgb("FFFFFF"));
console.log(toggleHexRgb("00FF00"));
console.log(toggleHexRgb("00FF0"));
console.log(toggleHexRgb("#80FAb0"));