const fs = require("fs");

const lines = fs
  .readFileSync("puzzle.txt", { encoding: "utf-8" })
  .split("\n\n")
  .filter((x) => x);

let passports = [];
let validPassports = 0;
let invalidPassports = 0;

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
  if (passport.eyr) {
    passport.eyr = Number(passport.eyr);
  }
  if (passport.byr) {
    passport.byr = Number(passport.byr);
  }
  if (passport.iyr) {
    passport.iyr = Number(passport.iyr);
  }
  if (passport.cid) {
    passport.cid = Number(passport.cid);
  }
});

const hexCodes = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
];

allPassports.forEach((passport) => {
  if (
    (Object.keys(passport).length > 6 && !passport.cid) ||
    Object.keys(passport).length === 8
  ) {
    if (passport.eyr >= 2020 && passport.eyr <= 2030) {
      if (passport.byr >= 1920 && passport.byr <= 2002) {
        if (passport.iyr >= 2010 && passport.iyr <= 2020) {
          if (
            passport.pid.length === 9 &&
            Number(passport.pid) >= 0 &&
            Number(passport.pid) <= 999999999
          ) {
            if (
              passport.ecl === "amb" ||
              passport.ecl === "blu" ||
              passport.ecl === "brn" ||
              passport.ecl === "gry" ||
              passport.ecl === "grn" ||
              passport.ecl === "hzl" ||
              passport.ecl === "oth"
            ) {
              if (
                passport.hcl.length === 7 &&
                passport.hcl[0] === "#" &&
                hexCodes.indexOf(passport.hcl[1]) >= -1 &&
                hexCodes.indexOf(passport.hcl[2]) >= -1 &&
                hexCodes.indexOf(passport.hcl[3]) >= -1 &&
                hexCodes.indexOf(passport.hcl[4]) >= -1 &&
                hexCodes.indexOf(passport.hcl[5]) >= -1 &&
                hexCodes.indexOf(passport.hcl[6]) >= -1
              ) {
                if (
                  passport.hgt.endsWith("cm") ||
                  passport.hgt.endsWith("in")
                ) {
                  if (passport.hgt.endsWith("cm")) {
                    if (
                      Number(
                        passport.hgt.substring(0, passport.hgt.length - 2)
                      ) >= 150 &&
                      Number(
                        passport.hgt.substring(0, passport.hgt.length - 2)
                      ) <= 193
                    ) {
                      validPassports++;
                    }
                  } else if (
                    Number(
                      passport.hgt.substring(0, passport.hgt.length - 2)
                    ) >= 59 &&
                    Number(
                      passport.hgt.substring(0, passport.hgt.length - 2)
                    ) <= 76
                  ) {
                    validPassports++;
                  }
                }
              }
            }
          }
        }
      }
    }
  } else {
    invalidPassports++;
  }
});

console.log(validPassports);
