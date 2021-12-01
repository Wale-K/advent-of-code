const fs = require("fs");

const lines = fs
  .readFileSync("test.txt", { encoding: "utf-8" })
  .split("\n")
  .filter((x) => x);

let alreadyRunIndices = [];
let accTotal = 0;

const gameInstructions = lines.map((line) => {
  line = line.split(" ");
  line[1] = Number(line[1]);
  return line;
});

const func = () => {
  for (let i = 0; i < gameInstructions.length; i++) {
    const copy = gameInstructions;

    if (alreadyRunIndices.includes(i)) {
      func();
    }
    alreadyRunIndices.push(i);

    if (copy[i][0] === "acc") {
      accTotal += copy[i][1];
    } else if (copy[i][0] === "nop") {
      copy[i][1] = "jmp";
      i += gameInstructions[i][1] - 1;
    } else if (copy[i][0] === "jmp") {
      copy[i][0] = "nop";
    }
  }

  console.log("acc:", accTotal);
};

func();
