getSum = () => {
  const fs = require("fs");

  const lines = fs
    .readFileSync("test.txt", { encoding: "utf-8" })
    .split("\n\n")
    .filter((x) => x);

  const brokenGroups = lines.map((elem) => {
    elem = elem.replace(/\n/g, " ").split("");
    return elem;
  });

  let newYesAnswers = [];
  let totalSumOfYesAnswers = 0;

  brokenGroups.forEach((group) => {
    group.forEach((person) => {
      if (person !== " " && newYesAnswers.indexOf(person) === -1) {
        newYesAnswers.push(person);
        totalSumOfYesAnswers++;
      }
    });
    newYesAnswers = [];
  });
  return totalSumOfYesAnswers;
};
