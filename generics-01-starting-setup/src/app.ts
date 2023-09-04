// const names: Array<string> = [];

// const promise: Promise<number> = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(10);
//     }, 2000);
// });

// promise.then(data => {
//     data.toExponential(2); //
// })

function merge<T extends Object, U extends Object>(objA: T, objB: U) {
  return Object.assign(objA, objB); //setting constraints on our generic types
}

const mergedObj = merge(
  { name: "Max", hobbies: ["CounterStrike"] },
  { age: 30 }
);
console.log(mergedObj);

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got no Value";
  if (element.length === 1) {
    descriptionText = "Got 1 element";
  } else if (element.length > 1) {
    descriptionText = "Got " + element.length + " elements";
  }
  return [element, descriptionText];
}

console.log(countAndDescribe("Hi There!"));

//generics help with creating flexible and modular code
//Want to merge two object
//By using T & U, you assign a generic types, because you do not know what you will be receiving exactly
//By calling Object.assign you are creating a new unknown object
//You call merge by returning the intersection of T and U (both of their datas)
