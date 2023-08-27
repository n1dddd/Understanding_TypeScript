abstract class Department {
  //   private name: string; //this is a field of a class - defines the key in the object
  //   private employees: string[] = []; //accessible only to the method acting on the class -- cant access it by explicitly setting a value to the class
  protected employees: string[] = []; //accessible by inheritance

  constructor(protected readonly id: string, public name: string) {
    //reserved keyword - function tied to the class or object created by the class
    //'readonly' was added by TypeScript -- value initialized once and cannot be written to
    // this.name = name;
  }

  static createEmployee(name: string) {
    return { name: name };
  }

  abstract describe(this: Department): void;
  //when describe is executed, 'this' should always refer to an instance that is based on the department class
  // console.log(`Department ${this.id} : ${this.name}`);
  //empty method and adding abstract forces classes inheriting the method to create a custom method

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, "IT"); //has to be called before using 'this' to assign values to the class
    this.admins = admins;
  }

  describe() {
    console.log("IT department id: " + this.id);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("NO report found");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid value!");
    }

    this.addReport(value);
  }

  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  describe() {
    console.log("Accounting department id: " + this.id);
  }

  addEmployee(name: string) {
    if (name === "Max") {
      return;
    }
    this.employees.push(name); //private classes are only accesible in the class they are defined -- even if inherited
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}

const employee1 = Department.createEmployee("Max");
console.log(employee1);

const it = new ITDepartment("d1", ["Max"]);

it.addEmployee("Max");
it.addEmployee("Daniel");

// it.employees[2] = "Anna";

// const accountingCopy = { name: "s", describe: it.describe };

it.describe();
it.name = "NEW NAME";
it.printEmployeeInformation();

console.log(it);

const accounting = new AccountingDepartment("d2", []);

accounting.mostRecentReport = "Year End Report";

accounting.addEmployee("Max");
accounting.addEmployee("Manu");
accounting.printEmployeeInformation();

accounting.addReport("Something went wrong");

console.log(accounting.mostRecentReport);

accounting.printReports();

accounting.describe();

// accountingCopy.describe(); //error here, because describe is being called on a copy of the it copy -- which has no name class, so this doesnt work
