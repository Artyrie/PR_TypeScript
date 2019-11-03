// Reduce confused big program
namespace Validation {
    export interface StringValidators {
        isAcceptables(s: string): boolean;
    }

    let lettersRegexps = /^[A-Za-z]+$/;
    let numberRegexps = /^[0-9]+$/;

    // implements? not inherit
    // but follow form
    export class LettersOnlyValidators implements StringValidators {
        isAcceptables(s: string) {
            return lettersRegexps.test(s);
        }
    }

    export class ZipCodeValidators implements StringValidators {
        isAcceptables(s: string) {
            return s.length === 5 && numberRegexps.test(s);
        }
    } 
}

let stringss = ["Hello", "98052", "101"];

let validatorss: { [s: string]: Validation.StringValidators; } = {};
validatorss["ZIP code"] = new Validation.ZipCodeValidators();
validatorss["Letter Only"] = new Validation.LettersOnlyValidators();

for (let s of stringss) {
    for (let name in validatorss) {
        let isMatch = validatorss[name].isAcceptables(s);
        console.log(`'${ s }' ${ isMatch ? "matches" : "does not match" } '${ name }'.`);
    }
}