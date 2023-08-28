// type AddFn = (a: number, b: number) => number;

interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => {
  return n1 + n2;
};

interface Named {
  readonly name?: string;
  output?: string; // '?'tell TypeScript that the property might exist in classes that implement this property
}

interface Greetable extends Named {
  //Merging of interfaces, can inherit from many -- forces classes to have both greetable and a name, while named is still useable on its own
  //interfaces define the structure of an object
  readonly name?: string; //readonly lets the property be set once, and cannot be changed after the object has been initialized
  //properties and declaration of type of property
  age: number;

  greet(phrase: string): void;
}

class Person implements Greetable {
  //can inherit multiple interfaces
  name?: string; //optional property in class Person
  age = 30;

  constructor(n?: string) {
    if (n) {
      this.name = n;
    }
  }

  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  }
}

let user1: Greetable;

user1 = new Person();

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
