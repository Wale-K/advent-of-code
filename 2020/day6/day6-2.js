const getNewSum = () => {
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
  let groupNumber = 1;
  let tally = 0;
  let pastAnswer = "";
  let totalYesAnswers = 0;

  brokenGroups.forEach((group) => {
    group.forEach((person) => {
      if (person === " ") {
        groupNumber++;
      } else if (person !== " ") {
        newYesAnswers.push(person);
      }
    });

    if (groupNumber === 1) {
      totalYesAnswers += newYesAnswers.length;
    } else {
      newYesAnswers.sort().forEach((answer) => {
        tally++;
        if (answer !== pastAnswer) {
          tally = 0;
          tally++;
        }
        if (tally === groupNumber) {
          totalYesAnswers++;
        }
        pastAnswer = answer;
      });
    }

    newYesAnswers = [];
    groupNumber = 1;
    tally = 0;
  });
  return totalYesAnswers;
};
