const countPassports = () => {
  const fs = require("fs");

  const lines = fs
    .readFileSync("puzzle.txt", { encoding: "utf-8" })
    .split("\n\n")
    .filter((x) => x);

  let passports = [];
  let validPassports = 0;
  let tally = 0;

  for (let i = 0; i < lines.length; i++) {
    passports.push(lines[i].split(/\n/));
  }

  for (let i = 0; i < passports.length; i++) {
    for (let j = 1; j < passports[i].length; j += 2) {
      passports[i].splice(j, 0, " ");
    }
    passports[i] = passports[i].join("").split(" ");

    if (passports[i].length === 8) {
      validPassports++;
    } else if (passports[i].length === 7) {
      validPassports++;
      for (let k = 0; k < passports[i].length; k++) {
        if (passports[i][k].indexOf("cid") >= 0) {
          validPassports--;
        }
      }
    }
  }
  return validPassports;
};

const fs = require("fs");

const lines = fs
  .readFileSync("puzzle.txt", { encoding: "utf-8" })
  .split("\n\n")
  .filter((x) => x);

let passports = [];
let validPassports = 0;
let tally = 0;

for (let i = 0; i < lines.length; i++) {
  passports.push(lines[i].split(/\n/));
}

for (let i = 0; i < passports.length; i++) {
  for (let j = 1; j < passports[i].length; j += 2) {
    passports[i].splice(j, 0, " ");
  }
  passports[i] = passports[i].join("").split(" ");
}

console.log(passports);
