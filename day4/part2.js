const fs = require("fs");

const data = fs.readFileSync("test.txt", "utf-8").split("\n");

const numberPool = data[0];
const tables = data
    .slice(1)
    .filter((el) => el !== "")
    .map((el) => el.split(" "))
    .map((el) => el.filter((x) => x !== ""));
tables;
