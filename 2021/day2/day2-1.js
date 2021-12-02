const fs = require("fs");

const lines = fs
  .readFileSync("input.txt", { encoding: "utf-8" })
  .split("\n")
  .filter((x) => x);

  let forward = 0;
  let depth = 0;
  
  lines.forEach((line) => {
    if (line.includes("forward")) {
      line = Number(line.split("forward").join(""))
      forward += line
    } else if (line.includes("down")) {
      line = Number(line.split("down").join(""))
      depth += line
    } else {
      line = Number(line.split("up").join(""))
      depth -= line
    }
  })

  console.log(forward * depth)