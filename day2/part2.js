const fs = require("fs");

const data = fs.readFileSync("input.txt", "utf-8").split("\n");

const coords = data.reduce(
    (coords, movement) => {
        const [direction, steps] = movement.split(" ");
        switch (direction) {
            case "forward":
                coords.horizontal += parseInt(steps);
                coords.depth += parseInt(steps) * coords.aim;
                break;
            case "up":
                coords.aim -= parseInt(steps);
                break;
            case "down":
                coords.aim += parseInt(steps);
                break;
            default:
                break;
        }

        return coords;
    },
    {
        depth: 0,
        horizontal: 0,
        aim: 0,
    }
);

console.log(coords.depth * coords.horizontal);
