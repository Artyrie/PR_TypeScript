// global variable
var global_num = 12;

class Numbers {
    // can't write action like console.log();
    // because class has only property (variable and function)

    // class variable
    num_val = 13;
    // static field
    // call every where
    static sval = 10;

    storeNum(): void {
        // function variable
        var local_num = 14;
    }
}

console.log("Global num: " + global_num);
console.log(Numbers.sval);
var objs = new Numbers();
console.log("Class num: " + objs.num_val);
// Error : obj.sval