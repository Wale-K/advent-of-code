const fs = require("fs");

const lines = fs
  .readFileSync("day3.txt", { encoding: "utf-8" })
  .split("\n")
  .filter((x) => x);

let trees = 0;
let x = 0; // the x axis coordinate of the forest

for (let i = 1; i < lines.length; i++) {
  x += 3;
  if (lines[i][x] === "#") {
    trees++;
  }

  if (x === 30) {
    x = -1;
  } else if (x === 29) {
    x = -2;
  } else if (x === 28) {
    x = -3;
  }
}

console.log("trees:", trees);
