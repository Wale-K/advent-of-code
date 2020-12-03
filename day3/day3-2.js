import { countTrees } from "./day3-1";

const multiplyTrees = () => {
  return (
    countTrees(1, 1) *
    countTrees(3, 1) *
    countTrees(5, 1) *
    countTrees(7, 1) *
    countTrees(1, 2)
  );
};
