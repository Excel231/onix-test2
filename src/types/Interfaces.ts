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

export interface Belt {
    beltName: string,
    year: string | number
}

export interface Person {
    personInfo: {
        fullName: string,
        photo: string,
        birthYear: string | number;
        weight: string | number;
        belts: Belt[]
    },
    id: string | number
}

export interface Comment {
    fullName: string;
    photoName: string;
    text: string;
    id: string | number;
}

export interface SaleSelectorType {
    saleReducer: {
        saleFinished: boolean;
    }
}

export interface CommentsSelectorType {
    commentsReducer: {
        comments: Comment[];
    };
}

export interface LanguageSelectorType {
    languageReducer: {
        language: string
    }
}
