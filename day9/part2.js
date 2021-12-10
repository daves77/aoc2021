const fs = require("fs");
const data = fs
    .readFileSync("input.txt", "utf-8")
    .split("\n")
    .map((el) => el.split("").map((el) => Number(el)));

data;

const checkAdj = (i, j, value, basinSize) => {
    if (value === 9) {
        return;
    }

    const left = data[i][j - 1] ?? 9;
    const right = data[i][j + 1] ?? 9;
    const down = data[i + 1]?.[j] ?? 9;
    const up = data[i - 1]?.[j] ?? 9;

    if (left > value && left !== 9) {
        if (!basinSize.some((el) => el[0] === i && el[1] === j - 1)) {
            basinSize.push([i, j - 1]);
        }
        checkAdj(i, j - 1, left, basinSize);
    }

    if (right > value && right !== 9) {
        if (!basinSize.some((el) => el[0] === i && el[1] === j + 1)) {
            basinSize.push([i, j + 1]);
        }
        checkAdj(i, j + 1, right, basinSize);
    }
    if (down > value && down !== 9) {
        if (!basinSize.some((el) => el[0] === i + 1 && el[1] === j)) {
            basinSize.push([i + 1, j]);
        }
        checkAdj(i + 1, j, down, basinSize);
    }
    if (up > value && up !== 9) {
        if (!basinSize.some((el) => el[0] === i - 1 && el[1] === j)) {
            basinSize.push([i - 1, j]);
        }

        checkAdj(i - 1, j, up, basinSize);
    }
};
const totalBasin = [];
const lowPoints = [];
for (let i = 0; i < data.length; i++) {
    const row = data[i];
    for (let j = 0; j < row.length; j++) {
        const left = row[j - 1] ?? Infinity;
        const right = row[j + 1] ?? Infinity;
        const down = data[i + 1]?.[j] ?? Infinity;
        const up = data[i - 1]?.[j] ?? Infinity;

        const center = row[j];

        if (left > center && right > center && down > center && up > center) {
            const basinSize = [[i, j]];
            lowPoints.push({ x: j, y: i });
            //recursive func here
            checkAdj(i, j, center, basinSize);
            basinSize;
            totalBasin.push(basinSize.length);
        }
    }
}

totalBasin.sort((a, b) => b - a);
const x = totalBasin.slice(0, 3).reduce((prev, curr) => (prev *= curr));

console.log(x);
