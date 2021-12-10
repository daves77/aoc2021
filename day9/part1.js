const fs = require("fs");
const data = fs
    .readFileSync("input.txt", "utf-8")
    .split("\n")
    .map((el) => el.split(""));

data;

const riskLevels = [];
for (let i = 0; i < data.length; i++) {
    const row = data[i];
    for (let j = 0; j < row.length; j++) {
        const left = row[j - 1] ?? Infinity;
        const right = row[j + 1] ?? Infinity;
        const down = data[i + 1]?.[j] ?? Infinity;
        const up = data[i - 1]?.[j] ?? Infinity;

        const center = row[j];
        if (left > center && right > center && down > center && up > center) {
            riskLevels.push(Number(center) + 1);
        }
    }
}
const riskTotal = riskLevels.reduce((curr, prev) => (curr += prev));
console.log(riskTotal);
