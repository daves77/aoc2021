const fs = require("fs");

const data = fs.readFileSync("test.txt", "utf-8").split("\n");

const getDecimal = (report, reverse = false) => {
    for (let i = 0; i < data[0].length; i++) {
        const bitWithHighestFreq = report
            .map((numbers) => numbers[i])
            //using reduce to get the el with the highest occurance within the array
            .reduce((previous, current, i, arr) => {
                const prevCount = arr.filter((el) => el === previous).length;
                const currCount = arr.filter((el) => el === current).length;
                if (reverse) return prevCount < currCount ? previous : current;
                return prevCount > currCount ? previous : current;
            });
        report = report.filter((numbers) => numbers[i] === bitWithHighestFreq);
    }

    return parseInt(...report, 2);
};

const oxygen = getDecimal(data);
const co2 = getDecimal(data, true);
oxygen;
co2;
console.log(oxygen * co2);
