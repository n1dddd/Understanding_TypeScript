// function add(n1: number, n2: number): number {
//   //explicity define the return type --although you should let TypeScript infer the type
//   return n1 + n2;
// }
function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log("Result" + num);
}
printResult(add(5, 12));
