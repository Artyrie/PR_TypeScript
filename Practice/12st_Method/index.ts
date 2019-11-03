let passcode = "secret passcode";

class Employees {
    private _fullName: string;

    // Getter Method
    // To get private property
    get fullName(): string {
        return this._fullName;
    }

    // Setter Method
    // To modify private property
    set fullName(newName: string) {
        if (passcode && passcode == "secret passcode") {
            this._fullName = newName;
        }
    }

}

let employee = new Employees();
// Can't use fullName();
// Because it used by set and get method.
// it is called by this form
employee.fullName = "Bob Smith";

console.log(employee.fullName);