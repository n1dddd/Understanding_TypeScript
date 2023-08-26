let appId = "abc";

const button = document.querySelector("button")!; //'!' syntax tells TypeScript that you know that the button element will not be null

function add(n1: number, n2: number) {
  if (n1 + n2 > 0) {
    return n1 + n2;
  }
}
// button.addEventListener("click", () => {
//   console.log("Clicked");
// });

function clickHandler(message: string) {
  let userName = "Max";
  console.log("Clicked! " + message);
}

if (button) {
  button.addEventListener("click", clickHandler.bind(null, "You're welcome!"));
}
