const createPerson = (id, firstName, secondName, photo,  birthYear, weight, belts) => {
     return {
        id,
        personInfo: {
            firstName,
            secondName,
            fullName: `${firstName} ${secondName}`,
            photo,
            birthYear,
            weight,
            belts
        }
    }
}

export default createPerson;