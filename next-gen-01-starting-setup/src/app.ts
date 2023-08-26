const userName = "Max";
// userName = "Maximilian";

let age = 30; //different from var, as where the variable is available in scope

age = 29;

let result;

// function add(a: number, b: number) {
//   let result;
//   result = a + b;
//   return result;
// }

// if (age > 20) {
//   let isOld = true; //scoped within the curly braces
// }

// console.log(isOld);

const add = (a: number, b: number = 1) => a + b; //if there is one expression, there is an implicit return, dont need curly braces
console.log(add(2, 5));

const printOutput = (output: string | number) => console.log(output);

const button = document.querySelector("button");

if (button) {
  button.addEventListener("click", (event) => console.log(event)); //take advantage of short and concise arrow function syntax
}

printOutput(add(5));
