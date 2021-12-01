export const countTrees = (right, down) => {
  const fs = require("fs");

  const lines = fs
    .readFileSync("day3.txt", { encoding: "utf-8" })
    .split("\n")
    .filter((x) => x);

  let trees = 0;
  let x = 0;

  for (let i = down; i < lines.length; i += down) {
    x += right;
    if (lines[i][x] === "#") {
      trees++;
    }

    if (x === 30) {
      x = -1;
    } else if (x + right > 30) {
      x = -1 - (30 - x);
    }
  }

  return trees;
};
