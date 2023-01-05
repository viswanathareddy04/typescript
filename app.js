function add(n1, n2, showResult, phraseString) {
    if (showResult) {
        console.log(phraseString + (n1 + n2));
    }
    return n1 + n2;
}
var number1 = 5;
var number2 = 10;
var printResult = true;
var phraseString = "Result is :";
var result = add(number1, number2, printResult, phraseString);
console.log(result);
