/*Custom sort of belts by year value.*/
const bubbleSort = (beltsToSort) => {
    const sortedBelts = [...beltsToSort];
    for (let i = 0; i < sortedBelts.length - 1; i++) {
        for (let j = 0; j < sortedBelts.length - i - 1; j++) {
            if (sortedBelts[j + 1].year < sortedBelts[j].year) {
                let temp = sortedBelts[j + 1];
                sortedBelts[j + 1] = sortedBelts[j];
                sortedBelts[j] = temp;
            }
        }
    }
    return sortedBelts;
}

export default bubbleSort;