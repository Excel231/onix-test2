const createPerson = (id, firstName, secondName, age, birthYear, weight, belts) => {
     return {
        id,
        personInfo: {
            firstName,
            secondName,
            fullName: `${firstName} ${secondName}`,
            age,
            birthYear,
            weight,
            belts
        }
    }
}

export default createPerson;