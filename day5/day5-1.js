const findSeat = () => {
  const fs = require("fs");

  const lines = fs
    .readFileSync("puzzle.txt", { encoding: "utf-8" })
    .split("\n")
    .filter((x) => x);

  let highestSeat = 0;
  let min = 0;
  let max = 127;
  let left = 0;
  let right = 7;
  let row = 0;
  column = 0;

  lines.forEach((seat) => {
    seat = seat.split("");

    seat.forEach((data) => {
      if (max - min !== 1) {
        if (data === "B") {
          min = max - Math.floor((max - min) / 2);
        } else if (data === "F") {
          max = min + Math.floor((max - min) / 2);
        }
      }
      max - min === 1 && data === "B" ? (row = max) : (row = min);

      if (right - left !== 1) {
        if (data === "R") {
          left = right - Math.floor((right - left) / 2);
        } else if (data === "L") {
          right = left + Math.floor((right - left) / 2);
        }
      }
      right - left === 1 && data === "R" ? (column = right) : (column = left);

      if (right - left === 1) {
        if (highestSeat < row * 8 + column) {
          highestSeat = row * 8 + column;
        }
        min = 0;
        max = 127;
        left = 0;
        right = 7;
      }
    });
  });
  return highestSeat;
};
