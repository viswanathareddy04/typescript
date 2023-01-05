function add(n1: number, n2: number): number {
  return n1 + n2;
}
// Like kind of assigning function to Function
let aliasFunction: Function = add;

// Kind of Lambda Functions in Typescript
let anotherLambdaFunction = (n1: number) => console.log(n1);
anotherLambdaFunction(12);

console.log(aliasFunction(10, 20));

//callback function example
function callBackExample(n1: number, n2: number , callback: (result: number) => void){
  callback(n1+n2);
}

callBackExample(25, 22, (result) => {console.log(result)});