const fs = require("fs");

const data = fs
    .readFileSync("input.txt", "utf-8")
    .split("\n")
    .map((x) => parseInt(x));

let totalIncreased = 0;
for (let i = 1; i < data.length; i++) {
    if (data[i] > data[i - 1]) {
        totalIncreased += 1;
    }
}

console.log(totalIncreased);
