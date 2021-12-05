const fs = require("fs");
const data = fs
    .readFileSync("input.txt", "utf-8")
    .split("\n")
    .map((el) => el.split("->"))
    .map((el) =>
        el.map((x) =>
            x
                .trim()
                .split(",")
                .map((y) => parseInt(y))
        )
    );

const getRowColumns = (data) => {
    return data.reduce(
        (size, coords) => {
            coords.forEach((point) => {
                const x = point[0];
                const y = point[1];

                size.x = size.x <= x ? x : size.x;
                size.y = size.y <= y ? y : size.y;
            });
            return size;
        },
        { x: 0, y: 0 }
    );
};

const buildTable = (size) => {
    const table = [];
    for (let i = 0; i <= size.y; i++) {
        table.push(Array(size.x + 1).fill(0));
    }

    return table;
};

const markTable = (coords, table) => {
    const [point1, point2] = coords;
    const xDifference = point1[0] - point2[0];
    const yDifference = point1[1] - point2[1];

    if (xDifference === 0 || yDifference === 0) {
        //end
        const line = [];
        if (xDifference) {
            for (let i = 0; i < Math.abs(xDifference) + 1; i++) {
                const x = point1[0] - (xDifference * i) / Math.abs(xDifference);
                const y = point1[1];
                line.push([x, y]);
            }
        } else if (yDifference) {
            for (let i = 0; i < Math.abs(yDifference) + 1; i++) {
                const x = point1[0];
                const y = point1[1] - (yDifference * i) / Math.abs(yDifference);
                line.push([x, y]);
            }
        }
        line.forEach((coord) => {
            coord;
            const x = coord[0];
            const y = coord[1];
            table[y][x] += 1;
        });
    } else {
        //end
    }
};

const size = getRowColumns(data);
const table = buildTable(size);

for (let i = 0; i < data.length; i++) {
    const coords = data[i];
    markTable(coords, table);
}
let points = 0;
table.map((row) =>
    row.forEach((el) => {
        if (el >= 2) points += 1;
    })
);
points;
