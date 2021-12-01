const countPassports = () => {
  const fs = require("fs");

  const lines = fs
    .readFileSync("puzzle.txt", { encoding: "utf-8" })
    .split("\n\n")
    .filter((x) => x);

  let passports = [];
  let validPassports = 0;

  for (let i = 0; i < lines.length; i++) {
    passports.push(lines[i].split(/\n/));
  }

  for (let i = 0; i < passports.length; i++) {
    for (let j = 1; j < passports[i].length; j += 2) {
      passports[i].splice(j, 0, " ");
    }
    passports[i] = passports[i].join("").split(" ");
  }

  const allPassports = passports.map((doc) => {
    let passportsObj = {};
    doc.forEach((pair) => {
      const [key, value] = pair.split(":");
      passportsObj[key] = value;
    });
    return passportsObj;
  });

  allPassports.forEach((passport) => {
    if (
      (Object.keys(passport).length > 6 && !passport.cid) ||
      Object.keys(passport).length === 8
    ) {
      validPassports++;
    }
  });

  return validPassports;
};
