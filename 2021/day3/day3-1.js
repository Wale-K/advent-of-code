const fs = require("fs");

const lines = fs
  .readFileSync("input.txt", { encoding: "utf-8" })
  .split("\n")
  .filter((x) => x);

let one = 0;
let zero = 0;
const binaryLength = lines[0].length - 1

let mostCommon = []
let leastCommon = []

const func = (arg) => {
  lines.forEach((line) => {
    if (line[arg] === "0") {
      zero++
    } else {
      one++
    }
  })

  if (one > zero) {
    mostCommon.push(1);
    leastCommon.push(0);
  } else {
    mostCommon.push(0);
    leastCommon.push(1)
  }

  one = 0;
  zero = 0;

  if (arg < binaryLength) {
    func(arg + 1)
  } else {
    console.log(parseInt(mostCommon.join(""), 2) * parseInt(leastCommon.join(""), 2))
  }
}

func(0)