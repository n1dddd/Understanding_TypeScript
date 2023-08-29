type Admin = {
  name: string;
  privilege: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "Max",
  privilege: ["create-server"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric; //type intersection on number, so type is number (type they have in common);

function add(a: number, b: number): number; //function overloads -- allows TypeScript to infer the return type when its having a hard time
function add(a: string, b: string): string;
function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    //this if statement is a type guard, allowing for flexible use of using union types -- needs to still explicitly define what you want to do with the parameters in regards to the return type
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = add("Max", " Schwarz"); //'as string' if you dont provide the function overload;
result.split(" ");



type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log("Name " + emp.name);
  if ("privilege" in emp) {
    //
    console.log("Privileges " + emp.privilege);
  }
  if ("startDate" in emp) {
    //JavaScript only knows is emp is an object when checking typeof, in this case look for property check in object
    //
    console.log("Start Date " + emp.startDate);
  }
}

printEmployeeInformation(e1);

class Car {
  drive() {
    console.log("Driving...");
  }
}

class Truck {
  drive() {
    console.log("Driving a truck...");
  }
  loadCargo(amount: number) {
    console.log("Loading cargo..." + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    //class constructor checking using instanceof -- JavaScript understands what class constructor was used to build the object
    vehicle.loadCargo(1000);
  }
}

useVehicle(v1);
useVehicle(v2);

interface Bird {
  type: "bird"; //not a value for the type property, but a literal type -- type assignment
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: Number;
}

type Animal = Bird | Horse; //discriminated union because of 1 common property in every object that makes up that union, while making up the object

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
  }
  console.log("Moving with speed: " + speed);
}

moveAnimal({ type: "bird", flyingSpeed: 10 });

// const userInputElement = <
//   HTMLInputElement //version 1 of type casting the generic HTML element
// >document.getElementById("user-input")!;

// const userInputElement = document.getElementById(
//   "user-input"
// )! as HTMLInputElement; //version 2 of type casting -- telling TypeScript that the 'user-input' id will yield a HTMLInputElement

// userInputElement.value = "Hi there!";

const userInputElement = document.getElementById("user-input");
if (userInputElement) {
  (userInputElement as HTMLInputElement).value = "Hi there!"; //this version is an example where you are not sure if the value of the HTMLInputElement will be null (even exist);
}

interface ErrorContainer {
  // { email: 'not a valid email', username: 'must start with a character' }
  [prop: string]: string; //defining the object property types (objected constructed from ErrorContainer interface) which are strings
  //saying you don't know the exact property name, I dont know the property count, but it must have a property name that must be interpreted as a string, and a value that must be interpretted as a string
}
//don't need to known property names/amount in advance to build a modular error message container
const errorBag: ErrorContainer = {
  email: "Not a valid email",
  username: "Must start with a capital character!",
};
