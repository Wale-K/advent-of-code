const fs = require("fs");

const lines = fs
  .readFileSync("puzzle.txt", { encoding: "utf-8" })
  .split("\n")
  .filter((x) => x);

const allBags = {};

lines.forEach((line) => {
  const containedBags = line.match(/(?<=\d\s)\w+\s\w+/gm);
  if (containedBags) {
    allBags[line.match(/\w+\s\w+/m)] = containedBags;
  } else {
    allBags[line.match(/\w+\s\w+/m)] = [];
  }
});

let totalBags = 0;

const countShiny = (arr) => {
  // isolate first argument
  // first is the focus bag that's being searched for (colour in focus)
  // remainder is to be used in the next recursive function
  const [first, ...remainder] = arr;
  // here we want to iterate over allBags and find which bag contains the colour in focus.
  Object.keys(allBags).forEach((colour) => {
    // check if colour in focus is in the "colour" array
    if (allBags[colour].includes(first)) {
      // if (!extraColours.includes(colour)) {

      totalBags++;
      remainder.push(colour);
      // extraColours.push(colour)
      delete allBags[colour];
      // }
      // extraColours.push(colour)
      // if any other colour contains this colour
    }
  });

  if (remainder.length > 0) {
    countShiny(remainder);
  }
};

countShiny(["shiny gold"]);
console.log(totalBags);
