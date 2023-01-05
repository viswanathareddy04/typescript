"use strict";
function add(n1, n2, showResult, phraseString) {
    if (showResult) {
        console.log(phraseString + (n1 + n2));
    }
    return n1 + n2;
}
const number1 = 5;
const number2 = 10;
let printResult = true;
let phraseString = "Result is :";
const result = add(number1, number2, printResult, phraseString);
console.log(result);
