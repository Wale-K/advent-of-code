const fs = require("fs");
const lines = fs.readFileSync("numbers.txt", { encoding: "utf-8" }).split("\n");

let calorieCount = 0;
let arr = [];

lines.forEach((line) => {
  if (line === "") {
    arr.push(calorieCount);
    calorieCount = 0;
  }

  if (line !== "") {
    calorieCount += Number(line);
  }
});

arr.sort((a, b) => b - a);

console.log(arr[0] + arr[1] + arr[2]);
