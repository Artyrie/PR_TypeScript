// Doesn't make instance and implement
// implement => Action of function.
// Thus don't declare implement in function.
// Thus abstract, we can't use 'department = new Department();'
abstract class Department {
    constructor(public name: string) {}

    printName(): void {
        console.log("Department name: " + this.name);
    }

    // doesn't have implement
    abstract printMeeting(): void;
}

class AccountingDepartment extends Department {
    constructor() {
        super("Accounting and Auditing");
    }

    printMeeting(): void {
        console.log("The Accounting Department meets each Monday at 10am.");
    }

    // Parents doesn't have this function.
    // So, declare is possible but we can't use this.
    generateReports(): void {
        console.log("Generating accountung reports...");    
    }
}

let department: Department;
//Error
//department = new Department();
department = new AccountingDepartment();
department.printName();
department.printMeeting();
//Error
//department.generatingReports();