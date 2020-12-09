const fs = require("fs");

const lines = fs
  .readFileSync("test.txt", { encoding: "utf-8" })
  .split("\n")
  .filter((x) => x);

const allBags = {};

lines.forEach((elem) => {
  const colourBeingSearched = elem.match(/\w+\s\w+/m)[0];
  const allSubsetColours = elem.match(/(?<=\d\s)\w+\s\w+/gm);
  const allSubsetColourAmount = elem.match(/\d/gm);

  //  console.log("Main colour:", colourBeingSearched)
  //  console.log("Contained bags:", allSubsetColours)
  //  console.log("Amount of bags:", allSubsetColourAmount)

  allBags[colourBeingSearched] = [allSubsetColours, allSubsetColourAmount];
});

let totalBags = 0;

// console.log(allBags)

const test = (searchThisColour) => {
  Object.keys(allBags).forEach((focusColour) => {
    console.log(focusColour);
    if (focusColour === searchThisColour) {
      console.log("hello");
    }
  });
};

test("shiny gold");

// This puzzle has not been solved.
