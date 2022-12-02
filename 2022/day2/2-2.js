const fs = require("fs");

const lines = fs.readFileSync("input.txt", { encoding: "utf-8" }).split("\n");

const shapes = {
  A: { selection: "rock", win: 2, loss: 3, draw: 1 },
  B: { selection: "paper", win: 3, loss: 1, draw: 2 },
  C: { selection: "scissors", win: 1, loss: 2, draw: 3 },
  X: { score: 0, kettei: "loss" },
  Y: { score: 3, kettei: "draw" },
  Z: { score: 6, kettei: "win" },
};

let points = 0;

lines.forEach((line) => {
  const result = shapes[line[2]].kettei;

  points += shapes[line[2]].score;
  points += shapes[line[0]][result];
});

console.log(points);
