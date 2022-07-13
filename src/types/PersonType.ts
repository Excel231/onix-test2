interface PersonType {
    id: number | string;
    personInfo: {
        fullName: string;
        photo: string;
        birthYear: string | number;
        weight: string | number;
        belts: [
            beltName: string,
            year: string | number
        ]
    }
}

export default PersonType;
