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

/*breaks the result, JavaScript recieves a string,
so converts number2 to a string as well, and
concatenates and returns string (because it recieved 1 string);
*/
function add(n1, n2) {
    //adding type assignments ensures that function returns and expected value
    return n1 + n2;
}
var number1 = 5; //would not compile if 5 was a string
var number2 = 2.8;
var result = add(number1, number2);
console.log(result);
