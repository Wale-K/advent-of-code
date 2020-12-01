// The Elves in accounting are thankful for your help; one of them even offers you a starfish coin they had left over from a past vacation. They offer you a second one if you can find three numbers in your expense report that meet the same criteria.
// Using the above example again, the three entries that sum to 2020 are 979, 366, and 675. Multiplying them together produces the answer, 241861950.
// In your expense report, what is the product of the three entries that sum to 2020?

let firstIndex = 0;
let secondIndex = 0;

const answer = () => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] + arr[firstIndex] + arr[secondIndex] === 2020) {
      return arr[i] * arr[firstIndex] * arr[secondIndex];
    }
    if (firstIndex === 199) {
      secondIndex++;
      firstIndex = 0;
    }
    if (i === 199) {
      firstIndex++;
      i = 0;
    }
  }
};

answer();
