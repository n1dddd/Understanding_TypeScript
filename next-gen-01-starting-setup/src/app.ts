interface Greetable {
  //interfaces define the structure of an object
  readonly name: string; //readonly lets the property be set once, and cannot be changed after the object has been initialized
  //properties and declaration of type of property
  age: number;

  greet(phrase: string): void;
}

class Person implements Greetable {
  //can inherit multiple interfaces
  name: string;
  age = 30;

  constructor(n: string) {
    this.name = n;
  }

  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  }
}

let user1: Greetable;

user1 = new Person("Max");

// user1 = {
//   //satisfies the requirements of the interface
//   name: "Max",
//   age: 29,
//   greet(phrase: string) {
//     console.log(phrase + this.name);
//   },
// };
console.log(user1);
user1.greet("Hi there I am ");

//difference between an interface and custom type is interfaces are strictly to defining object types -- both are interchangeable but have their use cases
//An interface can be implemented into a class. Interfaces can be used as a contract that a class can have implemented, and then it has to adhere to.
//Interfaces enforce structure to classes -- forcing the 'implement' keyword on a class enforces you to have the declared structure -- dont care about user1 or what values it has, only care that it must have the greet method
