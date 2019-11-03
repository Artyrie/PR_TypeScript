// user defined data type
interface LabelledValue {
    label: string;
}

// use user defined data type labelledValue
function printLabel(labelledObj: LabelledValue) {
    console.log(labelledObj.label)
    ;
}

// Why can use unexpected parameter size?
// It doesn't occur error but, can't use 'labelledObj.size' in printLabel
// Because interface LabelledValue doesn't have size.
let myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);
console.log(myObj);

interface SquareConfig {
    // variable?: type <- opional
    // exits or not exits
    // All possible.
    color?: string;
    width?: number;
}

console.log("Second Example");

// after parameter {} <- return
function createSquare(config: SquareConfig): {color: string; area: number}{
    // default value
    let newSquare = {color: "white", area: 100};
    // if color exists
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }

    return newSquare;
}

// It can work because ptional property 'width'
let mySquare = createSquare({color: "black"});
console.log(mySquare.color);
// return default value area: 100
console.log(mySquare.area);