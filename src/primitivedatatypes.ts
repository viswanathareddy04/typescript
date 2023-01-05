function add(n1: number, n2: number, showResult: boolean, phraseString: string): number {
  if (showResult) {
    console.log(phraseString + (n1 + n2));
  }
  return n1 + n2;
}

const number1 = 5;
const number2 = 10;
let printResult: boolean = true;
let phraseString: string = "Result is :";

const result = add(number1, number2, printResult, phraseString);
console.log(result);
