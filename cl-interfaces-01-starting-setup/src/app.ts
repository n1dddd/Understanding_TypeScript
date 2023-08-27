class Department {
  name: string; //this is a field of a class - defines the key in the object
  private employees: string[] = []; //accessible only to the method acting on the class -- cant access it by explicitly setting a value to the class
  constructor(n: string) {
    //reserved keyword - function tied to the class or object created by the class
    this.name = n;
  }

  describe(this: Department) {
    //when describe is executed, 'this' should always refer to an instance that is based on the department class
    console.log("Department: " + this.name);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department("Accounting");
accounting.addEmployee("Max");
accounting.addEmployee("Daniel");

// accounting.employees[2] = "Anna";

// const accountingCopy = { name: "s", describe: accounting.describe };

accounting.describe();
accounting.name = "NEW NAME";
accounting.printEmployeeInformation();
// accountingCopy.describe(); //error here, because describe is being called on a copy of the accounting copy -- which has no name class, so this doesnt work
