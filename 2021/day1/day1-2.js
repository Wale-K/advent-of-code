const fs = require("fs");

const lines = fs
  .readFileSync("input.txt", { encoding: "utf-8" })
  .split("\n")
  .filter((x) => x);

let arr = [];

lines.forEach((line, idx) => {

  if (arr[idx - 2] && arr[idx - 2].length < 3) {
    arr[idx - 2].push(Number(line))
  }

  if (arr[idx - 1] && arr[idx - 1].length < 3) {
    arr[idx - 1].push(Number(line))
  }

  if (!arr[idx]) {
    arr[idx] = [];
    arr[idx].push(Number(line))
  }

})

arr.forEach((number, idx) => {
arr[idx] = number.reduce((a, b) => a + b)
})

const func = () => {
  let answer = 0;

  arr.forEach((number, idx) => {
    if (number < arr[idx + 1]) {
      answer++
    }

  })
  return answer
}