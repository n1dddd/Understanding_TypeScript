/*
function add(n1, n2) { example function in vanilla js, not breaking
  return n1 + n2;
}

const number1 = 5;
const number2 = 2.8;

const result = add(number1, number2);
console.log(result);


function add(n1, n2) {
  return n1 + n2;
}

const number1 = "5";
const number2 = 2.8;

const result = add(number1, number2);
console.log(result);

breaks the result, JavaScript recieves a string,
so converts number2 to a string as well, and
concatenates and returns string (because it recieved 1 string);


function add(n1: number, n2: number) {
  //adding type assignments ensures that function returns and expected value
  if (typeof n1 !== "number" && typeof n2 !== "number") {
    throw new Error("Incorrect Input");
  }
  return n1 + n2;
}

const number1 = "5"; //would not compile if 5 was a string
const number2 = 2.8;

const result = add(number1, number2);
console.log(result);

Down side f using a forced validation is that you can only
  find the bug during runtime--typescript will throw a
  compilation warning

  JavaScript is dynamically typed, meaning you can set a
  varialbe to a number initially, but later on change
  that variable to a string and be perfectly fine --
  why there is a typeof operator if code depends on a certain
  type.

  TypeScript is statically typed, variables are declared
  hands on during development. This is to ensure consistency,
  and making sure that you are clear in what type of type data
  should be.
*/
function add(n1, n2, showResult, phrase) {
    //added a boolean type
    // if (typeof n1 !== "number" && typeof n2 !== "number") {
    //   throw new Error("Incorrect Input");
    // }
    var result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
var number1 = 5;
var number2 = 2.8;
var printResult = true;
var resultPhrase = "Result is";
add(number1, number2, printResult, resultPhrase);
