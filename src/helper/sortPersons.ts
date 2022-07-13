import { Person } from '../types/Interfaces';

const sortPersons = (
  arrayToSort: Person[],
  componentToCompare: string,
  sortFromGreatest: boolean
) => {
  return [...arrayToSort].sort((firstPerson, secondPerson) => {
    const firstValue = firstPerson.personInfo[componentToCompare as keyof typeof firstPerson.personInfo];
    const secondValue = secondPerson.personInfo[componentToCompare as keyof typeof secondPerson.personInfo];

    if (firstValue > secondValue) return sortFromGreatest ? 1 : -1;
    if (firstValue < secondValue) return sortFromGreatest ? -1 : 1;
    return 0;
  });
};

export default sortPersons;
