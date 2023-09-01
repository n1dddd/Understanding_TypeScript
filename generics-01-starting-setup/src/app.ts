// const names: Array<string> = [];

// const promise: Promise<number> = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(10);
//     }, 2000);
// });

// promise.then(data => {
//     data.toExponential(2); //
// })

function merge<T extends Object, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge(
  { name: "Max", hobbies: ["CounterStrike"] },
  { age: 30 }
);
console.log(mergedObj);

//generics help with creating flexible and modular code
//Want to merge two object
//By using T & U, you assign a generic types, because you do not know what you will be receiving exactly
//By calling Object.assign you are creating a new unknown object
//You call merge by returning the intersection of T and U (both of their datas)
