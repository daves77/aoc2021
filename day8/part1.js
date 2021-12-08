const fs = require("fs");

const data = fs
    .readFileSync("input.txt", "utf-8")
    .split("\n")
    .map((el) => el.trim().split("|"))
    .map((el) => el.map((x) => x.trim()));

/*
1, 4, 7, 8 have unique number of segments

Number: number of segments
0: 6
1: 2
2: 5
3: 5
4: 4
5: 5
6: 6
7: 3
8: 7
9: 6
*/

const valid = [2, 4, 3, 7];

const totalUnique = data.reduce((sum, signal) => {
    const output = signal[1];
    sum += output.split(" ").reduce((prev, segments) => {
        const length = segments.length;
        prev += valid.includes(length) ? 1 : 0;
        if (prev) {
            console.log(segments);
        }
        return prev;
    }, 0);

    return sum;
}, 0);

console.log(totalUnique);
