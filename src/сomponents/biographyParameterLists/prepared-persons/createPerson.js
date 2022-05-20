const createPerson = (id, firstName, secondName, age, birthYear, weight, belts) => {
     return {
        id: id,
        personInfo: {
            firstName: firstName,
            secondName: secondName,
            fullName: `${firstName} ${secondName}`,
            age: age,
            birthYear: birthYear,
            weight: weight,
            belts: belts
        }
    }
}

export default createPerson;