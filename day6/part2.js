const fs = require("fs");

const fishes = fs
    .readFileSync("input.txt", "utf-8")
    .split(",")
    .map((el) => parseInt(el));

const fishCount = Array(9).fill(0);

fishes.forEach((fish) => {
    fishCount[fish] += 1;
});

for (let i = 0; i < 256; i++) {
    const spawningFish = fishCount[0];
    for (let k = 1; k < fishCount.length; k++) {
        fishCount[k - 1] = fishCount[k];
    }
    fishCount[6] += spawningFish;
    fishCount[8] = spawningFish;
}
console.log(fishCount.reduce((sum, curr) => sum + curr));
