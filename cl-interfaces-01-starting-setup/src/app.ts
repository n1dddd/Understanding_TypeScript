class Department {
  name: string; //this is a field of a class - defines the key in the object

  constructor(n: string) {
    //reserved keyword - function tied to the class or object created by the class
    this.name = n;
  }

  describe(this: Department) {
    //when describe is executed, 'this' should always refer to an instance that is based on the department class
    console.log("Department: " + this.name);
  }
}

const accounting = new Department("Accounting");

const accountingCopy = { name: "s", describe: accounting.describe };

accounting.describe();
accountingCopy.describe(); //error here, because describe is being called on a copy of the accounting copy -- which has no name class, so this doesnt work
