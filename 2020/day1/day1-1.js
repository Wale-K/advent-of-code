const fs = require("fs");

const lines = fs
  .readFileSync("input.txt", { encoding: "utf-8" })
  .split("\n")
  .filter((x) => x);

let arr = [];

lines.forEach((line) => arr.push(Number(line)));

let currentIndex = 0;

const answer = () => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] + arr[currentIndex] === 2020) {
      return arr[i] * arr[currentIndex];
    } else if (i === 199) {
      currentIndex++;
      i = 0;
    }
  }
};

console.log(answer());
