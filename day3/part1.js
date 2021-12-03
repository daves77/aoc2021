const fs = require("fs");

const data = fs.readFileSync("input.txt", "utf-8").split("\n");

let gamma = "";
//iterating through the number of el in one string
for (let i = 0; i < data[0].length; i++) {
    gamma += data
        .map((binary) => binary[i])
        //using reduce to get the el with the highest occurance within the array
        .reduce((previous, current, i, arr) => {
            if (
                arr.filter((el) => el === previous).length >
                arr.filter((el) => el === current).length
            ) {
                return previous;
            } else {
                return current;
            }
        });
}

//reversing gamma to get epsilon
const epsilon = [...gamma].map((bit) => (bit === "1" ? 0 : 1)).join("");

//converting from bit to decimal using parseInt
console.log(parseInt(gamma, 2) * parseInt(epsilon, 2));
