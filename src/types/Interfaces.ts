export interface Product {
    firmName: string,
    name: string
    description: string
    price: number | string,
    weight: number | string,
    isOnDiscount: boolean,
    discountPrice: number | string,
    image: string,
    id: number | string
}

export interface Person {
    personInfo: {
        fullName: string,
        photo: string,
        birthYear: string | number;
        weight: string | number;
        belts: [
            {
                beltName: string,
                year: string | number
            }
        ]
    },
    id: string | number
}
