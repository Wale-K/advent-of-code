const fs = require("fs");

const lines = fs.readFileSync("input.txt", { encoding: "utf-8" }).split("\n");

const shapes = {
  A: { selection: "rock" },
  B: { selection: "paper" },
  C: { selection: "scissors" },
  X: { score: 1, outcomes: { rock: 3, paper: 0, scissors: 6 } },
  Y: { score: 2, outcomes: { rock: 6, paper: 3, scissors: 0 } },
  Z: { score: 3, outcomes: { rock: 0, paper: 6, scissors: 3 } },
};

let points = 0;

lines.forEach((line) => {
  const compare = shapes[line[0]].selection;

  points += shapes[line[2]].score;
  points += shapes[line[2]].outcomes[compare];
});

console.log(points);
