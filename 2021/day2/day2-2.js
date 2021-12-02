const fs = require("fs");

const lines = fs
  .readFileSync("input.txt", { encoding: "utf-8" })
  .split("\n")
  .filter((x) => x);

let forward = 0;
let depth = 0;
let aim = 0

lines.forEach((line) => {
  if (line.includes("forward")) {
    line = Number(line.split("forward").join(""))
    depth += (line * aim)
    forward += line
  } else if (line.includes("down")) {
    line = Number(line.split("down").join(""))
    aim += line
  } else {
    line = Number(line.split("up").join(""))
    aim -= line
  }
})

console.log("answer: ", forward * depth)