/*This method helps to store persons data easier.*/
const Person = (id, firstName, secondName, age, birthYear, weight, belts) => {
    return {
        id: id,
        name: {
            firstName: firstName,
            secondName: secondName,
            fullName: `${firstName} ${secondName}`
        },
        age: age,
        birthYear: birthYear,
        weight: weight,
        belts: belts
    }
}

export default Person;