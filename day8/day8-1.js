const fs = require("fs");

const lines = fs
  .readFileSync("puzzle.txt", { encoding: "utf-8" })
  .split("\n")
  .filter((x) => x);

let alreadyRunIndices = [];
let accTotal = 0;

const gameInstructions = lines.map((line) => {
  line = line.split(" ");
  line[1] = Number(line[1]);
  return line;
});
for (let i = 0; i < gameInstructions.length; i++) {
  if (alreadyRunIndices.includes(i)) {
    break;
  }
  alreadyRunIndices.push(i);

  if (gameInstructions[i][0] === "acc") {
    accTotal += gameInstructions[i][1];
  } else if (gameInstructions[i][0] === "jmp") {
    i += gameInstructions[i][1] - 1;
  }
}

console.log("acc:", accTotal);
