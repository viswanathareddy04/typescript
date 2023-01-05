"use strict";
function add1(n1, n2) {
    return n1 + n2;
}
// Like kind of assigning function to Function
let aliasFunction = add1;
// Kind of Lambda Functions in Typescript
let anotherLambdaFunction = (n1) => console.log(n1);
anotherLambdaFunction(12);
console.log(aliasFunction(10, 20));
//callback function example
function callBackExample(n1, n2, callback) {
    callback(n1 + n2);
}
callBackExample(25, 22, (result) => { console.log(result); });
