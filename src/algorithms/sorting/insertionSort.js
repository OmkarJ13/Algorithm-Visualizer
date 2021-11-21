export const getInsertionSortAnimations = (array) => {
  const animations = [];
  insertionSort(array, animations);
  return animations;
};

const insertionSort = (array, animations) => {
  const n = array.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j > 0; j--) {
      animations.push({
        type: "comparison",
        color: "indigo",
        data: [j, j - 1],
      });

      animations.push({
        type: "comparison",
        color: "mediumpurple",
        data: [j, j - 1],
      });

      if (array[j] < array[j - 1]) {
        animations.push({
          type: "swap",
          data: [
            [j, array[j - 1]],
            [j - 1, array[j]],
          ],
        });

        const temp = array[j];
        array[j] = array[j - 1];
        array[j - 1] = temp;
      } else {
        break;
      }
    }
  }

  for (let i = array.length - 1; i > -1; i--) {
    animations.push({
      type: "done",
      color: "green",
      data: [i],
    });
  }
};
