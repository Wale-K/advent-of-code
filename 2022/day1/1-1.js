const fs = require("fs");
const lines = fs.readFileSync("numbers.txt", { encoding: "utf-8" }).split("\n");

let calorieCount = 0;
let highestCalorieCount = 0;

lines.forEach((line) => {
  if (line === "") {
    calorieCount = 0;
  } else {
    calorieCount += Number(line);

    if (calorieCount > highestCalorieCount) {
      highestCalorieCount = calorieCount;
    }
  }
});

console.log(highestCalorieCount);
