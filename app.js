//object
var person = { name: "Viswa", age: 30 };
// Enum
var Access;
(function (Access) {
    Access[Access["ADMIN"] = 0] = "ADMIN";
    Access[Access["READ_ONLY"] = 1] = "READ_ONLY";
    Access[Access["AUTHOR"] = 2] = "AUTHOR";
})(Access || (Access = {}));
;
var person2 = {
    name: "Reddy",
    age: 20,
    // String[]
    hobbies: ["Sports", "Cooking"],
    // Tuple
    role: [1, "admin"],
    access: Access.ADMIN
};
// Union Type
function combine(n1, n2) {
    return n1 + n2;
}
console.log(person);
console.log(person2.name);
console.log(person2.access);
console.log(combine(23, 22));
console.log(combine("Viswanatha", "Reddy"));
