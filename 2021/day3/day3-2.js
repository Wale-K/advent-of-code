const fs = require("fs");

const lines = fs
  .readFileSync("input.txt", { encoding: "utf-8" })
  .split("\n")
  .filter((x) => x);

let leftovers = [];
let zeroArray = [];
let oneArray = [];
let zeroCount = 0;
let oneCount = 0;
const limit = lines.length - 1;
const numLimit = lines[0].length - 1;

const oxygen = (array, num) => {
  array.forEach((line) => {
    if (line[num] === "0") {
      zeroCount++;
      zeroArray.push(line);
      line;
    } else {
      oneCount++;
      oneArray.push(line);
    }
  });

  if (zeroCount > oneCount && zeroCount !== oneCount) {
    oneArray = [];
    leftovers = zeroArray;
    zeroArray = [];
  } else {
    zeroArray = [];
    leftovers = oneArray;
    oneArray = [];
  }

  zeroCount = 0;
  oneCount = 0;

  if (num < numLimit) {
    oxygen(leftovers, num + 1, leftovers.length - 1);
  }
  return parseInt(leftovers, 2);
};

const carbon = (array, num) => {
  array.forEach((line) => {
    if (line[num] === "0") {
      zeroCount++;
      zeroArray.push(line);
      line;
    } else {
      oneCount++;
      oneArray.push(line);
    }
  });

  if (zeroCount < oneCount || zeroCount === oneCount) {
    oneArray = [];
    leftovers = zeroArray;
    zeroArray = [];
  } else {
    zeroArray = [];
    leftovers = oneArray;
    oneArray = [];
  }

  if (leftovers.length === 1) {
    return;
  }

  zeroCount = 0;
  oneCount = 0;

  if (num < numLimit) {
    carbon(leftovers, num + 1, leftovers.length - 1);
  }
  return parseInt(leftovers, 2);
};

oxygen(lines, 0, limit) * carbon(lines, 0, limit);
