const fs = require("fs");

const lines = fs
  .readFileSync("input.txt", { encoding: "utf-8" })
  .split("\n")
  .filter((x) => x);

let arr = [];

lines.forEach((line) => arr.push(Number(line)));

let firstIndex = 0;
let secondIndex = 0;

const answer = () => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] + arr[firstIndex] + arr[secondIndex] === 2020) {
      return arr[i] * arr[firstIndex] * arr[secondIndex];
    }
    if (firstIndex === 199) {
      secondIndex++;
      firstIndex = 0;
    }
    if (i === 199) {
      firstIndex++;
      i = 0;
    }
  }
};

console.log(answer());
