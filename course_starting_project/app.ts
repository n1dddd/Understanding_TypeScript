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

console.log(printResult(add(5, 12))); //will yield undefined because return is void
