const fs = require("fs");

const data = fs.readFileSync("test.txt", "utf-8").split(",").map(Number);

let leastFuelUsed;
for (let i = 0; i < data.length; i++) {
    const position = data[i];
    const totalFuelUsed = data.reduce((sum, curr) => {
        return (sum += Math.abs(curr - position));
    }, 0);
    if ((leastFuelUsed && leastFuelUsed > totalFuelUsed) || i === 0) {
        leastFuelUsed = totalFuelUsed;
    }
}

console.log(leastFuelUsed);
