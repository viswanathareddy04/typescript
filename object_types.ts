//object
let person: object = { name: "Viswa", age: 30 };

// Enum
enum Access {'ADMIN', 'READ_ONLY', 'AUTHOR'};

//object or class
type human = {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
  //Enum
  access: Access
} 


let person2: human
  = {
  name: "Reddy",
  age: 20,
  // String[]
  hobbies: ["Sports", "Cooking"],
  // Tuple
  role: [1, "admin"],
  access: Access.ADMIN
};


// Aliases for union
type combinable = number | string;

// Union Type
function combine(n1: combinable, n2: number | string): number | string {
    return n1 + n2;
  }

console.log(person);
console.log(person2.name);
console.log(person2.access)
console.log(combine(23, 22))
console.log(combine("Viswanatha", "Reddy"))
