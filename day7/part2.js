const fs = require("fs");

const data = fs.readFileSync("input.txt", "utf-8").split(",").map(Number);

//changed from part 1 to use all positions versus positions in the data array.
//in part 1 i made the assumption that the positions in the data array would be closer than any position that exists outside of the data array
let leastFuelUsed;
for (let i = 0; i <= Math.max(...data); i++) {
    const totalFuelUsed = data.reduce((sum, curr) => {
        // for part 2 i used a addition algorithm https://getcalc.com/math-sum-natural-numbers-1-99.htm
        const distance = Math.abs(curr - i);
        const fuelCost = (distance / 2) * (1 + distance);
        return (sum += fuelCost);
    }, 0);
    totalFuelUsed;
    if (leastFuelUsed > totalFuelUsed || i === 0) {
        leastFuelUsed = totalFuelUsed;
    }
}

console.log(leastFuelUsed);
