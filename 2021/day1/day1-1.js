const fs = require("fs");

const lines = fs
  .readFileSync("input.txt", { encoding: "utf-8" })
  .split("\n")
  .filter((x) => x);
  
const func = () => {
  let answer = 0;

  lines.forEach((line, idx) => {
    if (Number(line) < Number(lines[idx + 1])) {
      answer++
    }

  })
  return answer
}