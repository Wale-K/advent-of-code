const fs = require("fs");

const lines = fs
  .readFileSync("day2.txt", { encoding: "utf-8" })
  .split("\n")
  .filter((x) => x);

let validPasswords = 0;
let tally = 0;

for (let k = 0; k < lines.length; k++) {
  let character = lines[k].split(" ")[1][0];
  let password = lines[k].split(" ")[2];
  let range = lines[k].split(" ")[0].split("-");
  let firstIndex = Number(range[0]) - 1;
  let secondIndex = Number(range[1]) - 1;
  let passwordArray = password.split("");

  if (
    (password[firstIndex] === character &&
      password[secondIndex] !== character) ||
    (password[firstIndex] !== character && password[secondIndex] === character)
  ) {
    validPasswords++;
  }
}

console.log("Valid Passwords:", validPasswords);
