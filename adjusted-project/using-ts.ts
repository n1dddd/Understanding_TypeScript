/*
Install the compiler -- npm install -g typescript.
This is needed to compile typescript file types to
executable JavaScript code.
 */


const button = document.querySelector("button");
const input1 = document.getElementById("num1")! as HTMLInputElement; //adding a '!' reassures typescript that the element will never be null
const input2 = document.getElementById("num2")! as HTMLInputElement; //Type casting

function add(num1: number, num2: number) { //assigning the arguments to type number when they are imported into the function)
  return num1 + num2;
}

button!.addEventListener("click", function() {
  console.log(add(+input1.value, +input2.value)); //
});
