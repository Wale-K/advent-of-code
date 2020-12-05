const findMySeat = () => {
  const fs = require("fs");

  const lines = fs
    .readFileSync("puzzle.txt", { encoding: "utf-8" })
    .split("\n")
    .filter((x) => x);

  let min = 0;
  let max = 127;
  let left = 0;
  let right = 7;
  let row = 0;
  let column = 0;
  let myId = 0;
  let ids = [];
  let pastRow = "";
  let pastColumn = "";

  for (let i = 0; i < lines.length; i++) {
    for (let j = 0; j < lines[i].length; j++) {
      if (lines[i][j] === "B") {
        min = max - Math.floor((max - min) / 2);
        pastRow = "B";
      } else if (lines[i][j] === "F") {
        max = min + Math.floor((max - min) / 2);
        pastRow = "F";
      }

      if ((lines[i][j] !== "B") & (lines[i][j] !== "F")) {
        if (pastRow === "B") {
          row = max;
        } else {
          row = min;
        }
      }

      if (lines[i][j] === "L") {
        right = left + Math.floor((right - left) / 2);
        pastColumn = "L";
      } else if (lines[i][j] === "R") {
        left = right - Math.floor((right - left) / 2);
        pastColumn = "R";
      }

      if ((lines[i][j] !== "L") & (lines[i][j] !== "R")) {
        if (pastColumn === "L") {
          column = left;
        } else {
          column = right;
        }
      }

      if (j === 9) {
        if (pastRow === "B" && pastColumn === "L") {
          ids.push(max * 8 + left);
        } else if (pastRow === "B" && pastColumn === "R") {
          ids.push(max * 8 + right);
        } else if (pastRow === "F" && pastColumn === "L") {
          ids.push(min * 8 + left);
        } else {
          ids.push(min * 8 + right);
        }

        min = 0;
        max = 127;
        left = 0;
        right = 7;
      }
    }
  }

  ids
    .sort((a, b) => a - b)
    .forEach((id, index) => {
      let nextSeat = ids[index + 1];
      if (nextSeat - id === 2) {
        myId = id + 1;
      }
    });
  return myId;
};

findMySeat();
