import Person from "../person-creator/createPerson";
import klitchkoPhoto from "../../images/boxer-photos/Klirschko.jpg"
import bryanPhoto from "../../images/boxer-photos/Bryan.jpg"
import usikPhoto from "../../images/boxer-photos/Usyk.jpg"
import tysonPhoto from "../../images/boxer-photos/Tyson.jpg"
import furyPhoto from "../../images/boxer-photos/Fury.jpg"
import briedisPhoto from "../../images/boxer-photos/Briedis.jpg"

const pregeneratedPersons = [

    /*Zero id is in the first component list with names of parameters.*/
    Person(1,
        "Vitali",
        "Klitshko",
        klitchkoPhoto,
        1971,
        112,
        [
            {beltName: "The Ring", year: 2004},
            {beltName: "WBO", year: 1995},
            {beltName: "WBС", year: 2004}
        ]
    ),

    Person(2,
        "Michael",
        "Tyson",
        tysonPhoto,
        1966,
        90,
        [{beltName: "WBC", year: 1987}],
    ),

    Person(3,
        "Trevor",
        "Bryan",
        bryanPhoto,
        1989,
        90,
        [{beltName:"WBA", year: 2021}]
    ),

    Person(4,
        "Aleksandr",
        "Usik",
        usikPhoto,
        1987,
        100,
        [{beltName: "WBO", year: 2021},
            {beltName: "The Ring", year: 2018},
            {beltName: "WBA", year: 2021},
            {beltName: "IBF", year: 2021},
            {beltName: "IBO", year: 2021}]
    ),

    Person(5,
        "Tyson",
        "Fury",
        furyPhoto,
        1988,
        90,
        [{beltName: "WBO", year: 2016},
            {beltName: "WBA", year: 2015},
            {beltName: "The Ring", year: 2015},
            {beltName: "WBC", year: 2020},
            {beltName: "IBF", year: 2015},
            {beltName: "IBO", year: 2015}]
    ),

    Person(6,
        "Mairis",
        "Briedis",
        briedisPhoto,
        1985,
        91,
        [{beltName: "WBO", year: 2019},
            {beltName: "WBC", year: 2017},
            {beltName: "IBF", year: 2020},]
    )
];

export default pregeneratedPersons;
