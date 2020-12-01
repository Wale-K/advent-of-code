let currentIndex = 0;

const answer = () => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] + arr[currentIndex] === 2020) {
      return arr[i] * arr[currentIndex];
    } else if (i === 199) {
      currentIndex++;
      i = 0;
    }
  }
};

answer();
