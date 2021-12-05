const { match } = require("assert");
const fs = require("fs");
const test = "test";

const data = fs.readFileSync("input.txt", "utf-8").split("\n");

const numberPool = data[0].split(",").map((el) => parseInt(el));

//creating a list of 2d tables
const tableRows = data
    .slice(1)
    .filter((el) => el !== "")
    .map((el) => el.split(" "))
    .map((el) => el.filter((x) => x !== ""))
    .map((el) => el.map((x) => parseInt(x)));

const tables = [];
for (let i = 0; i < tableRows.length; i += 5) {
    const table = tableRows.slice(i, i + 5);
    tables.push(table);
}

const allEqual = (arr) => arr.every((el) => el === arr[0]);

const checkColumns = (table) => {
    for (let i = 0; i < table.length; i++) {
        const row = table[i];
        const column = [];
        for (let j = 0; j < row.length; j++) {
            column.push(table[j][i]);
        }
        if (allEqual(column)) {
            return true;
        }
    }
};

const checkRows = (table) => {
    for (let i = 0; i < table.length; i++) {
        const row = table[i];
        if (allEqual(row)) {
            return true;
        }
    }
};

const calculateSumOfTable = (table) => {
    console.log(table);
    let total = 0;
    for (let i = 0; i < table.length; i++) {
        const row = table[i];
        total += row.reduce((sum, number) => {
            sum += number !== -1 ? number : 0;
            return sum;
        }, 0);
    }

    return total;
};

const findWinner = () => {
    for (let i = 0; i < numberPool.length; i++) {
        const number = numberPool[i];
        for (let j = 0; j < tables.length; j++) {
            if (tables[j]) {
                loop: for (let k = 0; k < tables[j].length; k++) {
                    const row = tables[j][k];
                    if (row.includes(number)) {
                        const index = row.indexOf(number);
                        row.splice(index, 1, -1);

                        const match =
                            checkRows(tables[j]) || checkColumns(tables[j]);

                        if (match) {
                            const filteredTables = tables.filter(
                                (table) => table
                            );
                            if (filteredTables.length > 1) {
                                tables[j] = null;
                                break loop;
                            } else {
                                return { table: filteredTables[0], number };
                            }
                        }
                    }
                }
            }
        }
    }
};

const { table, number } = findWinner();
console.log(calculateSumOfTable(table) * number);
