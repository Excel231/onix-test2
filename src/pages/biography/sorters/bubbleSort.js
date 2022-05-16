/*Custom sort of belts by year value.*/
const bubbleSort = (currentBelts) => {
    for (let i = 0; i < currentBelts.length - 1; i++) {
        for (let j = 0; j < currentBelts.length - i - 1; j++) {
            if (currentBelts[j + 1].year < currentBelts[j].year) {
                let temp = currentBelts[j + 1].year;
                currentBelts[j + 1].year = currentBelts[j].year;
                currentBelts[j].year = temp;
            }
        }
    }
    return currentBelts;
}

export default bubbleSort;