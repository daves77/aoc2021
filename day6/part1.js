const fs = require("fs");

const fishes = fs
    .readFileSync("input.txt", "utf-8")
    .split(",")
    .map((el) => parseInt(el));

const reduceDay = (fishes) => fishes.map((fish) => fish - 1);

const checkForFishSpawn = (fishes) => {
    //check if fishe age == 0
    // if 0 then add one fish and check if new, if new change to false then reduce spawn days
    let newFishes = [];
    fishes.forEach((fish) => {
        if (fish === 0) {
            const newBornFish = 9;
            newFishes.push(newBornFish);
            fish = 7;
            newFishes.push(fish);
        } else {
            newFishes.push(fish);
        }
    });

    return newFishes;
};

let newFish = [...fishes];
for (let i = 0; i < 80; i++) {
    newFish = checkForFishSpawn(newFish);
    newFish = reduceDay(newFish);
}
console.log(newFish.length);
