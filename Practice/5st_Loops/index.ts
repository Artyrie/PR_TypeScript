var i:number = 1;

while (i <= 10) {
    console.log(i);

    if (i % 5 == 0) {
        console.log("The first multiple of 5 between 1 and 10 is : " + i);
        // break out this while
        break;
    }
    i++;
}

console.log("the end");

var num:number = 0;
var count:number = 0;

for(num=0; num<=20; num++){
    if (num % 2 == 0) {
        // move next loops -> don't work after continue in loops
        // => don't work count++ / console.log
        continue
    }
    count++
    console.log(num);
}
console.log(" The count of odd values between 0 and 20 is : " + count);
