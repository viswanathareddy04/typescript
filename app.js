function add(n1, n2) {
    return n1 + n2;
}
// Like kind of assigning function to Function
var aliasFunction = add;
// Kind of Lambda Functions in Typescript
var anotherLambdaFunction = function (n1) { return console.log(n1); };
anotherLambdaFunction(12);
console.log(aliasFunction(10, 20));
function callBackExample(n1, n2, callback) {
    callback(n1 + n2);
}
callBackExample(25, 22, function (result) { console.log(result); });
