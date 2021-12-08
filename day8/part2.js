const fs = require("fs");

const data = fs
    .readFileSync("input.txt", "utf-8")
    .split("\n")
    .map((el) => el.trim().split("|"))
    .map((el) => el.map((x) => x.trim()));
