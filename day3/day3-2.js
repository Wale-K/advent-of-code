const fs = require("fs");

const lines = fs
  .readFileSync("day3.txt", { encoding: "utf-8" })
  .split("\n")
  .filter((x) => x);
