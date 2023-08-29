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

function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    //this if statement is a type guard, allowing for flexible use of using union types -- needs to still explicitly define what you want to do with the parameters in regards to the return type
    return a.toString() + b.toString();
  }
  return a + b;
}
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
