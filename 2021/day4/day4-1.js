const fs = require("fs");

const lines = fs.readFileSync("input.txt", { encoding: "utf-8" }).split("\n");
// .filter((x) => x);

const numbers = fs
  .readFileSync("numbers.txt", { encoding: "utf-8" })
  .split("\n");

const bingoCards = [];

const func = (arg, foo) => {
  bingoCards[arg] = [];
  test[foo] = [];
  bingoCards[arg].push(lines[arg]);

  // console.log(arg,": ", bingoCards)
  bingoCards[arg] = bingoCards[arg][0].split(" ");

  if (bingoCards[arg].length > 1) {
    bingoCards[arg] = bingoCards[arg].filter((elem) => elem !== "");
  }

  if (arg < lines.length - 1) {
    func(arg + 1);
  }
};

func(0, 0);

console.log(bingoCards);
