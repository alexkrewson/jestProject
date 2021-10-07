import { mean, min, max } from 'mathjs'


function capitalize(str) {
    const capitalStr = str.replace(/^\w/, function (c) {
        return c.toUpperCase();
    });
    return capitalStr;
}

function reverseString(str) {
    return str.split("").reverse().join("");
}

const calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    divide: (a, b) => a / b,
    multiply: (a, b) => a * b
}

//check if letter is uppercase
function isUpperCase(str) {
    return str === str.toUpperCase();
}

//decipher the string
let cipher = (str, key) => {

    const myRegex = /[^A-Za-z]/;

    if (myRegex.test(str)) {
        throw new Error('Content includes non-letters, dummy!');
    }
    let decipher = '';

    //decipher each letter
    for (let i = 0; i < str.length; i++) {

        //if letter is uppercase then add uppercase letters
        if (isUpperCase(str[i])) {
            decipher += String.fromCharCode((str.charCodeAt(i) + key - 65) % 26 + 65);
        } else {
            //else add lowercase letters
            decipher += String.fromCharCode((str.charCodeAt(i) + key - 97) % 26 + 97);
        }
    }

    return decipher;
}

const arrayAnalyzer = {
    arrMean: (arr) => mean(arr),
    arrMin: (arr) => min(arr),
    arrMax: (arr) => max(arr),
    arrLength: (arr) => arr.length


}

console.log('functionLibrary.js works')

export { calculator, capitalize, reverseString, cipher, arrayAnalyzer }