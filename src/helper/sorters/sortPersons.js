const sortPersons = (arrayToSort, componentToCompare, sortFromGreatest) => {
    return [...arrayToSort].sort((firstPerson, secondPerson) => {
            let firstValue = firstPerson.personInfo[componentToCompare];
            let secondValue = secondPerson.personInfo[componentToCompare];

            if (firstValue > secondValue) return sortFromGreatest ? 1 : -1;
            if (firstValue < secondValue) return sortFromGreatest ? -1 : 1;
            return 0;
        }
    );
}

export default sortPersons;