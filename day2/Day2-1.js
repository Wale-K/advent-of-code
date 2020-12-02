const fs = require("fs");

const lines = fs
  .readFileSync("test.txt", { encoding: "utf-8" })
  .split("\n")
  .filter((x) => x);

let validPasswords = 0;

for (let k = 0; k < lines.length; k++) {
  let character = lines[k].split(" ")[1][0]; // this isolates the character that you need to query
  let password = lines[k].split(" ")[2]; // this isolates the password you're confirming is valid or not.
  let range = lines[k].split(" ")[0].split("-"); // this gets the min and max range the charcter needs to appear in the password.
  let min = Number(range[0]); // the minimum amount of times the character needs to appears.
  let max = Number(range[1]); // the maximum amount of times the character needs to appears.
  let passwordArray = password.split(""); // this is each password in an array as separate characters.

  const filterPasswords = (arr, letter) => {
    return arr.filter((password) => password.indexOf(letter) !== -1).length;
  };

  // array.filter produces an array.
  // using .length on the filter method just gives the number of the amount of items in the array.

  const charcterChecker = filterPasswords(passwordArray, character);

  if (charcterChecker >= min && charcterChecker <= max) {
    validPasswords++;
  }
}

console.log("Valid Passwords:", validPasswords);
