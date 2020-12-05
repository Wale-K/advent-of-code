const findHighestId = () => {
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
  let pastRow = "";
  let pastColumn = "";
  let column = 0;
  let ids = [];
  let highestSeat = 0;
  let myId = 0;

  lines.forEach((seat) => {
    seat = seat.split("");

    seat.forEach((data, index) => {
      if (data === "B") {
        min = max - Math.floor((max - min) / 2);
        pastRow = data;
      } else if (data === "F") {
        max = min + Math.floor((max - min) / 2);
        pastRow = data;
      }

      if (data === "R") {
        left = right - Math.floor((right - left) / 2);
        pastColumn = data;
      } else if (data === "L") {
        right = left + Math.floor((right - left) / 2);
        pastColumn = data;
      }

      if (index === 9) {
        row = pastRow === "B" ? max : min;
        column = pastColumn === "L" ? left : right;
        ids.push(row * 8 + column);
        highestSeat =
          row * 8 + column > highestSeat ? row * 8 + column : highestSeat;
        min = 0;
        max = 127;
        left = 0;
        right = 7;
        row = 0;
        column = 0;
      }
    });
  });
  ids
    .sort((a, b) => a - b)
    .forEach((id, index) => {
      if (ids[index + 1] - id === 2) {
        myId = id + 1;
      }
    });
  return highestSeat;
};
