/* Custom sort of belts by year value. */
const bubbleSort = (beltsToSort: [{belt: string, year: string | number}]) => {
  const sortedBelts = [...beltsToSort];
  for (let i = 0; i < sortedBelts.length - 1; i += 1) {
    for (let j = 0; j < sortedBelts.length - i - 1; j += 1) {
      if (sortedBelts[j + 1].year < sortedBelts[j].year) {
        const temp = sortedBelts[j + 1];
        sortedBelts[j + 1] = sortedBelts[j];
        sortedBelts[j] = temp;
      }
    }
  }
  return sortedBelts;
};

export default bubbleSort;
