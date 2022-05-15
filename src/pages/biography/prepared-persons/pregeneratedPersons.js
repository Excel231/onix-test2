import Person from "./Person";

const pregeneratedPersons = [

    /*Zero id is in the first component list with names of parameters.*/
    Person(1,
        "Vitali",
        "Klitchko",
        50,
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
        55,
        1966,
        90,
        [{beltName: "WBC", year: 1987}],
    ),

    Person(3,
        "Trevor",
        "Bryan",
        32,
        1989,
        90,
        [{beltName:"WBA", year: 2021}]
    ),

    Person(4,
        "Aleksandr",
        "Usik",
        35,
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
        33,
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
        37,
        1985,
        91,
        [{beltName: "WBO", year: 2019},
            {beltName: "WBC", year: 2017},
            {beltName: "IBF", year: 2020},]
    )
];

export default pregeneratedPersons;
