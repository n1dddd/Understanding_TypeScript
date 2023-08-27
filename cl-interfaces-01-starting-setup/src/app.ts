class Department {
  //   private name: string; //this is a field of a class - defines the key in the object
  private employees: string[] = []; //accessible only to the method acting on the class -- cant access it by explicitly setting a value to the class

  constructor(private readonly id: string, public name: string) {
    //reserved keyword - function tied to the class or object created by the class
    //'readonly' was added by TypeScript -- value initialized once and cannot be written to
    this.name = name;
  }

  describe(this: Department) {
    //when describe is executed, 'this' should always refer to an instance that is based on the department class
    console.log(`Department ${this.id} : ${this.name}`);
  }

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
}

class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
  }

  addReport(text: string) {
    this.reports.push(text);
  }

  printReports() {
    console.log(this.reports);
  }
}

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

accounting.addReport("Something went wrong");

accounting.printReports();

// accountingCopy.describe(); //error here, because describe is being called on a copy of the it copy -- which has no name class, so this doesnt work
