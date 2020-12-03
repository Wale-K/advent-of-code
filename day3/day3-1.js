const fs = require("fs");

const lines = fs
  .readFileSync("day3.txt", { encoding: "utf-8" })
  .split("\n")
  .filter((x) => x);

// count rows
// count columns
// don't try to count both together.
// simplify things.

// lines       - the entire input
// lines[0]    - the first line
// lines[0][1] - the first element in the line.

let trees = 0;
let x = 3;
let y = 1;
let buffer;

for (let i = 1; i < lines.length; i++) {
  console.log("line:", y, "x:", x, "-->", lines[y][x]);

  if (lines[y][x] === "#") {
    trees++;
  }

  y++;

  x += 3;
  if (x === 30) {
    x = 0;
  } else if (x === 29) {
    x = -2;
  } else if (x === 28) {
    x = -3;
  }
}

console.log("trees:", trees);
