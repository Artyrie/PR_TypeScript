let list = [4, 5, 6];

// index number
for (let i in list) {
    console.log(i); // "0", "1", "2"
}

// index value
for (let i of list) {
    console.log(i); // "4", "5", "6"
}