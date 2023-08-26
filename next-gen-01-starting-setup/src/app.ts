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

// const add = (a: number, b: number = 1) => a + b; //if there is one expression, there is an implicit return, dont need curly braces
// console.log(add(2, 5));

const printOutput = (output: string | number) => console.log(output);

const button = document.querySelector("button");

if (button) {
  button.addEventListener("click", (event) => console.log(event)); //take advantage of short and concise arrow function syntax
}

// printOutput(add(5));

const hobbies = ["Sports", "cooking"];
const activeHobbies = ["Hiking", ...hobbies];

activeHobbies.push(...hobbies); //tells JavaScript to pull out all the elements of the array, and add them as a list of individual values in the place that you use the operator

const person = {
  name: "Max",
  age: 30,
};

const copiedPerson = {
  ...person, //actually copies the values instead of making a new reference to the pointer in memory
};

const add = (...numbers: number[]) => {
  //can be used with tuples too, if you know how many arguments you want to accept
  return numbers.reduce((currResult, curValue) => {
    return currResult + curValue;
  }, 0);
}; //'rest' paramaters...numbers will merge all numbers into an array (all parameters will be accepted)

const addedNumbers = add(5, 10, 2, 3.7);
console.log(addedNumbers);
