const numberRegexp = /^[0-9]+$/;

// export : in this function -> other module(other file and program) can use.
// by export, what variable is declared in this file can't out this file.
// So, if you want to use in this file, you have to use import like index.ts

// default : who person use this function can make function name
export default function (s: string) {
    // test method is in Regexp.
    return s.length === 5 && numberRegexp.test(s);
}