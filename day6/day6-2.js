const fs = require("fs");

const lines = fs
  .readFileSync("puzzle.txt", { encoding: "utf-8" })
  .split("\n\n")
  .filter((x) => x);

const brokenGroups = lines.map((elem) => {
  elem = elem.replace(/\n/g, " ").split("");
  return elem;
});

let newYesAnswers = [];
let totalSumOfYesAnswers = 0;
let groupsByNumber = [];
let groupNumber = 1;
let tally = 0;
let pastAnswer = "";

let solve = 0;

brokenGroups.forEach((group, boo) => {
  group.forEach((person) => {
    if (person === " ") {
      groupNumber++;
    }

    if (person !== " ") {
      newYesAnswers.push(person);
      totalSumOfYesAnswers++;
    }
  });

  if (groupNumber === 1) {
    solve += newYesAnswers.length;
  } else {
    newYesAnswers.sort().forEach((answer) => {
      tally++;
      if (answer !== pastAnswer) {
        tally = 0;
        tally++;
      }
      if (tally === groupNumber) {
        solve++;
      }

      pastAnswer = answer;
    });
  } // end of the else

  newYesAnswers = [];
  groupNumber = 1;
  tally = 0;
});

console.log(solve);
