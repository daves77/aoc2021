const fs = require("fs");

const data = fs
    .readFileSync("input.txt", "utf-8")
    .split("\n")
    .map((x) => parseInt(x));

let totalIncreased = 0;
for (let i = 0; i < data.length - 1; i++) {
    const current = data.slice(i, i + 3).reduce((a, b) => a + b, 0);
    const next = data.slice(i + 1, i + 4).reduce((a, b) => a + b, 0);

    if (next > current) totalIncreased += 1;
}

console.log(totalIncreased);
