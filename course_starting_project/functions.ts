// function add(n1: number, n2: number): number {
//   //explicity define the return type --although you should let TypeScript infer the type
//   return n1 + n2;
// }

function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number) {
  //void return type as function does not return anything
  console.log("Result" + num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

printResult(add(5, 12)); //will yield undefined because return is void

let combineValues: (a: number, b: number) => number; //combineValues accepts any function that takes two parameters that are numbers, and returns a number

combineValues = add;
// combineValues = printResult; //just declaring the type function will still allow the pointer to be reassigned to a different function
// combineValues = 5; //due to type 'any', you can change the value of combineValues and break the code

console.log(combineValues(8, 8)); //can store a pointer to a function in a variable

addAndHandle(10, 20, (result) => {
  //advantage of defining the callback function definition, TypeScript is able to infer what type result is
  console.log(result);
});
